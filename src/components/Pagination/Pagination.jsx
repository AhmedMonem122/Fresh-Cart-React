import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, setStart, setEnd }) => {
  const handlePageClick = ({ selected }) => {
    setStart(selected * 8);
    setEnd((selected + 1) * 8);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName="pagination justify-content-center mt-3"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextClassName="page-item"
      previousClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      activeClassName="page-item active"
      activeLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagination;
