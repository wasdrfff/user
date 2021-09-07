import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import SubHeader from './Components/Subheader/SubHeader'
import Body from './Components/Body/Body'
import { FirstBlock } from './Components/FirstBlock/FirstBlock';
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Body />
      <FirstBlock />

    </div>
  );
}

export default App;
