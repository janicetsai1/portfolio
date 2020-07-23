import React, { Component } from 'react';
import myWebsiteScreenshot from '../images/my_website_screenshot.png';
import creativeLabsImg from '../images/creative_labs.jpg';
import bhsImg from '../images/bruin_home_solutions.png';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        if(projects.title === 'The Data Grid') {
            return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
             <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={bhsImg} />
                <div className="overlay">
                   <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                   </div>
                 </div>
               <div className="link-icon"><i className="fa fa-link"></i></div>
             </a>
           </div>
         </div>
        }
        if(projects.title === 'Personal Website') {
            return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
             <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={myWebsiteScreenshot} />
                <div className="overlay">
                   <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                   </div>
                 </div>
               <div className="link-icon"><i className="fa fa-link"></i></div>
             </a>
           </div>
         </div>
        }
        if(projects.title === 'Smart Coffee Machine') {
            return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
             <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={creativeLabsImg} />
                <div className="overlay">
                   <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                   </div>
                 </div>
               <div className="link-icon"><i className="fa fa-link"></i></div>
             </a>
           </div>
         </div>
        } 
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
