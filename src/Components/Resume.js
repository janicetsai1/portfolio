import React from 'react';
import Bounce from 'react-reveal/Bounce';

class Resume extends React.Component {

    render() {
        if(this.props.data){
            var education = this.props.data.education.map(function(education){
                return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="dat">{education.graduated}</em></p>
                <p>{education.description}</p></div>
            })
            var work = this.props.data.work.map(function(work){
                return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p>{work.description}</p>
                </div>
            })
        }

        return (
            <section id="resume">
                <Bounce left>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>
                    <div className="nine columns main-col" style={{textAlign:'left'}}>
                        {work}
                    </div>
                </div>
                </Bounce>
                
                <Bounce left>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns" style={{textAlign:'left'}}>
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
                </Bounce>

                <Bounce left>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns" style={{textAlign:'left', paddingTop:'10px'}}>
                                <Bounce left><p>C++ • C • Python • Java • React • JavaScript • C#/.NET • HTML • CSS • SQL</p></Bounce>
                            </div>
                        </div>
                    </div>
                </div>
                </Bounce>
            </section>
        );
    }
}

export default Resume;