import React, { useEffect, useState } from 'react'
import Image from 'next/image'
{/*@ts-ignore*/}
const PokemonPage = ({name}) =>
{
    const [pokemon,setPokemon] = useState<any[]>([])


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
    useEffect(searchPokemon, []);


    return <div>
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
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image src={/*@ts-ignore*/
                    pokemon.sprites.front_default}/>
                    )}
        </div>
}

{/*@ts-ignore*/}
PokemonPage.getInitialProps = ({query}) =>
{
    return {name: query.name};
};

export default PokemonPage;