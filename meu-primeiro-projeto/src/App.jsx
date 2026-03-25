import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <div>
      <h2 style={{color: 'rgb(0, 153, 255)',marginTop:'20px'}}>Olá, React!</h2>
      <p>Estou alterando meu primeiro componente.</p>
      <div style={{padding: '20px'}}>
        <h1>Primeira aula de react</h1>
        <hr />

        <Perfil nome={'Otávio'} cargo={'Aprendiz'}/>
        <Saudacao />
        <Tchau />
        <Intervalo />
      </div>
    </div>
  );
}

function Saudacao(){
  return(
    <div style={{backgroundColor:'#f0f0f0', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h2 style={{color: 'black'}}>Olá</h2>
      <p>Oi</p>
    </div>
  );
}

function Tchau(){
  return(
    <div style={{backgroundColor:'#ff0000', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
    <h2>Tchau</h2>
    <p>Adeus</p>
  </div>
  )
}

function Intervalo(){
  return(
    <div style={{backgroundColor:'#d9ff00', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
    <h2 style={{color: 'black'}}>Hora do</h2>
    <p>Intervalo</p>
  </div>
  )
}

function Perfil({nome,cargo}){
  return(
    <div id="div-perfil">
      <h1>Olá {nome}</h1>
      <p>Cargo: {cargo}</p>
    </div>
  );
}

export default App;