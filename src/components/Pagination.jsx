export const Pagination = ({
  onLeftClick,
  onRightClick,
  pages,
  totalPages,
}) => {
  return (
    <div className="pagination-container">
      <button onClick={onRightClick}>
        <img src="static/arrow.svg" className="right-arrow" />
      </button>

      <div className="nes-container is-rounded pagination">
        <h3>
          {pages} of {totalPages}
        </h3>
      </div>

      <button onClick={onLeftClick}>
        <img src="static/arrow.svg" className="left-arrow" />
      </button>
    </div>
  );
};
