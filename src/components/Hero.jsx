import { Link } from 'react-router-dom';
import foto from '../assets/foto2.png';

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">

        <div className="hero-foto">
          <img src={foto} alt="Foto de Letícia" />
        </div>

        <div className="hero-text">

          <p className="hero-greeting">
            Hello, world!
            <span className="typing-cursor">|</span>
          </p>

          <h1 className="hero-name">
            Eu sou a Letícia
          </h1>

          <h2 className="hero-role">
            Software Engineering Student
          </h2>

          <p className="hero-description">
            Desenvolvedora em formação, apaixonada por tecnologia,
            desenvolvimento web e por transformar ideias em projetos reais.
          </p>

          <Link to="/projetos" className="hero-button">
            Ver meus projetos
          </Link>

        </div>

      </div>
    </main>
  );
}