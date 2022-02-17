// import logo from './logo.svg';
import './App.css';

// exercicio 2 

const array = ['Não Procrastinar', 'Resolver os Projetos no dia', 'Realizar exercicios no dia', 'Ajudar outras pessoas']

const Task = () => {
  return (
   <ol>{array.map((item) => <li>{item}</li>)}</ol> 
  );
}

function App() {
  return (
    <Task />
  );
}

export default App;
