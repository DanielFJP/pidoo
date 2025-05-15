import React, { useState } from "react";
import './Registro.css'
import logo from "../../img/pidoo-logo.png";
import { Link } from 'react-router-dom';


function Registro() {

  return (
      <div className="register-container">
          <div className="register-card">
              <img src={logo} alt="Logo Pidoo" className="logo" />
              <h2>¡Crea tu cuenta!</h2>

              <form>
                  <input type="text" placeholder="Nombre completo" />
                  <input type="email" placeholder="Correo electrónico" />
                  <input type="password" placeholder="Contraseña" />
                  <input type="password" placeholder="Confirmar contraseña" />

                  <button type="submit" className="btn-primary">
                      Registrarse
                  </button>
              </form>

              <div className="or-divider">o</div>

              <button className="btn-social google">
                  <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                  />
                  Continuar con Google
              </button>
              <button className="btn-social apple">
                  <img
                      src="https://www.svgrepo.com/show/511330/apple-173.svg"
                      alt="Apple"
                  />
                  Continuar con Apple
              </button>

              <p className="login-link">
                  ¿Ya tienes una cuenta? <Link to={"/"}>Inicia sesión</Link>
              </p>
          </div>
      </div>
  );
}

export default Registro