import React, { useState } from 'react';

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? '>' : 'v'}</span>
        </div>
      </button>
      {isOpen && <div className="px-4 py-2 bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;
