/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '../../images/pokemon_logo.png'
import Link from 'next/link';

{/*@ts-ignore*/}

const PokemonPage = ({name, pokemon, error}) =>
{
    // Client Side Rendering________________________________________________________________________________
    /*const [pokemon,setPokemon] = useState<any[]>([])                                                    //
    const searchPokemon = () =>                                                                          //
    {                                                                                                   //
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>resp.json()).then(data=>{      //
            setPokemon(data);                                                                         //
        }).catch((err) =>                                                                            //
        {                                                                                           //
            alert('ErroR')                                                                         //
        })                                                                                        //
    };                                                                                           //
    // eslint-disable-next-line react-hooks/exhaustive-deps                                     //
    useEffect(searchPokemon, []);    ________________________________________________________*/

    return error ?
        <div>
            <h1>Pokemon not found</h1>
        </div>:

    <div>
        <nav className='flex flex-wrap items-center p-3 bg-blue-600'>
            <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <Image src={logo} alt="Logo" className="" width="190" height="70"/>
                </a>
            </Link>
        </nav>

        <div className="flex flex-col items-center justify-center max-w-sm m-auto mt-5 bg-pink-400 rounded-3xl">
            <div className="pt-6 m-auto mt-3 mb-4 overflow-hidden bg-gray-300 border-4 border-blue-600 rounded shadow-lg w-36 ">
                {/*@ts-ignore*/}
                {pokemon?.sprites &&(
                // eslint-disable-next-line @next/next/no-img-element
                <img className="m-auto animate-bounce" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                )}
            </div>

            {/*@ts-ignore*/}
            <b className="m-auto text-2xl">{pokemon?.name.toUpperCase()}</b>

            {/*@ts-ignore*/}
            {pokemon?.types?.length > 0 && (
            <ul >
                {/*@ts-ignore*/}
                {pokemon.types.map((t) =>
                {
                    {/*@ts-ignore*/}
                    // eslint-disable-next-line react/jsx-key
                    return <li className="flex-auto w-auto m-auto">{t.type.name}</li>
                })}
            </ul>
            )}
        </div>
    </div>
}

// Server Side Rendering
{/*@ts-ignore*/}
PokemonPage.getInitialProps = ({query}) =>
{
    return fetch(`https://pokeapi.co/api/v2/pokemon/${query?.pokemon}`).then((resp)=>resp.json()).then(data=>
    {
        return {name: query.pokemon, pokemon: data};
    }).catch((err) =>
    {
        return {error: err}
    })
};

export default PokemonPage;