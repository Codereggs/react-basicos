import React from "react";
import { useAxios } from "../hooks/useAxios";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemons/";
  url = "https://jsonplaceholder.typicode.com/users";
  //console.log(useFetch());
  let { data, isPending, error } = useAxios(url);
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{isPending}</h3>
      <h3>
        <mark>
          {console.log(error)}
          {error
            ? "Status: " +
              error.status +
              ", " +
              (error.statusText || "ocurrió un error.")
            : ""}
        </mark>
      </h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </>
  );
}
