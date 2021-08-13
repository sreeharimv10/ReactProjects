import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image';
{/*@ts-ignore*/}
const PokemonPage = ({name, pokemon, error}) =>
{
    // Client Side Rendering
    /*const [pokemon,setPokemon] = useState<any[]>([])


    const searchPokemon = () =>
    {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>resp.json()).then(data=>{
            setPokemon(data);
        }).catch((err) =>
        {
            alert('ErroR')
        })
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(searchPokemon, []);*/

    return error ?
        <div>
            <h1>Pokemon not found</h1>
        </div>:


        <div>
                {/*@ts-ignore*/}
                <h1>{pokemon?.name}</h1>
                {/*@ts-ignore*/}
                {pokemon?.types?.length > 0 && (
                    <ul>
                        {/*@ts-ignore*/}
                        {pokemon.types.map((t) =>
                        {
                            {/*@ts-ignore*/}
                            // eslint-disable-next-line react/jsx-key
                            return <li>{t.type.name}</li>
                        })}
                    </ul>
                )}
                {/*@ts-ignore*/}
                {pokemon?.sprites &&(
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={/*@ts-ignore*/pokemon.sprites.front_default}/>
                    )}
        </div>
}
// Server Side Rendering
{/*@ts-ignore*/}
PokemonPage.getInitialProps = ({query}) =>
{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${query?.pokemon}`).then((resp)=>resp.json()).then(data=>{
        return {name: query.pokemon, pokemon: data};
    }).catch((err) =>
    {
        return {error: err}
    })
};

export default PokemonPage;