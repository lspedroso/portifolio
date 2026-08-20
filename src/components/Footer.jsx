function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-nome">
          <h2>Letícia Pedroso</h2>
          <p>Estudante de Engenharia de Software</p>
        </div>

        <div className="footer-links">

          <a
            href="https://www.linkedin.com/in/letícia-silva-pedroso?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/lspedroso"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <span>
            📍 Belo Horizonte - MG
          </span>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Letícia Pedroso. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;