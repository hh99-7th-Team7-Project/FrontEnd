import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../shared/Cookie';
import '../shared/css/HoverBubble.css';
import Header from './Header/Header';
import { MapPin, Info, Pointer } from '../shared/svg/A-index';

const Map = (props) => {
  const { myLocation } = props;
  const { brand } = useParams();
  const [map, setMap] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  // 마커를 클릭하면 장소명을 표출할 인포윈도우
  const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  console.log(map);

  useEffect(() => {
    const container = document.getElementById('map');
    let markers = [];
    //  map.relayout()
    if (!error) {
      const options = {
        center: new window.kakao.maps.LatLng(myLocation?.lat, myLocation?.lng),
        level: 3,
      };
      console.log(options);

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options);
      container.style.width = '1100px';
      container.style.height = '300px';

      map.relayout();

      // 장소 검색 객체를 생성
      const ps = new window.kakao.maps.services.Places();
      console.log(ps);
      // 키워드 검색 완료 시 호출되는 콜백함수
      const placesSearchCB = (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출

          displayPlaces(data);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          alert('주변 5km내에 매장이 없습니다.');
          return;
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }
      };

      ps.keywordSearch(`${brand}`, placesSearchCB, {
        // 반지름 m단위
        radius: 5000,
        location: new window.kakao.maps.LatLng(
          myLocation?.lat,
          myLocation?.lng
        ),
      });

      // 검색 결과 목록과 마커를 표출하는 함수입니다
      const displayPlaces = (places) => {
        const listEl = document.getElementById('placesList'),
          fragment = document.createDocumentFragment(),
          bounds = new window.kakao.maps.LatLngBounds();
        console.log(listEl);
        // 검색 결과 목록에 추가된 항목들을 제거합니다
        removeAllChildNods(listEl);

        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();

        for (let i = 0; i < places.length; i++) {
          // 마커를 생성하고 지도에 표시합니다
          const placePosition = new window.kakao.maps.LatLng(
              places[i].y,
              places[i].x
            ),
            marker = addMarker(
              placePosition,
              i,
              places[i].place_name,
              places[i].place_url
            ),
            itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          bounds.extend(placePosition);

          // 마커와 검색결과 항목에 mouseover 했을때
          // 해당 장소에 인포윈도우에 장소명을 표시합니다
          // mouseout 했을 때는 인포윈도우를 닫습니다
          (function (marker, title) {
            itemEl.onmouseover = function () {
              displayInfowindow(marker, title);
            };

            itemEl.onmouseout = function () {
              infowindow.close();
            };
          })(marker, places[i].place_name);
          fragment.appendChild(itemEl);
          listEl?.appendChild(itemEl);
        }
        // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
        listEl?.appendChild(fragment);
        // menuEl?.scrollTop = 0;

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      };
      // 검색결과 항목을 Element로 반환하는 함수입니다
      const getListItem = (index, places) => {
        // eslint-disable-next-line prefer-const
        let el = document.createElement('li'),
          itemStr =
            '<span class="markerbg marker_' +
            (index + 1) +
            '"></span>' +
            '<div class="info">' +
            '   <a href="' +
            places.place_url +
            '" target="_blank">' +
            places.place_name +
            '</a>';

        el.style.marginBottom = '';
        el.style.borderBottom = '2px solid #e5e5e5';
        el.style.paddingBottom = '20px';
        el.style.paddingTop = '15px';

        console.log(places.info_pannel);
        if (places.road_address_name) {
          itemStr +=
            '    <span style="color:grey;font-size:14px">' +
            places.road_address_name +
            '</span>' +
            '   <span class="jibun gray" style="color:grey;font-size:14px">' +
            places.address_name +
            '</span>';
        } else {
          itemStr +=
            '    <span style="color:grey;font-size:14px">' +
            places.address_name +
            '</span>';
        }

        itemStr +=
          '  <span class="tel" style="color:grey;font-size:14px">' +
          places.phone +
          '</span>' +
          '</div>';

        el.innerHTML = itemStr;
        el.className = 'item';

        return el;
      };

      // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
      const addMarker = (position, idx, title, url) => {
        const imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
          imageSize = new window.kakao.maps.Size(36, 37), // 마커 이미지의 크기
          imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          },
          markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
          ),
          marker = new window.kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage,
          });

        marker.setMap(map); // 지도 위에 마커를 표출합니다
        markers.push(marker); // 배열에 생성된 마커를 추가합니다

        // 마커 클릭 이벤트 부분
        const iwContent =
            '<div style="color:grey;font-size:14px;padding:17px">' +
            title +
            '<br><a href="' +
            url +
            '" style="color:blue;text-decoration:none;color:#2c278c;font-weight:500;" target="_blank">자세히 보러 가기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

        // 인포윈도우에 닫기 x버튼 추가
        const iwRemoveable = true;

        // 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
          removable: iwRemoveable,
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        // infowindow.open(map, marker);

        window.kakao.maps.event.addListener(marker, 'click', function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);
        });

        // 마커 클립 이벤트 부분 end

        return marker;
      };

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      const removeMarker = () => {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      };

      // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
      // 인포윈도우에 장소명을 표시합니다
      const displayInfowindow = (marker, title) => {
        const content =
          '<div style="padding:5px;z-index:1;">' + title + '</div>';

        infowindow.setContent(content);
        infowindow.open(map, marker);
      };

      // 검색결과 목록의 자식 Element를 제거하는 함수입니다
      const removeAllChildNods = (el) => {
        while (el.hasChildNodes()) {
          el.removeChild(el.lastChild);
        }
      };
      // 유저 현위치 마커 생성
      // eslint-disable-next-line
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          myLocation?.lat,
          myLocation?.lng
        ),
        map: map,
      });
    } else {
      // 유저위치 못가져올 경우 디폴트 지도화면
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);
      // eslint-disable-next-line
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(33.450701, 126.570667),
        map: map,
      });
    }
  }, [map]);

  const nickname = getCookie('nickname');

  return (
    <>
       <div style={{margin:"auto", width:"62%"}}>
        <Header />
      </div>
      <div style={{ position: 'relative', margin: 'auto' }}>
        <ScMapWrap>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              justifyContent: "space-between",
              gap: '5px',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              gap: '5px',
            }}>
            <div style={{ fontSize: '26px' }}>내주변 카페</div>
            <div id="menu">
              <div>
                <span>
                  <img src={Info} alt="" />
                </span>
                <p className="arrow_box">반경 5KM 안에있는 카페 결과입니다.</p>
              </div>
            </div>
            </div>
            <div onClick={()=>{navigate(-1)}}>✖</div>
          </div>
          <ScMap id="map">지도</ScMap>
          <div>
            <div>
              <ScButton
                onClick={() => {
                  setMap(true);
                }}
              >
                <img src={Pointer} alt="" />
                내주변 카페 찾기
              </ScButton>
              <div>
                {/* {nickname === undefined ? (<p>커파인러님 주변에 있는</p>) : (<p>{`${nickname}님 주변에 있는`}</p>)}
                <p><span>{brand}</span>매장 정보예요</p> */}
              </div>
              <hr />
              <ScList id="placesList">목록</ScList>
            </div>
          </div>
        </ScMapWrap>
      </div>
    </>
  );
};

export default Map;

const ScMapWrap = styled.div`
  /* display: flex; */
  gap: 30px;
`;
const ScMap = styled.div`
  height: 600px;
  background-color: grey;
  /* border: 1px solid #2c278c; */
  box-shadow: 0 7px 6px 0 #00000026;
`;

const ScList = styled.div`
  overflow-y: scroll;
  height: 300px;
  li {
    list-style: none;
  }
`;
const ScButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 41px;
  color: white;
  background-color: #2c278c;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  margin: 20px 0;
`;
