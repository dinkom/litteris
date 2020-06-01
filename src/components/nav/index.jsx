import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../search-form';

class Nav extends Component {
  render() {
    let homeClass = 'nav-link';
    let bookClass = 'nav-link';
    let actionClass = 'nav-link';
    let recommendationClass = 'nav-link';
    let announcementClass = 'nav-link';
    let ordersClass = 'nav-link';
    let aboutClass = 'nav-link';

    const url = window.location.href;

    if (url.indexOf('/o-nama') > -1) {
      aboutClass += ' active';
      document.title = 'O nama | Litteris';
    } else if (url.indexOf('/narudzbe') > -1) {
      ordersClass += ' active';
      document.title = 'Narudžbe | Litteris';
    } else if (url.indexOf('/u-pripremi') > -1) {
      announcementClass += ' active';
      document.title = 'U pripremi | Litteris';
    } else if (url.indexOf('/preporuke') > -1) {
      recommendationClass += ' active';
      document.title = 'Preporuke | Litteris';
    } else if (url.indexOf('/akcije') > -1) {
      actionClass += ' active';
      document.title = 'Akcije | Litteris';
    } else if (url.indexOf('/knjige') > -1 || url.indexOf('/pretraga') > -1) {
      bookClass += ' active';
      document.title = 'Knjige | Litteris';
    } else {
      document.title = 'Litteris';
      homeClass += ' active';
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-justify">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={homeClass} to='/'>Noviteti</Link>
            <Link className={bookClass} to='/knjige/'>Knjige</Link>
            <Link className={actionClass} to='/akcije/'>Akcije</Link>
            <Link className={recommendationClass} to='/preporuke/'>Preporuke</Link>
            <Link className={announcementClass} to='/u-pripremi/'>U pripremi</Link>
            <Link className={ordersClass} to='/narudzbe/'>Narudžbe</Link>
            <Link className={aboutClass} to='/o-nama-kontakt/'>O nama / kontakt</Link>
          </div>
        </div>
        <SearchForm />
      </nav>
    );
  }
}

export default Nav;
