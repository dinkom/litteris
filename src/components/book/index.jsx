import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';
import FiftyOff from '../fifty-off';

import books from '../../data';

import order from '../../img/order.png';
import back from '../../img/back.png';

class Book extends Component {
  constructor() {
    super();
    this.state = {
      book: '',
    };
  }

  componentWillMount() {
    const { match } = this.props;
    const slug = match.params.slug;
    const book = books.filter(b => b.slug === slug)[0];

    this.setState({
      book,
    });
  }

  componentDidMount() {
    document.title = `${this.state.book.title} | Litteris`;
    window.scrollTo(0, 0);
  }

  render() {
    const { book } = this.state;
    const authorSearch = `/pretraga/?q=${encodeURI(book.author)}`;

    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1 className="book-title-large">
            <div
              className="back-button"
              onClick={this.props.history.goBack}>
                <img alt="<" src={back} />
            </div>
              {book.title}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <div className="book-card">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <Link className="author-link" to={authorSearch}>{book.author}</Link>
                    </div>
                  </td>
                  <td rowSpan="4" className="text-right book-image-td">
                    <img src={book.image} alt="" />
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
        </div>
        <div className="row">
          <div className="col-md">
            <p className="book-description">
              {book.description}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Book);
