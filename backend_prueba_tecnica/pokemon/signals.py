import requests
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import Pokemon, Ability, Stat

@receiver(post_migrate)
def cargar_pokemons(sender, **kwargs):
    url_base = "https://pokeapi.co/api/v2/pokemon/"
    limit = 50  # Limitar a 50 Pokémon

    # Evitar duplicados: verificar si ya hay Pokémon en la base de datos
    if Pokemon.objects.exists():
        print("Pokémon ya cargados previamente. No se realizarán cambios.")
        return

    url = f"{url_base}?limit={limit}"
    response = requests.get(url)
    
    if response.status_code != 200:
        print(f"Error al obtener los datos de Pokémon: {response.status_code}")
        return
    
    data = response.json()

    for pokemon_data in data['results']:
        # Obtener detalles del Pokémon
        url_detalle = pokemon_data['url']
        response_detalle = requests.get(url_detalle)

        if response_detalle.status_code != 200:
            print(f"Error al obtener detalles del Pokémon {pokemon_data['name']}: {response_detalle.status_code}")
            continue

        data_detalle = response_detalle.json()

        # Crear o verificar existencia del Pokémon
        pokemon, created = Pokemon.objects.get_or_create(
            id_pokemon=data_detalle['id'],
            defaults={
                'name': pokemon_data['name'],
                'url': pokemon_data['url'],
                'types': data_detalle['types'][0]['type']['name'],
                'height': data_detalle['height'],
                'weight': data_detalle['weight'],
                'image': f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{data_detalle['id']}.png"
            }
        )

        for ability_data in data_detalle['abilities']:
            ability, created = Ability.objects.get_or_create(
                pokemon=pokemon,
                id_pokemon=data_detalle['id'],
                name=ability_data['ability']['name'],
                is_hidden=ability_data['is_hidden'],
                slot=ability_data['slot']
            )
            if created:
                print(f"Ability {ability_data['ability']['name']} creada para Pokémon {pokemon.name}.")
            else:
                print(f"Ability {ability_data['ability']['name']} ya existe para Pokémon {pokemon.name}.")

        for stat_data in data_detalle['stats']:
            stat, created = Stat.objects.get_or_create(
                pokemon=pokemon,
                id_pokemon=data_detalle['id'],
                name=stat_data['stat']['name'],
                base_stat=stat_data['base_stat'],
                effort=stat_data['effort']
            )
            if created:
                print(f"Stat {stat_data['stat']['name']} creada para Pokémon {pokemon.name}.")
            else:
                print(f"Stat {stat_data['stat']['name']} ya existe para Pokémon {pokemon.name}.")




        if created:
            print(f"Pokémon {pokemon_data['name']} creado con éxito.")
        else:
            print(f"Pokémon {pokemon_data['name']} ya existe.")

    print("Datos de Pokémon cargados con éxito.")
