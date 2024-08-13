// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  console.log(import.meta.env.VITE_API);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

    </>
  );
}

export default App;
