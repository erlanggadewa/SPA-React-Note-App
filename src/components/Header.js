import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link to={""}>
        <h1 className="text-3xl font-medium">Note App</h1>
      </Link>
      <Link to={"/archives"}>
        <BsFillArchiveFill className="text-3xl hover:fill-slate-700 cursor-pointer hover:duration-150 hover:scale-105" />
      </Link>
    </header>
  );
}
