import { useEffect, useState } from 'react';
import Style from './global.css'
function App() {

  const [ listatarefas, setListaTarefas] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "" } );

  function addTarefa()
  {
      if( tarefa.texto !== "" ){
        setListaTarefas([...listatarefas, tarefa ]);
      }
  }

    useEffect( () => {
        setTarefa( '' );
    }, [ listatarefas ])

  function excluirTarefa( id )
  {
    const novaLista = listatarefas.filter( tarefa => tarefa.id !== id ); 
    setListaTarefas( novaLista );
  }
  useEffect( () => {
    setTarefa( { id: "" , texto: "" } );
  }, [ listatarefas ] )
  return (
    <>
      <header>
        <h1>CHEKLIST</h1>
        <h4>Enter your task:</h4>
      </header>
      <div> 
          <input type="text" name="tarefa" placeholder='Enter your task:' value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value } ) }/>
          <button onClick={addTarefa}>Concluded</button>
      </div>
      <div>
        <ul>
            {listatarefas.map( (item, index) => (
                <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>Delet</button></li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
