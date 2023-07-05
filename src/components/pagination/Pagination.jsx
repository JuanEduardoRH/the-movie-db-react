import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ReactPaginate from "react-paginate"

export const Pagination = ({ itemsPerPage, total, onPageChange, forcePage = null }) => {
  return (
    <ReactPaginate
      breakLabel=""
      nextLabel={<MdArrowForward className="m-auto text-white" size={18} />}
      previousLabel={<MdArrowBack className="m-auto text-white" size={18} />}
      nextClassName="w-[42px] h-[42px] bg-primary-400"
      previousClassName="w-[42px] h-[42px] bg-primary-400"
      previousLinkClassName="flex items-center justify-center h-full"
      nextLinkClassName="flex items-center justify-center h-full"
      containerClassName="pagination flex items-center gap-1 select-none"

      activeClassName="!bg-primary-400 hover:!bg-primary-300"
      pageClassName="w-[42px] h-[42px] cursor-pointer rounded text-white bg-primary-700 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-800"
      pageLinkClassName="flex items-center justify-center h-full"
      disabledClassName="pointer-events-none text-gray-300 opacity-50"
      onPageChange={onPageChange ? ({ selected }) => onPageChange(selected + 1) : null}
      pageRangeDisplayed={itemsPerPage}
      marginPagesDisplayed={0}
      pageCount={total}
      renderOnZeroPageCount={null}
      forcePage={forcePage}
    />
  );
}
