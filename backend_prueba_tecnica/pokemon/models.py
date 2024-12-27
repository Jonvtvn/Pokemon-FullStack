from django.db import models
import time
import random

def generate_unique_id():
    # Combina la fecha actual (timestamp en segundos) con un número aleatorio
    return int(f"{int(time.time())}{random.randint(100, 999)}")  # Ejemplo: 1700000000123

class Pokemon(models.Model):
    id = models.BigAutoField(primary_key=True, default=generate_unique_id, unique=True)  # Generador personalizado
    name = models.CharField(max_length=100)
    url = models.URLField(unique=True)
    types = models.CharField(max_length=50, blank=True)
    height = models.IntegerField(null=True, blank=True)
    weight = models.IntegerField(null=True, blank=True)
    image = models.URLField(max_length=200)
    id_pokemon = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name

class Ability(models.Model):
    name = models.CharField(max_length=100)
    is_hidden = models.BooleanField(default=False)
    slot = models.IntegerField()
    id_pokemon = models.IntegerField(null=True, blank=True)
    pokemon = models.ForeignKey(
        'Pokemon', 
        on_delete=models.CASCADE, 
        related_name='abilities'
    )

    def __str__(self):
        return self.name


class Stat(models.Model):
    name = models.CharField(max_length=100)
    base_stat = models.IntegerField()
    effort = models.IntegerField()
    id_pokemon = models.IntegerField(null=True, blank=True)
    pokemon = models.ForeignKey(
        'Pokemon', 
        on_delete=models.CASCADE, 
        related_name='stats'
    )

    def __str__(self):
        return self.name