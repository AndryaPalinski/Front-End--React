import { useState } from 'react'
import axios from "axios";
import './App.css';
import MaterialCard from './components/card';


const App = () => {

  const [userName, setUserName] = useState("");
  const [repositorios, setRepositorios] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
      setRepositorios(response.data);
      setUserName("");
    }

    catch (erro) {
      console.log(erro);
    }};

const handleChange = (event) => {
  const inputValue = event.target.value;
  if (inputValue !== " " ) {
    setUserName(inputValue)
  } 
}


    return (

      <div className="inicial">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            type="text"
            value={userName}
            placeholder="Digite o user name..."
          />
          <button className="button" type="submit">Buscar(￣︶￣)↗</button>
        </form>

{ repositorios.map((repositorio, index) => {
 return (
  <MaterialCard key={index} repositorio={repositorio} />
 )
})}

      </div>
    )
}

export default App;
