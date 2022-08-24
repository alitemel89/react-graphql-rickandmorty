import { gql, useQuery } from "@apollo/client";
import React from "react";
import Card from "./Card";
import Fuse from "fuse.js";
import Loading from "./Loading";

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

const Aliens = ({ query }) => {
  const { loading, error, data } = useQuery(GET_ALIENS);
  if (loading) return <Loading />;
  if (error) return <p>Error :/</p>;
  const {
    characters: { results: characters },
  } = data;

  const fuse = new Fuse(characters, {
    includeScore: true,
    keys: ["name", "status", "gender", "species"],
  });

  const results = fuse.search(query);
  console.log(results);
  const characterResults = results.map((result) => result.item);

  return (
    <div className="max-w-[1640px] p-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 bg-slate-800">
      {query === ""
        ? characters.map((character, index) => (
            <Card character={character} key={index} />
          ))
        : characterResults.map((character, index) => (
            <Card character={character} key={index} />
          ))}
    </div>
  );
};

export default Aliens;
