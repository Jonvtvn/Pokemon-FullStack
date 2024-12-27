from django.urls import path
from pokemon import views as vs


urlpatterns = [
    ##########################################
    #GET
    ##########################################
    path('api/pokemon/', vs.get_all_pokemons, name='get_all_pokemons'),
    path('api/pokemon/<int:pk>/', vs.get_pokemon, name='get_pokemon')
]