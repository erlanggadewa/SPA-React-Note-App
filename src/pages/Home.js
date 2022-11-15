import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
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
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <>
        <Header />
        <Search
          keyword={this.state.keyword}
          onSearchHandler={this.onSearchHandler}
        />

        <div className="grid grid-cols-1 gap-5 mt-5 mb-16 sm:grid-cols-2 md:grid-cols-3">
          {this.state.activeNotes.length === 0 || selectedNotes.length === 0 ? (
            <h1 className="text-2xl font-bold text-center col-span-full">
              No active notes
            </h1>
          ) : (
            selectedNotes.map((note) => {
              return <Card {...note} key={note.id} />;
            })
          )}
        </div>

        <Link to={"/new"}>
          <BsPlusSquareFill className="fixed text-5xl duration-150 bottom-5 right-5 md:right-8 lg:right-10 hover:fill-gray-800" />
        </Link>
      </>
    );
  }
}
