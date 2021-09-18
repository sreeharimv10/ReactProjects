import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/pokemon_logo.png'



export default function Home() {
  const [pokemons ,setPokemons] = useState([])
  const [selectedPokemon,setPokemon] = useState([])
  const fetchPokemons = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/').then((resp) => resp.json()).then(data => {
      setPokemons(data.results);
      console.log(data.results);
    });
  }

  useEffect( () => {
    fetchPokemons();

  });

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
        </nav>
          <h1 style={{marginLeft: 32}}>Selected Pokemon: {selectedPokemon}</h1>
          <div>
          {pokemons?.map((p) =>
            // eslint-disable-next-line react/jsx-key
            <div>
              <button style={{
                      padding: 5,
                      backgroundColor: "hotpink",
                      fontSize: 15,
                      borderRadius: 10,
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: 32,
                      marginTop: 16,
                      marginBottom: 8
              }}
              onClick ={()=>setPokemon(p.name.toUpperCase())}> {p.name} </button>
            </div>
          )}
          </div>
      </main>
    </div>
    )
}
