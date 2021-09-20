/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import styled from '@emotion/styled'


export const getServerSideProps =async ()=>
{
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const data = await res.json()
    return{
        props :{pokemons : data}
    }
}
const types=({pokemons})=>
{
    return(
        <div className="flex px-10 mt-4 mr-8 space-x-10 text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {
            pokemons.results.map((pokemon)=>
            {
                return (
                // eslint-disable-next-line react/jsx-key
                <div className="transition transform">
                    <div key={pokemon.name}>
                        <h3 className="font-sans text-2xl font-bold text-red-500 last:pr-24 md:font-serif">
                            {pokemon.name}
                        </h3>
                    </div>
                </div>
            )})
        }
        </div>
    )
}

export default types

