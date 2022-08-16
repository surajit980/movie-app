import './style/App.css';
import Navbar from './Navbar';
import Movies from './Movies';
import Favourites from './Favourites';
import React from 'react';
import { addMovies } from '../actions';
import {data} from "./data"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      toggle:true
    }
  }
  componentDidMount=()=>{
    this.props.store.subscribe(()=>{
      this.forceUpdate()
    })
    this.props.store.dispatch(addMovies(data))
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
          {this.state.toggle?<Movies data={this.props.store.getState()}/>:<Favourites/>}
        </div>
      </div>
    );
  }
}

export default App;
