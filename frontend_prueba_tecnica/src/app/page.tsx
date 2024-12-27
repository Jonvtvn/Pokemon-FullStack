'use client'
import { getPokemonAll } from "@/services/getPokemonAll";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Para búsqueda
  const [selectedType, setSelectedType] = useState(""); // Para filtrar por tipo
  const [sortOption, setSortOption] = useState("name"); // Para ordenar
  const limit = 10;

  useEffect(() => {
    getPokemonAll()
      .then((response) => {
        const pokemonArray = Array.isArray(response) ? response : response.pokemons; // Manejar ambos casos
        if (pokemonArray && Array.isArray(pokemonArray)) {
          setPokemons(pokemonArray);
          setDisplayedPokemons(pokemonArray.slice(0, limit));
        } else {
          console.error("El formato de datos recibido no es un arreglo:", response);
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos de los Pokémon:", error);
      });
  }, []);

  useEffect(() => {
    // Filtrar, buscar y ordenar los Pokémon
    let filteredPokemons = pokemons;

    // Filtro por nombre (búsqueda)
    if (searchQuery) {
      filteredPokemons = filteredPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtro por tipo
    if (selectedType) {
      filteredPokemons = filteredPokemons.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }

    // Ordenar por la opción seleccionada
    if (sortOption === "name") {
      filteredPokemons = filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "hp") {
      filteredPokemons = filteredPokemons.sort(
        (a, b) => b.stats[0].base_stat - a.stats[0].base_stat
      );
    }

    setDisplayedPokemons(filteredPokemons.slice(0, limit));
  }, [searchQuery, selectedType, sortOption, pokemons]);

  const loadMore = () => {
    const newOffset = offset + limit;
    setDisplayedPokemons((prev) => [
      ...prev,
      ...pokemons.slice(newOffset, newOffset + limit),
    ]);
    setOffset(newOffset);
  };

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="min-h-screen">

      {/* Sección de Filtro, Búsqueda y Ordenación */}


      <h1 className="text-center text-6xl font-bold mb-40 text-red-300 mt-32">Pokémon Cards</h1>


      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto mx-7 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Búsqueda */}
            <input
              type="text"
              placeholder="Search Pokémon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border rounded-full w-full md:w-3/5"
            />

            {/* Filtro por Tipo */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="p-2 border rounded-full w-full md:w-1/5"
            >
              <option value="">Filter by Type</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Plant</option>
              <option value="electric">Electric</option>
              {/* Agregar más tipos según sea necesario */}
            </select>

            {/* Ordenar por */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border rounded-full w-full md:w-1/5"
            >
              <option value="name">Order by Name</option>
              <option value="hp">Order by Hp</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mb-10">
          {displayedPokemons.map((pokemon) => (
            <Link
              href={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className="w-10/12 border-[20px] border-amber-300 bg-neutral-950 rounded-xl text-white shadow-lg p-4 bg-gradient-to-b relative hover:scale-105 transition-transform duration-300 mx-auto"
            >
              {/* Top Border with Name */}
              <div className="flex justify-between rounded-t-xl font-bold text-lg items-center z-0">
                <div className="flex flex-col">
                  <span className="text-xl">{capitalizeFirstLetter(pokemon.name)}</span>
                  <p className="z-0 text-lg font-semibold text-yellow-500 capitalize -mt-2">
                    {pokemon.types}
                  </p>
                </div>
                <span className="text-red-600 z-0"> {pokemon.stats[0].base_stat} HP</span>
              </div>

              {/* Image */}
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-96 h-auto mx-auto object-cover -mt-10 z-10"
              />

              {/* Stats */}
              <div className="-mt-14 mb-2">
                <h3 className="font-bold">Stats</h3>
                <ul className="text-sm text-gray-100">
                  {pokemon.stats.slice(1).map((stat) => (
                    <li key={stat.id} className="flex justify-between">
                      <span>{stat.name.toUpperCase()}</span>
                      <span>{stat.base_stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              {/* Abilities */}
              <div className="mt-4">
                <h3 className="font-bold">Abilities and others</h3>
                <div className="flex justify-between">
                  <ul className="text-sm text-gray-200">
                    {pokemon.abilities.map((ability) => (
                      <li key={ability.id}>{ability.name}</li>
                    ))}
                  </ul>
                  <ul className="text-sm text-gray-200">
                    <li>Height: {pokemon.height} </li>
                    <li>Weight: {pokemon.weight}</li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {offset + limit < pokemons.length && (
          <div className="text-center my-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-500 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
