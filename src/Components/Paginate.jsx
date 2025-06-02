const PaginateTODOS = ({ todosPerPage, currentPage, paginate, totalTodos }) => {
  const pageNumber = [];
  const totalPages = Math.ceil(totalTodos / todosPerPage);
  for (let i = 0; i < totalPages; i++) {
    pageNumber.push(i);
  }
  if (pageNumber.length <= 1) return null;
  return (
    <>
      <div className="pagination-container">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="pag-nav"
        >
          Previous
        </button>
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                className={`page-link ${
                  currentPage === number ? "active" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="pag-nav"
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default PaginateTODOS;
