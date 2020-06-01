import React, { Component } from 'react';
import Header from '../header';
import Nav from '../nav';
import Footer from '../footer';

class Announcements extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Nav />
        <div className="row content">
          <div className="col-md content-inner">
            <h1>
              Naslovi u pripremi
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>Roman</p>
            <h3 className="important-h"><strong>Michel Houellebecq: SEROTONIN</strong></h3>
            <p>Prijevod s francuskog: Mirna Šimat</p>
            <p className="lead"><strong>USKORO IZLAZI</strong></p>
            <p className="paragraph-margin">
              <img className="wide-img" src="http://litteris.com.hr/images/serotonin.jpg" alt="Serotonin" />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Announcements;
