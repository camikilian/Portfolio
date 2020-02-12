import React, { Component } from 'react';
export default class Header extends Component {
  render() {
      return (
  
        <section id="resume">
          {/* Education----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>The British Schools</h3>
                  <p className="info">International Baccalaureate <span>•</span> <em className="date">December 2014</em> <span>•</span> <em className="date">Montevideo, UY</em></p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Florida Atlantic University</h3>
                  <p className="info">B.S. Degree in Computer Engineering <span>•</span> <em className="date">August 2019</em> <span>•</span> <em className="date">Boca Raton, FL</em></p>
                  <p>
                      GPA: 3.4/4.0
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Florida Atlantic University</h3>
                  <p className="info">B.S. Degree in Computer Science <span>•</span> <em className="date">August 2019</em> <span>•</span> <em className="date">Boca Raton, FL</em></p>
                  <p>
                      GPA: 3.4/4.0
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Experience</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Web Developer Intern</h3>
                  <p className="info">Wiper Agency <span>•</span> <em className="date">January 2019 - May 2019</em></p>
                  <p>
                  Created websites layout and UI with the use of standard HTML/CSS<br />
                  Build and maintained software documentation for projects, mainly gathering specifications and requirements<br />
                  Assisted in creating, updating and administrating relational databases usign SQL language<br />
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Social Media Manager</h3>
                  <p className="info">Complejo Turistico Costa Alta <span>•</span> <em className="date">September 2014 - December 2016</em></p>
                  <p>
                    Created and managed relevant social media content for resort, resulting in 80% increase in clients<br />
                    Collaborated with managers in elaborating and executing 3 promotions for the resort in low season<br />
                    Utilized Google Analytics to get insights and learning capabilites to perform data analysis. Used advertising
                    insights to create reports for business<br />
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand c" /><em>C/C++</em></li>
                  <li><span className="bar-expand java" /><em>Java</em></li>
                  <li><span className="bar-expand python" /><em>Python</em></li>
                  <li><span className="bar-expand sql" /><em>SQL</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html" /><em>HTML</em></li>
                  <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
          {/* Volunteering----------------------------------------------- */}
           <div className="row education">
            <div className="three columns header-col">
              <h1><span>Volunteering</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>IB Creativity Action and Service Projects</h3>
                  <p className="info">Volunteer <span>•</span> <em className="date">January 2013 - December 2014</em><span>•</span> <em className="date">Montevideo, UY</em></p>
                  <p>
                      Collected enriching textbooks and school supplies and managed the logistics of distributing them to rural schools
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Un Techo Para Mi Pais</h3>
                  <p className="info">Volunteer<span>•</span> <em className="date">January 2014 - December 2014</em> <span>•</span> <em className="date">Montevideo, UY</em></p>
                  <p>
                      Collaborated in efforts to reduce poverty in Uruguay by building shelters for the homeless using raw and recycled materials
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>IB Andes Programme</h3>
                  <p className="info">Volunteer<span>•</span> <em className="date">October 2012</em> <span>•</span> <em className="date">Lagunillas Central Andes, CL</em></p>
                  <p>
                      Assisted with a leadership development and team building expedition for young, loca, handicapped people
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Languages
        ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Languages</span></h1>
            </div>
            <div className="nine columns main-col">
              <p className="languages">Native Spanish, Fluent in spoken and written communication English and Proficient Portuguese
              </p>
            </div> {/* main-col end */}
          </div> {/* End Languages */}

        </section> 
      );
    }
  };