import React, { Component } from 'react';
import visualizerImg from '../images/visualizer_img.png';
import bhsImg from '../images/bruin_home_solutions.png';
import kontagionImg from '../images/kontagion.png';
import deliverySystemImg from '../images/delivery-system.png';

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
        if(projects.title === 'Pathfinding Algorithm Visualizer') {
          return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
           <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={visualizerImg} />
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
      if(projects.title === 'Delivery System') {
          return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
           <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={deliverySystemImg} />
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
      if(projects.title === 'Kontagion') {
          return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
           <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={kontagionImg} />
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
