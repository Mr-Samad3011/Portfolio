import React from 'react';

const Modal = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-blue-900 dark:bg-blue-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="text-gray-200">{children}</div>
        <div className="text-right mt-4">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
