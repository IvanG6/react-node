import Pagination from "react-bootstrap/Pagination";
import "./Pagination.scss";

interface Props {
  changeCurrentPage: (page: number) => void;
  pages: number[];
  currentPage: number;
}

const PaginationComponent: React.FC<Props> = ({
  changeCurrentPage,
  pages,
  currentPage,
}) => {
  return (
    <Pagination className="wrapper">
      <button
        className="btn btn-prev"
        onClick={() => changeCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2L3 14L15 26"
            stroke="#3A80BA"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {pages.map((el) => (
        <Pagination.Item
          key={el}
          active={currentPage === el}
          onClick={() => changeCurrentPage(el)}
        >
          {el}
        </Pagination.Item>
      ))}

      <button
        className="btn btn-next"
        onClick={() => changeCurrentPage(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        <svg
          width="17"
          height="28"
          viewBox="0 0 17 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L14 14L2 26"
            stroke="#3A80BA"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </Pagination>
  );
};

export default PaginationComponent;
