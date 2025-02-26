import React, { useState } from "react";

const Header = ({ onClick }) => {

  return (
    <header className="text-white bg-blue-500">
      <div>
        {/* nav top */}
        <nav className="flex justify-between items-center container mx-auto p-2">
          <h1 className="text-2xl font-bold">Page Title</h1>
          <p>Nav 1</p>
        </nav>
        <hr /> {/** //!modificar esta linea */}
        {/* nav button */}
        <nav className="p-2 md:hidden flex justify-between">
          <button onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
