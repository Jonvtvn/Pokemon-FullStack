interface Ability {
    id: number;
    name: string;
    is_hidden: boolean;
    slot: number;
    id_pokemon: number;
    pokemon: number;
}

interface Stat {
    id: number;
    name: string;
    base_stat: number;
    effort: number;
    id_pokemon: number;
    pokemon: number;
}

interface Pokemon {
    id: number;
    abilities: Ability[];
    stats: Stat[];
    name: string;
    url: string;
    types: string;
    height: number;
    weight: number;
    image: string;
    id_pokemon: number;
}

interface PokemonResponse {
    pokemons: Pokemon[];
}


interface PokemonForId {
    pokemon: Pokemon;
}