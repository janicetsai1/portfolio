import React from 'react';
import profilepic from '../images/profilepic.jpg';

class About extends React.Component {
   render() {
      if(this.props.data){
         var bio = this.props.data.bio;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }
      /*
         <div className="columns download">
            <p>
            <a href={resumeDownload} className="button"><i className="fa fa-download"></i>View Resume</a>
            </p>
         </div>
      */
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img src={profilepic} alt="Janice Tsai Profile Pic" />
               </div>
               <div className="nine columns main-col" style={{paddingLeft:'70px'}}>
                  <h2 style={{textAlign:'left'}}>About Me</h2>
      
                  <p style={{textAlign:'left'}}>{bio}</p>
                  <div className="row" style={{textAlign:'left'}}>
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p>
                        Feel free to contact me. I'd love to connect with you! <br></br>
                        <span>{email}</span>
                        </p>
                     </div>

                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default About;