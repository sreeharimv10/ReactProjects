import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'
import logo from '../images/pokemon_logo.png'
import Link from 'next/link'




export default function Home(props)
{
    const [pokemon,putPokemon] = useState([])
    const [query,setQuery]=useState('');
    const [active, setActive] = useState(false);

    const handleClick = () =>
    {
        setActive(!active);
    };

    /*const searchPokemon = (e) =>{
        e.preventDefault();
        console.log('Searched for', query);
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then((resp)=>resp.json()).then(data=>{
            putPokemon(data);
            console.log(data);
        });
    };*/

    return (
        <div>

            <Head>
                <title>Pokedex API</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"/>
            </Head>

            <main>
                <nav className='flex flex-wrap items-center p-3 bg-blue-600 '>

                    <Link href='#'>
                        <a className='inline-flex items-center p-2 mr-4 '>
                            <Image src={logo} alt="Logo" className="" width="190" height="70"/>
                        </a>
                    </Link>

                    <button className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white' onClick={handleClick}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'/>
                        </svg>
                    </button>

                    {/*Note that in this div we will use a ternary operator to decide whether or not to display the
                    content of the div  */}

                    <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                        <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>

                            <div className="items-center md:flex 'items-center justify-center w-full
                            px-3 py-2 font-bold  rounded lg:inline-flex lg:w-auto hover:bg-blue-700 '">

                                <input id="search_name" className="p-2 " style={{borderTopLeftRadius: 30,
                                    borderBottomLeftRadius: 30}}
                                    type="text"
                                    value={query}
                                    onChange={(e)=>{setQuery(e.currentTarget.value);}}
                                    placeholder="Enter Pokemon Name"/>

                                <input id="submit_button" style={{borderTopRightRadius: 30,
                                    borderBottomRightRadius: 30}}
                                    onClick={(e)=>{
                                    e.preventDefault();
                                    console.log("searched for "+query)
                                    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                                    .then((resp)=>resp.json())
                                    .then(data=>
                                    {
                                        putPokemon(data);
                                        console.log(data);
                                    });}}
                                    type="submit" value="Search" className="p-2 btn btn-light"/>
                            </div>

                            <div className="items-center md:flex 'items-center justify-center w-full
                            px-3 py-2 font-bold  rounded lg:inline-flex lg:w-auto hover:bg-blue-700 '">
                                <Link href='/pokemonnames'>
                                    <a className="p-1 bg-white rounded-full">Names</a>
                                </Link>
                            </div>

                            <div className="items-center md:flex 'items-center justify-center w-full
                            px-3 py-2 font-bold  rounded lg:inline-flex lg:w-auto hover:bg-blue-700 '">
                                <Link href='/types/pokemontypes'>
                                    <a className="p-1 bg-white rounded-full">Types</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>

        {pokemon?.name &&
            <div className="bg-white pb-1.5 h-auto w-60 ml-8 mt-2" >
                {pokemon?.sprites && (
                    <img src={pokemon.sprites.front_default} align="left" height="100" width="110"/>)}
                        <br/>
                        <h1>{pokemon?.name.toUpperCase()}</h1>
                        <br/>

                        {pokemon?.types?.length > 0 && (
                        <ul>
                            <b>Type:</b>
                            {
                                pokemon.types.map((t) =>
                                {
                                    // eslint-disable-next-line react/jsx-key
                                    return <b> {t.type.name.toUpperCase()}</b>
                                })
                            }
                        </ul>
                        )}

                        
                        {pokemon?.types?.length > 0 && (
                        <ul>
                            <b>Abilities: </b>
                            {

                                pokemon.abilities.map((t) =>
                                {
                                    // eslint-disable-next-line react/jsx-key
                                    return <b>{t.ability.name.toUpperCase()}, </b>
                                })
                            }
                        </ul>
                        )}
                    </div>
                }
                </main>
                </div>
    )
}