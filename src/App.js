import React from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <Home data={this.state.resumeData.main}/>
      </div>
    );
  }
  
}

export default App;
