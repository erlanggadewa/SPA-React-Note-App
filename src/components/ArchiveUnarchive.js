import React from "react";

const { RiInboxArchiveLine, RiInboxUnarchiveLine } = require("react-icons/ri");
const { useNavigate } = require("react-router-dom");
const { archiveNote, unarchiveNote } = require("../utils/local-data");

export default function ArchiveUnarchive(props) {
  const { isArchived = props.archived, id } = props;

  const navigate = useNavigate();

  return isArchived ? (
    <RiInboxUnarchiveLine
      onClick={() => {
        unarchiveNote(id);
        navigate("/");
      }}
      className="text-3xl text-green-600 duration-150 cursor-pointer hover:text-green-800 hover:scale-110"
    />
  ) : (
    <RiInboxArchiveLine
      onClick={() => {
        archiveNote(id);
        navigate("/");
      }}
      className="text-3xl text-green-600 duration-150 cursor-pointer hover:text-green-800 hover:scale-110"
    />
  );
}
