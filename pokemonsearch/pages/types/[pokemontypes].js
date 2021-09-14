import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import logo from '../images/pokemon_logo.png'


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
        <nav className='flex flex-wrap items-center p-3 bg-blue-600 '>
            <Link href='#'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <Image src={logo} alt="Logo" className="" width="190" height="70"/>
                </a>
            </Link>
            
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
        </nav>
    )
}

export default types

