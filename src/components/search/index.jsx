import React, { Component, Fragment } from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';
import BookRow from '../book-row';

import books from '../../data';

class Search extends Component {
  sortBooks = (a, b) => {
    if (a.id > b.id) {
      return -1;
    } else if (a.id < b) {
      return 1;
    }

    return 0;
  }

  listToMatrix = (list, elementsPerSubArray) => {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
  }

  getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    // eslint-disable-next-line
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  render() {
    const query = this.getParameterByName('q', window.location.href);

    if (!query) {
      return (
        <div className="container-fluid">
          <Header />
          <Nav />
          <div className="row content">
            <div className="col-md content-inner">
              <h1>
                Pretraga
              </h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              Neispravna pretraga.
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    const filteredBooks = books.filter(b => b.title.toLowerCase().indexOf(query.toLowerCase()) > -1 || b.author.toLowerCase().indexOf(query.toLowerCase()) > -1);
    
    if (!filteredBooks || !filteredBooks.length) {
      return (
        <div className="container-fluid">
          <Header />
          <Nav />
          <div className="row content">
            <div className="col-md content-inner">
              <h1>
                Pretraga
              </h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              Nema rezultata pretrage za pojam "{query}".
            </div>
          </div>
          <Footer />
        </div>
      );
    } 

    console.log(filteredBooks);
    const sortedBooks = filteredBooks.sort(this.sortBooks);
    const booksInRows = this.listToMatrix(sortedBooks, 3);

    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1>
              Pretraga: {query}
            </h1>
            <hr />
          </div>
        </div>
        {
          booksInRows.length ?
          <Fragment>
            {booksInRows.map(b => <BookRow key={b[0].slug} books={b} />)}
          </Fragment>
          : ''
        }
        <Footer />
      </div>
    );
  }
}

export default Search;
