import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'

export const getServerSideProps =async ()=>
{

    const res = await fetch(`https://pokeapi.co/api/v2/type/electric`)
    const etype = await res.json()
    return{
        props :{electric : etype}
    }
}
const ContentSec=({electric})=>
{
    return(
        <div className="flex px-10 mt-4 mr-8 space-x-10 text-2xl sm:px-20 whitespace-nowrap sm:w-100% sm:space-x-20 scrollbar-hide">
                {
                    electric.pokemon.map((name, index) =>
                    {
                        return (
                            <div key={name}>
                                <div className="items-center max-w-5xl pt-6 mt-3 ml-auto mr-auto overflow-hidden bg-gray-300 border-4 border-blue-600 rounded shadow-lg">
                                    <div className="mb-2 text-xl font-bold ">
                            {
                                name.pokemon.name
                            }
                                    </div>
                            <img className="ml-auto mr-auto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.pokemon.url.slice(34,-1)}.png`} />
                            </div>
                            </div>)
                    })
                }
                </div>
    )
}

export default ContentSec
