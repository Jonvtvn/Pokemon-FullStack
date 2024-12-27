from rest_framework import serializers
from .models import Pokemon, Ability, Stat

class AbilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ability
        fields = "__all__"

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = "__all__"

class PokemonSerializer(serializers.ModelSerializer):
    abilities = AbilitySerializer(many=True, read_only=True)
    stats = StatSerializer(many=True, read_only=True)

    class Meta:
        model = Pokemon
        fields = "__all__"