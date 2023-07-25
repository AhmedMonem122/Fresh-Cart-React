import ReactPaginate from "react-paginate";

const Pagination = ({
  pageCount,
  setStart,
  setEnd,
  end,
  products,
  renderedProductsPerPage,
}) => {
  // console.log(pageCount);

  // console.log("end outside handlePageClick: ", end);

  const handlePageClick = ({ selected }) => {
    // console.log(selected + 1);
    // renderedProductsPerPage(selected * 8, (selected + 1) * 8);

    setStart(selected * 8);
    setEnd((selected + 1) * 8);

    // console.log("end inside handlePageClick: ", end);
    console.log(selected + 1);
    // console.log(products.length / 8 + 2 === selected + 1);
  };

  // handlePageClick({ selected: 0 });

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
