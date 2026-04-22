import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div id='titulo'>
      <h1>Atividade de revisão React</h1>
      <Abaixo />
    </div>
  );
}

function Abaixo() {
  const [visivel, setVisivel] = useState(false);

  function alterarState() {
    setVisivel(!visivel);
  }

  return (
    <div id="abaixo">
      <button onClick={alterarState}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>

      {visivel && (
        <p>Essa é a resposta!</p>
      )}
    </div>
  );
}

export default App;