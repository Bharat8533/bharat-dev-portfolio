import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} /> {/* Default route for "/" */}
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Projects />} />
  </Route>
);

// Create the router with routes
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
