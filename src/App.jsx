// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  console.log(import.meta.env.VITE_API);
  return (
    <>
      <div className="selection:bg-purple-600 selection:text-white overflow-hidden">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;