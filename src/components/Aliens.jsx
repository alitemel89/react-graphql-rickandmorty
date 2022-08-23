import { gql, useQuery } from '@apollo/client';
import React from 'react'
import Card from './Card';

const GET_ALIENS = gql`
  query GetAliens {
    characters(filter: { species: "Alien" }) {
      results {
        id
        name
        image
        species
        status
        gender
        location {
          name
        }
      }
    }
  }
`;

const Aliens = () => {
  const { loading, error, data } = useQuery(GET_ALIENS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;
  const {
    characters: { results: characters },
  } = data;

  console.log(characters);
  return (
    <div className='max-w-[1640px] p-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 bg-slate-800'>  
      {characters.map((character, index) => (
        <Card character={character} key={index} />
      ))}
    </div>
  )
}

export default Aliens