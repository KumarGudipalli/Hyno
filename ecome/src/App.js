import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Mobile from './component/Mobile';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='MainContainer'>
      <Mobile/>
      <Content/>
      </div>

    </div>
  );
}

export default App;
