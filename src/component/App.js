import './style/App.css';
import Navbar from './Navbar';
import Movies from './Movies';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      toggle:true
    }
  }
  
  toggleToTrue=()=>{
    if (this.state.toggle) {
      return;
    }
    this.setState({
      toggle:true
    })
  }
  toggleToFalse=()=>{
    if (!this.state.toggle) {
      return;
    }
    this.setState({
      toggle:false
    })
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className='main-center'>
          <div className='main-nav'>
            <div className={this.state.toggle?"tab active":"tab"} onClick={this.toggleToTrue}>Movies</div>
            <div className={this.state.toggle?"tab":"tab active"} onClick={this.toggleToFalse} >Favourites</div>
          </div>
          <hr/>
          <Movies isTrue={this.state.toggle}/>
        </div>
      </div>
    );
  }
}

export default App;
