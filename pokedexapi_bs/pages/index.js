import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../pages/images/pokemon_logo.png'

export default function Home() 
{
  const [pokemon,putPokemon] = useState([])
  const [query,setQuery]=useState('');

  const CharTab = styled.section`
    visibility: hidden;
  `
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Pokedex API</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="style/sheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <main>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <Link href="#">
            <a className="navbar-brand">
              <Image className="" src={logo} alt="logo" width="190" height="70"/>
            </a>
          </Link>
          <form className="form-inline">
            {/*<div className=" form-control mr-sm-2 container" style={{}}>*/}
              <input className="form-control container my-2 my-sm-0" style={{borderTopLeftRadius: 30,
                                    borderBottomLeftRadius: 30}}
                    type="text"
                    value={query}
                    onChange={(e)=>{setQuery(e.currentTarget.value);}}
                    placeholder="Enter Pokemon Name"
                    aria-label="Search"/>

              <button className="btn btn-light  my-2 my-sm-0"
                    style={{borderTopRightRadius: 30, borderBottomRightRadius: 30}}
                    onClick={(e)=>
                    {
                      e.preventDefault();
                      console.log("searched for "+query)
                      fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
                      .then((resp)=>resp.json())
                      .then(data=>
                      {
                          putPokemon(data);
                          console.log(data);
                      });
                    }}
                    
                    type="submit" value="Search">Search</button>
                    
          </form>
        </nav>
        
        {pokemon?.name &&
        <CharTab className="card bg-blue" style={{visibility:"visible", marginLeft: 30,
          marginTop:12, backgroundColor: "pink",width: 300}}>
            <div className=" bg-danger  pb-1.5 h-auto w-60 ml-8 mt-2" >
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
                    </ul>)}

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
                      </ul>  )}
            </div>
            </CharTab>
        }
        
      </div>
      </main>
      </div>
  )
}

