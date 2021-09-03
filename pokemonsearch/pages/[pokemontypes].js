import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
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
        <div id="search-box" className="bg-primary w-100 p-2" style={{backgroundColor:"blue", padding:15,
                                                display: "flex"}}>
			    <div className="row m-0" style={{justifyContent:"initial", paddingInlineStart:100}}>
            <Image src={logo} alt="Pokemon" height="60" width="160" />
          </div>
        </div>
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
