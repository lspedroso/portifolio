import { Link } from "react-router-dom";
import cronosVideo from "../assets/cronosVideo.mp4";
import huiosVideo from "../assets/huiosVideo.mp4";
import portifolioVideo from "../assets/portifolioVideo.mp4";
const projetos = [
  {
    nome: "Projeto Cronos",
    descricao:
      "Sistema desenvolvido para gerenciamento e organização de horários e atividades.",
    tecnologias: ["HTML", "CSS", "PHP"],
    video: cronosVideo,
    link: "https://github.com/lspedroso/projeto-cronos",
  },

  {
    nome: "Projeto Huiós",
    descricao:
      "Site desenvolvido para inscrições de um retiro, com uma interface moderna e interativa.",
    tecnologias: ["React", "Vite", "CSS"],
    video: huiosVideo,
    link: "https://github.com/lspedroso/huios",
  },

  {
    nome: "Meu Portfólio",
    descricao:
      "Meu portfólio pessoal desenvolvido para apresentar minhas habilidades, projetos e trajetória na área de tecnologia.",
    tecnologias: ["React", "Vite", "CSS"],
    video:portifolioVideo,
    link: "https://github.com/lspedroso/portifolio",
  },

  {
    nome: "Novo Projeto",
    descricao:
      "Em breve você poderá encontrar aqui mais um dos meus projetos.",
    tecnologias: ["Em breve"],
    link: "#",
  },
];

function Projetos() {
  return (
    <main className="projetos">

      <Link
        to="/"
        className="botao-voltar"
        aria-label="Voltar para o início"
      >
        ←
      </Link>

      <div className="projetos-container">

        <div className="projetos-titulo">
          <span>PORTFÓLIO</span>

          <h1>Meus Projetos</h1>

          <p>
            Alguns dos projetos que desenvolvi durante minha jornada
            na programação.
          </p>
        </div>

        <div className="projetos-grid">

          {projetos.map((projeto, index) => (

            <article className="projeto-card" key={index}>

              <div className="projeto-imagem">

                {projeto.video ? (
                  <video
                    src={projeto.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <span>
                    PROJETO {String(index + 1).padStart(2, "0")}
                  </span>
                )}

              </div>

              <div className="projeto-conteudo">

                <h2>{projeto.nome}</h2>

                <p>{projeto.descricao}</p>

                <div className="projeto-tecnologias">

                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}

                </div>

                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projeto-botao"
                >
                  Ver projeto →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </main>
  );
}

export default Projetos;