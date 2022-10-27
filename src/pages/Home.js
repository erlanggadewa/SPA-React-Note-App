import React from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { getActiveNotes } from "../utils/local-data";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      activeNotes: getActiveNotes(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const selectedNotes = getActiveNotes().filter((note) =>
      note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <>
        <Search
          keyword={this.state.keyword}
          onSearchHandler={this.onSearchHandler}
        />
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {this.state.activeNotes.length === 0 ? (
            <h1 className="text-2xl font-bold text-center col-span-full">
              No active notes
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
