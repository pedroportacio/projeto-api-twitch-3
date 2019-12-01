import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import png3 from "../Img/png3.png";
import coco from "../Img/coco.png";
import lol from "../Img/lol.png";
import "../styles.css";

function Principal() {
  return (
    <div>
      <h1 class="main"> Veja os principais jogos e streamers da twitch</h1>
      <img src={png3} width="300" />
      <img src={lol} width="350" />
      <img src={coco} width="150" />
      <h4 class="main">
        Clique Nos Botões em azul na barra verde para selecionar o que deseja
        assistir!
      </h4>
    </div>
  );
}
export default Principal;
