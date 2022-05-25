import './App.scss';
import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Dashboard from './page/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div class="main-panel">
        <Main></Main>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
