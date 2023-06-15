import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="input-group mt-3">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search"
          />
          <button type="button" class="btn  btn-secondary search-button">
            <img
              src={require("../img/search-interface-symbol.png")}
              alt="search"
              height="20"
              width="20"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
