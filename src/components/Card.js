import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function Card({ id, title, body, imgUrl, createdAt }) {
  return (
    <>
      <article className="relative overflow-hidden duration-150 border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
        <strong className="absolute top-4 left-0 bg-red-600 py-1.5 px-3 text-xs uppercase tracking-wider text-white">
          {showFormattedDate(createdAt)}
        </strong>
        <img
          alt="Img Cover"
          src={imgUrl}
          className="object-cover w-full h-56"
        />

        <div className="p-4 sm:p-6">
          <Link to={`/notes/${id}`}>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </Link>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {body.substring(0, 300)}
          </p>
          <Link to={`/notes/${id}`}>
            <div className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 group">
              Find out more
              <span
                aria-hidden="true"
                className="block transition group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
