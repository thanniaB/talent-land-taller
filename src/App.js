import styled from 'styled-components'
import React, {useEffect, useState} from 'react';

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
    const [searchText, setSearchText] = useState();

    const handleSearchboxChange = (event) => {
        setTimeout(() => {
            setSearchText(event.target.value);
        }, 1000);
    }

    useEffect(() => {
        let isMounted = true;
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
                if (isMounted) {
                    const responseJson = await response.json();
                    console.log(responseJson);
                }
            } catch (error) {
                console.log(error);
            }
        }

        if(searchText) {
            fetchPokemon().then(r => r);
        }

        return () => {
            isMounted = false;
        };
    }, [searchText]);

  return (
    <div className="App">
      <Header>
        Mi Pokedex en React
      </Header>
      <main>
        <SearchInput type="text" placeholder="Busca aquí un pokemon" onChange={handleSearchboxChange}/>
          <div>{searchText}</div>
      </main>
    </div>
  );
}

export default App;
