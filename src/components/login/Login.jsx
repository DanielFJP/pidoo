import React from 'react'
import { useState } from 'react'
import "./Login.css"
import logo from '../../img/pidoo-logo.png';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        console.log("Email:", email);
        console.log("Password:", password);
    };
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-right">
                    <img src={logo} alt="Logo de Pidoo" className="logo" />

                    <h2>¡Bienvenido a Pidoo!</h2>
                    <p>Inicia sesión para gestionar tu negocio</p>
                    <form onSubmit={handleSubmit}>
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="correo@ejemplo.com"
                        />

                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="********"
                        />

                        <button type="submit" className="btn-primary">
                            Iniciar sesión
                        </button>
                    </form>

                    <div className="social-buttons">
                        <button className="btn-social google">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                            />
                            Iniciar con Google
                        </button>
                        <button className="btn-social apple">
                            <img
                                src="https://www.svgrepo.com/show/511330/apple-173.svg"
                                alt="Apple"
                            />
                            Iniciar con Apple
                        </button>
                    </div>

                    <p className="register-link">
                        ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login