import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Done with the Home Page.This is for the test</div>
    </div>
  );
}

export default App;