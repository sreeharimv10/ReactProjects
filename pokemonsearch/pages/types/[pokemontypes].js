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
        <div>
        
        {
            pokemons.results.map((pokemon)=>{
                return (
                // eslint-disable-next-line react/jsx-key
                <div>
                    <Link href = {"/types/"+pokemon.name}  key={pokemon.name}>
                        <a>
                            <h3 style={{fontSize: 24,
                                        color: "orange",
                                        marginLeft: 32,
                                        fontWeight: "bold"}}>{pokemon.name}</h3>
                        </a>
                    </Link>
                </div>
            )})
        }
        </div>
    )
}

export default types

