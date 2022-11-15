import React from "react";
import { showFormattedDate } from "../utils";
import SuccessAlert from "./SuccessAlert";

export default class CreateNoteForms extends React.Component {
  constructor(props) {
    super(props);

    const defaultImgUrl =
      "https://images.unsplash.com/photo-1667379586896-ce8d7844eb0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzY2MjM1OQ&ixlib=rb-4.0.3&q=80&w=1080";

    this.state = {
      imgUrl: defaultImgUrl,
      createdAt: new Date().toISOString(),
      title: "",
      body: "",
      isShowSuccessAlert: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.successAlertToggle = this.successAlertToggle.bind(this);
  }

  setImgUrl(url) {
    this.setState(() => {
      return {
        imgUrl: url,
      };
    });
  }

  async generateImage() {
    await fetch("https://source.unsplash.com/random")
      .then((res) => {
        this.setImgUrl(res.url);
      })
      .catch((err) => {
        this.setImgUrl("https://source.unsplash.com/random");
        throw err;
      });
  }

  successAlertToggle() {
    this.setState((prev) => {
      return {
        ...prev,
        isShowSuccessAlert: !prev.isShowSuccessAlert,
      };
    });
  }

  handleChange(event) {
    this.setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    alert("Note anda berhasil tersubmit");

    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="mb-4 alert-wrapper">
          {this.state.isShowSuccessAlert && (
            <SuccessAlert toggleHandler={this.successAlertToggle} />
          )}
        </div>
        <div className="rounded-md shadow-xl ring-green-300 ring md:col-span-2 md:mt-0">
          <form onSubmit={this.handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3">
                    <label
                      htmlFor="company-website"
                      className="block text-xl font-medium text-gray-700"
                    >
                      Judul
                    </label>
                    <div className="flex mt-1 rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                        {showFormattedDate(this.state.createdAt)}
                      </span>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Masukan Judul ..."
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <section className="grid gap-3 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="body"
                      className="block text-xl font-medium text-gray-700 mb"
                    >
                      Body Note
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="body"
                        name="body"
                        rows={5}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Isi Note ..."
                        value={this.state.body}
                        onChange={this.handleChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Anda bisa resize kolom diatas jika dibutuhkan.
                    </p>
                  </div>

                  <div>
                    <label className="block mb-2 text-xl font-medium text-gray-700">
                      Cover photo
                    </label>

                    <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-4">
                      <img
                        src={this.state.imgUrl}
                        alt="Cover"
                        className="object-cover object-center w-full h-96"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex justify-end gap-2 px-4 py-3 text-right bg-gray-50 sm:px-6">
                <div
                  onClick={() => this.generateImage()}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Generate Image
                </div>
                <button
                  type="reset"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
