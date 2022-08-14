import './style/App.css';
import Navbar from './Navbar';
import Movies from './Movies';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='main-center'>
        <div className='main-nav'>
          <div className='tab tab1'>Movies</div><hr/>
          <div className='tab'>Favourites</div>
        </div>
        <hr/>
        <Movies/>
      </div>
    </div>
  );
}

export default App;
