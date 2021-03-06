import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [pokemons ,setPokemons] = useState<any[]>([])
  const [selectedPokemon,setPokemon] = useState<any[]>([])
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Selected Pokemon: {selectedPokemon}</h1>
        {pokemons?.map((p) =>
          // eslint-disable-next-line react/jsx-key
          <div>
            <button onClick ={()=>setPokemon(p.name)}> {p.name} </button>
          </div>
        )}
      </main>
    </div>
    )
}
