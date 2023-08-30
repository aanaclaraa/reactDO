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
      <header className='fada'>
        <h1 className='titulo'>CHEKLIST</h1>
        <h3>DIGITE SUA TAREFA:</h3>
      <div> 
          <input className="margin" type="text" name="tarefa" placeholder='Digite sua Tarefa:' value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false } ) }/>
        <div className="meme">
          <button className="tiktok" onClick={addTarefa}>Concluído</button>
        </div>        
          <ul>
            {listatarefas.map( (item, index) => (
                <li className="item" key={index}>
                  <button  className="zero" onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluído' : 'Não Concluído'}</button> 
                  <div className='textoTarefa'>{item.texto} </div>
                  <button className="botao" onClick={ () => excluirTarefa(item.id) }>Excluir</button>
                </li>
            ))}
        </ul>
      </div>
      </header>
    </>
  );
}

export default App;