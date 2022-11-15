import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import { getArchivedNotes } from "../utils/local-data";

function ArchivesWrapper() {
  return <Archives />;
}

class Archives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      archivedNotes: getArchivedNotes(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return { keyword };
    });
  }

  render() {
    const selectedNotes = getArchivedNotes().filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <>
        <Header />

        <Search
          keyword={this.state.keyword}
          onSearchHandler={this.onSearchHandler}
        />
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {this.state.archivedNotes.length === 0 ||
          selectedNotes.length === 0 ? (
            <h1 className="text-2xl font-bold text-center col-span-full">
              No archived notes
            </h1>
          ) : (
            selectedNotes.map((note) => {
              return <Card {...note} key={note.id} />;
            })
          )}
        </div>
      </>
    );
  }
}

export default ArchivesWrapper;
