import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import png3 from "../Img/png3.png";
import coco from "../Img/coco.png";
import "../styles.css";

function Principal() {
  return (
    <div>
      <h1 class="main"> Veja os principais jogos e streamers da twitch</h1>
      <img src={png3} width="300" />
      <img src={coco} width="150" />
    </div>
  );
}
export default Principal;
