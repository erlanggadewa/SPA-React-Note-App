import React from "react";
import { Route, Routes } from "react-router-dom";
import ArchivesWrapper from "../pages/Archives";
import DetailNote from "../pages/DetailNote";
import Home from "../pages/Home";
import NewNote from "../pages/NewNote";
import NotFound from "../pages/NotFound";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<ArchivesWrapper />} />
        <Route path="/notes/:id" element={<DetailNote />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
