import React from 'react';
import styled from 'styled-components';

const BoardPagination = ({total, page, setPage}) => {


  return (
    <>
        <ScNav>
            <ScButton 
                onClick={()=>setPage(page - 1)}
                disabled={page === 1}>
                &lt;
            </ScButton>
            {Array(total)
                .fill()
                .map((_, i)=>(
                    <ScButton
                        key={i + 1}
                        onClick={()=>setPage(i + 1)}
                        aria-current={page === i + 1? "page" : null}> {i + 1}
                    </ScButton>
                ))}
            <ScButton 
                onClick={()=>setPage(page + 1)}
                disabled={page === total}>
                &gt;
            </ScButton>
        </ScNav>
    </>
  )
}

const ScNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`;

const ScButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: black;
    color: white;
    font-size: 1rem;
    &:hover {
        background: tomato;
        cursor: pointer;
        transform: translateY(-2px);
    }
    &[disabled] {
        background: grey;
        cursor: revert;
        transform: revert;
    }

    &[aria-current] {
        background: deepskyblue;
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`;

export default BoardPagination