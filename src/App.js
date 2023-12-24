import logo from './logo.svg';
import './App.css';
import Center1 from "./components/mald"
import Header from './headfoot/header';
import Footer from './headfoot/footer';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
        <Center1/>
        <div className='fot'><Footer/></div>
      </header>
    </div>
  );
}

export default App;
