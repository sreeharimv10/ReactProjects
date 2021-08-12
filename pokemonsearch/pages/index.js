import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'


export default function Home()
{
    const [pokemon,putPokemon] = useState([])
    const [query,setQuery]=useState('');

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
                <title>Search Pokemon js</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"/>
                </Head>
            <main>
                <div id="search-box" className="bg-primary w-100 p-2" style={{backgroundColor:"blue"}}>
			              <div className="row m-0">
				                <div className="col-sm-3 text-center p-3" style= {{background:'blue'}}>
                        </div>
                        <div className='col-md-9'>
					                  <form className="mb-0  d-flex justify-content-center align-items-center h-100 w-100"
                                      >
						                    <div>
							                      <input id="search_name"
                                                    type="text"
                                                    value={query}
                                                    onChange={(e)=>{setQuery(e.currentTarget.value);}}
                                                    placeholder="Enter Pokemon Name"/>

                                                    <input id="submit_button"
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
                                                        type="submit" value="Search"
                                                        className="btn btn-light p-2" />
						                    </div>
					                  </form>
				                </div>
			              </div>
                </div>
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
            </main>
        </div>
    )
}