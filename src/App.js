import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import "./styles.css";
import { Main, MenuVertical, MenuButton } from "./styles";
import Header from './Componentes/Header/Header'

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
       
        <Header/>
        <Main>
          <MenuVertical>
            <ul>
              <MenuButton>Início</MenuButton>
              <MenuButton>Em alta</MenuButton>
              <MenuButton>Inscrições</MenuButton>
              <hr />
              <MenuButton>Originais</MenuButton>
              <MenuButton>Histórico</MenuButton>
            </ul>
          </MenuVertical>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
