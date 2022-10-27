import PropTypes from "prop-types";
import React from "react";

export default function Search({ keyword, onSearchHandler }) {
  return (
    <>
      <div>
        <label
          htmlFor="search-input"
          className="block mb-2 text-xl font-medium text-gray-900 "
        >
          Semua Catatan
        </label>
        <input
          value={keyword}
          onChange={(e) => onSearchHandler(e.target.value)}
          type="text"
          id="search-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="masukan judul yang dicari"
        />
      </div>
    </>
  );
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearchHandler: PropTypes.func.isRequired,
};
