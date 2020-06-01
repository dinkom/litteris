import React, { Component } from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';

class Orders extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1>
              Narudžbe
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>
              Za narudžbe pošaljite upit na <strong>litteris@zg.t-com.hr</strong> i navedite željeni način plaćanja: virmanski ili pouzećem te Vaše podatke za slanje. Poštarina je besplatna za sve narudžbe iznad 200,00 kn.
            </p>
            <p>
              Sve knjige prodaju se s popustom od 25% osim onih koje su na posebnoj akciji.
            </p>
            <p>
              <strong>Broj računa / IBAN:</strong> Litteris d.o.o.<br />
              HR7624840081101452896  /  Raiffeisenbank<br />
              <strong>OIB:</strong> 01493545031<br />
              <strong>Adresa:</strong> Gračanske dužice 21 / 10000 Zagreb<br />
              <strong>e-mail:</strong> litteris@zg.t-com.hr
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Orders;
