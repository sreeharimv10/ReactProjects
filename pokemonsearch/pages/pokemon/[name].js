import React, { useEffect, useState } from 'react'

const PokemonPage = ({name}) =>
{
    const [pokemon,setPokemon] = useState([])


    const searchPokemon = () =>
    {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>resp.json()).then(data=>{
            setPokemon(data);
        }).catch((err) =>
        {
            alert('ErroR');
        })
    };

    useEffect(searchPokemon, []);


    return <div>
                <h1>{pokemon?.name}</h1>
                {pokemon?.types?.length > 0 && (
                    <ul>
                        {pokemon.types.map((t) =>
                        {
                            // eslint-disable-next-line react/jsx-key
                            return <li>{t.type.name}</li>
                        })}
                    </ul>
                )}

                {pokemon?.sprites && (
                    <img src={pokemon.sprites.front_default}/>
                )}
        </div>
}


PokemonPage.getInitialProps = ({query}) =>
{
    return {name: query.name};
};

export default PokemonPage;