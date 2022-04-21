import * as React from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";

export default function App() {
  // //get random number between 1-1125
  // const randomNum = Math.round(Math.random() * 1125 + 1);

  // Using a query hook automatically fetches data and returns pikquery values
  const { data, error, isLoading } = useGetPokemonByNameQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading....</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
