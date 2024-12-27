"use client";
import { getPokemonId } from "@/services/getPokemonId";
import { useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import Link from "next/link";

export default function PokemonDetail() {
    const [pokemon, setPokemon] = useState<PokemonForId>(); // Inicializamos con null
    const params = useParams(); // Usamos el hook para acceder a los parámetros de la URL
    const router = useRouter(); // Hook para redirigir al historial anterior
    const id = params.id;
    const numericId = typeof id === 'string' ? Number(id) : undefined;

    function capitalizeFirstLetter(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        if (numericId) {
            getPokemonId(numericId)
                .then((response) => {
                    console.log("Respuesta de la API:", response); // Verifica si los datos están correctos
                    setPokemon(response); // Actualizamos el estado con la respuesta
                })
                .catch((error) => {
                    console.error("Error al obtener datos de los Pokémon:", error);
                });
        }
    }, [numericId]); // Dependencia de numericId

    if (!pokemon) {
        return (
            <div className="min-h-screen">
                <h1 className="text-center text-6xl font-bold mb-40 text-red-300 mt-32">Cargando...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="fixed top-10 left-10 z-50">
                <Link
                    href="/" // Redirige a la página anterior
                    className="text-black"
                >
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
                    </svg>
                </Link>
            </div>

            <h1 className="text-center text-6xl font-bold mb-20 text-red-300 mt-14">
                Pokémon {capitalizeFirstLetter(pokemon.pokemon.name)} {/* Aquí debería imprimirse el nombre */}
            </h1>
            <div
                key={pokemon.pokemon.id}
                className="w-80 border-[20px] border-amber-300 bg-neutral-950 rounded-xl text-white shadow-lg p-4 bg-gradient-to-b relative hover:scale-105 transition-transform duration-300 mx-auto"
            >
                {/* Top Border with Name */}
                <div className="flex justify-between rounded-t-xl font-bold text-lg items-center z-0">
                    <div className="flex flex-col">
                        <span className="text-xl">{capitalizeFirstLetter(pokemon.pokemon.name)}</span>
                        <p className="z-0 text-lg font-semibold text-yellow-500 capitalize -mt-2">
                            {pokemon.pokemon.types}
                        </p>
                    </div>
                    <span className="text-red-600 z-0"> {pokemon.pokemon.stats[0].base_stat} HP</span>
                </div>

                {/* Image */}
                <img
                    src={pokemon.pokemon.image}
                    alt={pokemon.pokemon.name}
                    className="w-[400px] h-auto mx-auto object-cover z-10 mb-20"
                />
            </div>
            {/* Stats */}
            <div className="max-w-2xl mx-auto pb-40">
                <div className="mt-14 mb-2 text-5xl">
                    <h3 className="font-bold mb-2">Stats</h3>
                    <ul className="text-xl text-gray-600">
                        {pokemon.pokemon.stats.slice(1).map((stat) => (
                            <li key={stat.id} className="flex justify-between">
                                <span>{stat.name}</span>
                                <span>{stat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Abilities */}
                <div className="mt-4 text-5xl">
                    <h3 className="font-bold mb-2">Abilities and others</h3>
                    <div className="flex justify-between">
                        <ul className="text-xl text-gray-600">
                            {pokemon.pokemon.abilities.map((ability) => (
                                <li key={ability.id}>{ability.name}</li>
                            ))}
                        </ul>
                        <ul className="text-xl text-gray-600">
                            <li>Height: {pokemon.pokemon.height} </li>
                            <li>Weight: {pokemon.pokemon.weight}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Botón para volver atrás */}

        </div>
    );
}
