import React from "react";

const Popup = ({ onClose, submissionMsg }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white w-64 p-4 rounded shadow relative">
        <h2 className="text-lg font-bold mb-2">Attention!</h2>
        <p>{submissionMsg}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
