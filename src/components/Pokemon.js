import React from 'react';
import styled from 'styled-components'

const PokeDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 8px;
    }
    .types {
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
    tr td:first-child {
        text-decoration: underline;
    }
    img {
        width: 96px;
        height: 96px;
    }
`;

function Pokemon(props) {
    const {pokemon} = props
    const {name, types, stats, spriteUrl} = pokemon;

    if (name && types && stats && spriteUrl) {
        return (
            <PokeDisplay>
                <img src={spriteUrl} alt={`${name} sprite`}/>
                <div>
                    <h2>{name}</h2>
                    <div className="types">{types.join(', ')}</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>HP:</td>
                            <td>{stats.hp}</td>
                        </tr>
                        <tr>
                            <td>Attack:</td>
                            <td>{stats.attack}</td>
                        </tr>
                        <tr>
                            <td>Defense:</td>
                            <td>{stats.defense}</td>
                        </tr>
                        <tr>
                            <td>Special Attack:</td>
                            <td>{stats.sp_attack}</td>
                        </tr>
                        <tr>
                            <td>Special Defense:</td>
                            <td>{stats.sp_defense}</td>
                        </tr>
                        <tr>
                            <td>Speed:</td>
                            <td>{stats.speed}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </PokeDisplay>
        );
    } else {
        return (
            <PokeDisplay>
                <div>Busca un pokemon para iniciar</div>
            </PokeDisplay>
        );
    }


}

export default Pokemon;
