import { Topo, Texto, Tipo1, Tipo2, Container } from './AppStyled'


function App() {
  return (
    <>
      <Topo>
        <h1>Sorteio</h1>
      </Topo>
      
      <Texto>Selecione o tipo do Sorteio!</Texto>

      <Container>
        <Tipo1></Tipo1>
        <Tipo2></Tipo2>
      </Container>
    </>
  );
}

export default App;
