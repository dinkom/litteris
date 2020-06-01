import React, { Component } from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';

import fb from '../../img/fb.png';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1>
              O nama / kontakt
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>
              Nakladnička kuća Litteris osnovana je krajem 2002. godine, a prva knjiga 
– bila je to 'Platforma' poznatoga francuskog romanopisca Michela Houellebecqa, autora koji je na neki način proslavio i postao zaštitnim znakom te izdavačke kuće, izašla je u proljeće iduće godine. Prvobitni dizajn za knjige, kao i logotip Litterisa, izradio je Mihajlo Arsovski.
            </p>
            <p>
              Otada pa do danas Litteris se profilirao kao izdavač knjiga pisanih istančanim ukusom i visokim književnim stilom, koje su namijenjene zahtjevnijoj čitalačkoj publici, Baudelaire, Pound, Ortega y Gasset, Fuentes,  Mishima, Kerouac, Huysmans, Artaud, Michaux, Schulz, Quignard, Simone Weil, Barbery , Illich, Tanizaki– samo su neki od Litterisovih stranih autora, a od hrvatskih Gotovac, Paić,  Jarak, Benčić-Rimay, Pejaković  i drugi. 
            </p>
            <p>
              U Litterisovoj ponudi nalaze se najraznolikiji naslovi – od zbirki poezije, eseja i romana do stručnih naslova, knjiga iz područja duhovnosti, umjetnosti, filozofije, medicine, ekonomije, arhitekture i urbanizma, te vrijednih monografskih izdanja, hrvatskih i inozemnih pisaca. Također, svojim reprint izdanjima, poput, primjerice, Talmuda, Litteris hrvatskoj kulturnoj javnosti nastoji vratiti, odnosno podsjetiti je na neka od temeljnih djela naše kulture i civilizacije.
            </p>
            <p>
              <strong>LITTERIS d.o.o.</strong>
            </p>
            <p>
              Adresa: Gračanske dužice 21 / 10000 Zagreb<br />
              e-mail: litteris@zg.t-com.hr<br />
              tel.: 01/4648-039<br />
              mob.: 099/6161-004
            </p>
            <p>
              Pratite nas na Facebooku!
              <a
                href="https://www.facebook.com/Litteris-1813790128730919/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Facebook" src={fb} className="fb-link-page" />
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
