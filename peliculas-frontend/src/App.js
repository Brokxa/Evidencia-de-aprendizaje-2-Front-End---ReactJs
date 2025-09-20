import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AgregarPage from "./pages/AgregarPage";
import MediaPage from "./pages/MediaPage";

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #232526 0%, #414345 100%)' }}>
        {/* Barra de navegación */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Películas App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/agregar">
                    Agregar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/peliculas">
                    Películas / Series
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Rutas */}
        <div className="container mt-4">
          <Routes>
            <Route path="/agregar" element={<AgregarPage />} />
            <Route path="/peliculas" element={<MediaPage modoBusqueda={true} />} />
            <Route
              path="/"
              element={
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
                  <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff', letterSpacing: '2px', textShadow: '2px 2px 8px #000' }}>
                    Películas App
                  </h1>
                  <p className="mt-3" style={{ color: '#e0e0e0', fontSize: '1.2rem', maxWidth: 600, textAlign: 'center', textShadow: '1px 1px 4px #000' }}>
                    Bienvenido a la aplicación de películas. Explora tu catálogo de películas y series favoritas de manera sencilla y visual.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;