import React, { Component, Fragment } from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';
import BookRow from '../book-row';

import books from '../../data';

class Actions extends Component {
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

  render() {
    const sortedBooks = books.filter(b => b.fiftyOff).sort(this.sortBooks);
    const booksInRows = this.listToMatrix(sortedBooks, 3);

    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1>
              Akcije
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

export default Actions;
