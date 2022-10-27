import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import ArchiveUnarchive from "../components/ArchiveUnarchive";
import { showFormattedDate } from "../utils";
import { deleteNote, getNote } from "../utils/local-data";

export default function DetailNote() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="flex items-center justify-between px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Detail Note
          </h3>
          <div className="flex justify-end gap-5 mt-5 action-wrapper">
            <ArchiveUnarchive {...note} />
            <RiDeleteBin6Line
              onClick={() => {
                deleteNote(id);
                navigate("/");
              }}
              className="text-3xl text-red-600 duration-150 cursor-pointer hover:text-red-800 hover:scale-110"
            />
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {note.title}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {showFormattedDate(note.createdAt)}
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {note.archived ? "Archived" : "Active"}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Content</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {note.body}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
