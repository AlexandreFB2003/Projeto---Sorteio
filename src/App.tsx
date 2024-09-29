import { Topo, Texto, Tipo1, Tipo2, Container, Result, Parametros } from './AppStyled'


function App() {
  return (
    <>
      <Topo>
        <h1>Sorteio</h1>
      </Topo>
      
      <Texto>Selecione o tipo do Sorteio!</Texto>

      <Container>
        <Tipo1>
          <Parametros>
            <p>Sortear</p>
            <input></input>
            <p>Entre</p>
            <input></input>
            <p>e</p>
            <input></input>
          </Parametros>
          <Result>
            <button>Sortear!</button>
            <p>Resultados:</p>
            <p className='resultado'></p>
          </Result>
        </Tipo1>
        <Tipo2></Tipo2>
      </Container>
    </>
  );
}

export default App;
