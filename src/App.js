import styled from 'styled-components'

const Header = styled.header`
    background-color: #a42237;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding: 15px;
`;

const SearchInput = styled.input`
    margin: 1rem;
    padding: 0.5rem;
    border: 2px solid gray;
    border-radius: 5px;
    width: 30%;
`;

function App() {
  return (
    <div className="App">
      <Header>
        Mi Pokedex en React
      </Header>
      <main>
        <SearchInput type="text" placeholder="Busca aquí un pokemon"/>
      </main>
    </div>
  );
}

export default App;
