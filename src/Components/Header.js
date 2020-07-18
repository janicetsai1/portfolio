import React from 'react';

class Header extends React.Component {
    render() {
        if(this.props.data){
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.city;
            var networks = this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">
            <nav id="nav-wrap">
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {name}.</h1>
                    <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
            </header>
        )
    }
}

export default Header;