import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../book-card';

class BookRow extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="row book-row">
        {books.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    );
  }
}

export default BookRow;

BookRow.propTypes = {
  books: PropTypes.array.isRequired,
};
