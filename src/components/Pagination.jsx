import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mx-auto p-4 m-4 w-full">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <>
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                href=""
                className="px-3 py-2 leading-tight text-white bg-[#123795] border border-gray-300 hover:bg-[#5a87fb]  "
              >
                {number}
              </a>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
