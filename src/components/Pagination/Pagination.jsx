import styled from 'styled-components';

const Pagination = ({ total, limit, page, setPage }) => {
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(total)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === total}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 1em;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-right: 5px;
  background: #000080;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #b3d8eb;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #7ea9d4;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
