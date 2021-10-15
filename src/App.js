import React from "react";
import "./styles.css";
import { mockPokemonData } from "./mock/pokeData";
import PokeCard from "./components/PokeCard";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your first mini challenge!</h1>
      <PokeCard
        name={mockPokemonData.name}
        front_default={mockPokemonData.sprites.front_default}
        front_shiny={mockPokemonData.sprites.front_shiny}
        video={mockPokemonData.video}
      />
    </div>
  );
}
