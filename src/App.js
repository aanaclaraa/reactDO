import { useEffect, useState } from 'react';
import Style from './global.css'
function App() {

  const [ listatarefas, setListaTarefas] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "", status: ""} );

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
    setTarefa( { id: "" , texto: "" , status: ""} );
  }, [ listatarefas ] )

  function statusTarefa( id, status )
  {
    const index = listatarefas.findIndex( (tarefa) => tarefa.id === id );
    const novoStatus = status;
    listatarefas[index].status = !status;
    setListaTarefas( [...listatarefas] );
  }

  return (
    <>
      <header>
        <h1 className='titulo'>CHEKLIST</h1>
        <h4>Enter your task:</h4>
      </header>
      <div> 
          <input type="text" name="tarefa" placeholder='Enter your task:' value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false } ) }/>
          <button onClick={addTarefa}>Concluded</button>
      </div>
      <div>
        <ul>
            {listatarefas.map( (item, index) => (
                <li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluded' : 'Not Concluded'}</button> <button onClick={ () => excluirTarefa(item.id) }>Delet</button></li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
