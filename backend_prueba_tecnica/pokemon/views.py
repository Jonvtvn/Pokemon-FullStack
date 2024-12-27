from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Pokemon
from .serializers import PokemonSerializer




@api_view(['GET'])
def get_all_pokemons(request):
    if request.method == 'GET':
        try:
            # Obtener todos los Pokémon ordenados por id_pokemon de menor a mayor
            pokemons = Pokemon.objects.all().order_by('id_pokemon')
            pokemons_data_list = PokemonSerializer(pokemons, many=True).data
            
           
            
            # Devolver la lista de Pokémon
            return Response({'pokemons': pokemons_data_list}, status=status.HTTP_200_OK)

        except Exception as e:
            # Si hay algún error, devolver un error 500
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_pokemon(request, pk):
    if request.method == 'GET':
        try:
            # Obtener el Pokémon por su ID
            pokemon = Pokemon.objects.get(id=pk)

            # Serializar el Pokémon junto con sus habilidades y estadísticas
            pokemon_data = PokemonSerializer(pokemon).data

            # Devolver el Pokémon con sus datos
            return Response({'pokemon': pokemon_data}, status=status.HTTP_200_OK)

        except Pokemon.DoesNotExist:
            # Si no se encuentra el Pokémon
            return Response({'error': 'Pokemon not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            # Si ocurre algún otro error
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)