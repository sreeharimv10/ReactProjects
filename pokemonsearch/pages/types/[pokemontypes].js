/*import Link from 'next/link'
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

export default types*/
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }
  
  const Details = ({ ninja }) => {
    return (
      <div>
        <h1>{ ninja.name }</h1>
        <p>{ ninja.email }</p>
        <p>{ ninja.website }</p>
        <p>{ ninja.address.city }</p>
      </div>
    );
  }
  
  export default Details;
