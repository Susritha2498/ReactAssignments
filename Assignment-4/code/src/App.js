import React from 'react';
import './App.css';
import landing_page from './LandingPage/landing_page'
import post_view from './PostView/post_view';

function App() {
  return (
    <div className="wrapper">
      <h1>Landing Page</h1>
      <landing_page/>
      <h1>Post View</h1>
      <post_view/>
    </div>
  );
}
 
export default App;
