import React from 'react'
import Home from './components/Home'
import BottomNav from './components/BottomNav';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className="frame">
      <Home/>
      <BottomNav />
    </div>
  );
}

export default App;