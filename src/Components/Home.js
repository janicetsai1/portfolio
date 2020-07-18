import React from 'react';

class Home extends React.Component {
    render() {

        if(this.props.data){
            var name = this.props.data.name;
            // var profilepic = "images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var email = this.props.data.email;
            // var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <h1>This is the home page</h1>
        );
    }
}

export default Home;