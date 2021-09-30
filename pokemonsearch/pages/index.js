import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../images/pokemon_logo.png'
import Link from 'next/link'

export const getServerSideProps =async ()=>
{

    const res = await fetch(`https://pokeapi.co/api/v2/type/electric`)
    const etype = await res.json()
    return{
        props :{electric : etype}
    }
}


export default function HeaderSec({electric})
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
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
            </Head>

            <main>
                <nav className='flex flex-wrap items-center p-3 bg-blue-600'>

                    <Link href='/'>
                        <a className='inline-flex items-center p-2 mr-4 '>
                            <Image src={logo} alt="Logo" className="" width="190" height="70"/>
                        </a>
                    </Link>

                    <button className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-blue-700 lg:hidden hover:text-white' onClick={handleClick}>
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
                <div className="items-center max-w-xs pt-6 mt-3 mb-4 ml-auto mr-auto overflow-hidden bg-gray-300 border-4 border-blue-600 rounded shadow-lg">
                        {pokemon?.sprites && (

                            // eslint-disable-next-line @next/next/no-img-element
                            <img className="ml-auto mr-auto animate-bounce " alt="image" src={pokemon.sprites.front_default}height="100" width="110"/>
                        )}

                        <div className="px-6 py-2 ">

                            <div className="mb-2 text-xl font-bold ">{pokemon?.name.toUpperCase()}</div>

                            {pokemon?.types?.length > 0 && (
                                <p className="text-base ">
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
                                </p>
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
                    </div>
                }

                <h1 className="sm:text-xl" style={{textAlign:"center"}} >
                    <b>ELECTRIC POKEMONS</b>
                </h1>
                <div className="flex space-x-10 sm:w-100% sm:space-x-20 scrollbar-hide max-w-full overflow-y-auto  mt-4 mr-8 space-x-10 text-2xl sm:px-20 whitespace-nowrap">
                {
                    electric.pokemon.map((name) =>
                    {
                        return (
                        
                            
                                    <div key={name}>
                                    <Link href={`/pokemon/${name.pokemon.name}`}>
                                <a>
                                        <div className="rounded-lg cardz">
                                            <img className="ml-auto mr-auto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />
                                            <div className="mb-2 text-xl font-bold" style={{textAlign:"center"}}>
                                            {
                                                name.pokemon.name.toUpperCase()
                                            }
                                            </div>
                                        </div>
                                    
                                </a>
                                </Link>
                            </div>)
                        })
                }
                </div>
            </main>
        </div>
    )
}