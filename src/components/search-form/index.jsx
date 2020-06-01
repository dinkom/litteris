import React, { Component } from 'react';

class SearchForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const q = this.queryInput.value;

    if (!q) {
      return;
    }

    const url = `/pretraga/?q=${encodeURI(q)}`;
    window.location.href = url;
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Pretraži web stranicu"
          aria-label="Search"
          ref={(instance) => { this.queryInput = instance; }}
        />
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Pretraži</button>
      </form>
    );
  }
}

export default SearchForm;
