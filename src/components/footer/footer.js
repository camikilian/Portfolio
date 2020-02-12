import React, { Component } from 'react';
export default class Header extends Component {
  render() {
      return (
  
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/cami.kilian"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://twitter.com/CamiKilian"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/camille-kilian"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/camikilian/"><i className="fa fa-instagram" /></a></li>

              </ul>
              <ul className="copyright">
                <li>© Copyright 2020 Camille Kilian</li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> 
      );
    }
  };