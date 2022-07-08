import React from 'react';

function Pokemon (props) {
    const {pokemon} = props
    const {name, types, stats, spriteUrl} = pokemon;

    if (name && types && stats && spriteUrl) {
        return (
            <div>
                <img src={spriteUrl} alt={`${name} sprite`}/>
                <h2>{name}</h2>
                <div>{types[0]}</div>
                <table>
                    <tr>
                        <td>HP: </td>
                        <td>{stats.hp}</td>
                    </tr>
                    <tr>
                        <td>Attack: </td>
                        <td>{stats.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense: </td>
                        <td>{stats.defense}</td>
                    </tr>
                    <tr>
                        <td>Special Attack: </td>
                        <td>{stats.sp_attack}</td>
                    </tr>
                    <tr>
                        <td>Special Defense: </td>
                        <td>{stats.sp_defense}</td>
                    </tr>
                    <tr>
                        <td>Speed: </td>
                        <td>{stats.speed}</td>
                    </tr>
                </table>

            </div>
        );
    } else {
        return (
            <div>Busca un pokemon para iniciar</div>
        );
    }



}
export default Pokemon;
