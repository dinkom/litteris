import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FiftyOff from '../fifty-off';

import order from '../../img/order.png';

class BookCard extends Component {
  render() {
    const { book } = this.props;
    const authorSearch = `/pretraga/?q=${encodeURI(book.author)}`;
    const bookLink = `/knjige/${book.slug}/`;

    return (
      <div className="col-md-4">
        <div className="book-card">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>
                    <Link className="book-link" to={bookLink}>{book.title}</Link>
                  </strong>
                  <div>
                    <Link className="author-link" to={authorSearch}>{book.author}</Link>
                  </div>
                </td>
                <td rowSpan="4" className="text-right book-image-td">
                  <Link to={bookLink}><img src={book.image} alt="" /></Link>
                  {
                    book.fiftyOff ?
                      <FiftyOff /> : ''
                  }
                </td>
              </tr>
              <tr>
                <td>
                  <div className="book-info">
                    {
                      book.translation ?
                        <div>Prijevod: {book.translation}</div> : ''
                    }
                    {
                      book.date ?
                        <div>{book.date}</div> : ''
                    }
                    {
                      book.info ?
                        <div>{book.info}</div> : ''
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {
                    book.price ?
                      <div className="book-price">{book.price}</div> : ''
                  }
                  {
                    book.discountedPrice ?
                      <div className="book-discounted-price"><strong>{book.discountedPrice}</strong></div> : ''
                  }
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="order-link" to="/narudzbe/">
                    <img src={order} alt="Naruči" className="order-icon" />
                    <span className="order-text">Naruči</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};
