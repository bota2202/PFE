import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <div id="titulo">
      <h1>Aula de React</h1>
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
    </div>
  );
}

function Ex1() {
  return (
    <div id="Ex1">
      <h1 className="Ex1txt">Meu nome é Otávio</h1>
      <h2 className="Ex1txt">Estou aprendendo react</h2>
      <p className="Ex1txt">Hoje é dia 22/04/2026 e quero aprender React</p>
      <ol>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React</li>
      </ol>
    </div>
  );
}

function Ex2() {
  const [count, setCount] = useState(0);
  return (
    <div id="Ex2">
      <p>{count}</p>
      <div id="Ex2Row">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

function Ex3() {
  const [text, setText] = useState("");
  return (
    <div id="Ex3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo:"
      />
      <p>Texto digitado: {text}</p>
    </div>
  );
}

function Ex4() {
  const [tasks, setTasks] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div id="Ex4">
      <h1>Criar tarefa</h1>
      <input
        type="text"
        placeholder="Título da tarefa:"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa:"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <button
        onClick={() => {
          if (!text1.trim() || !text2.trim()) return;

          const newTask = {
            titulo: text1,
            descricao: text2,
          };

          setTasks([...tasks, newTask]);

          setText1("");
          setText2("");
        }}
      >
        Adicionar
      </button>
      <div>
        {tasks.map((task,index)=>(
          <div className="card" key={index}>
            <h2>{task.titulo}</h2>
            <h3>{task.descricao}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
