import React, { Component } from 'react';
export default class Header extends Component {
  render() {
      return (
  
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profile.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a Computer Engineer and Computer Science graduate from Montevideo, Uruguay. I moved to Miami,FL for my undergraduate
                studies and decided to start my professional career here in the United States.<br />
                I am a motivated, enthusiastic and hard working person. I have the ability to compromise, show respect and listen to others opinion.
                As an outgoing and friendly person, I feel comfortable in both team environment and working individually.  
                I have a creative mind which can quickly face new challenges and confident in my skills can provide solutions to any problem.
                I am eager to begin a learning process that an employment opportunity will afford me.<br /> 
                Currently, I am seeking a position where my development skills can be used in favor of the company. Looking forward to learn and work under high pressure environments
                to succesfully take the duties therein the position.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Camille Kilian</span><br />
                    <span>1800 N Bayshore Dr<br />
                      Miami, FL 33132 US
                    </span><br />
                    <span>(786)612-3183</span><br />
                    <span>camille.kilian95@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/Users/camillekilian/Desktop/Portfolio/MyApp/resume/CamilleKilian_Resume" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> 
      );
    }
  };