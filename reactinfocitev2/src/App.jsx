//import logo from './logo.svg';
import { StrictMode } from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <StrictMode>
        <NavBar />
        <Main />
      </StrictMode>   
    </>
  );
}

export default App;
