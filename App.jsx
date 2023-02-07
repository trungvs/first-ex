import './App.css';

import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='section-container'>
        <Introduction />
        <Features />
      </div>
    </div>
  );
}

export default App;
