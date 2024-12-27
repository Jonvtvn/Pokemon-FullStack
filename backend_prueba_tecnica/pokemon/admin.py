from django.contrib import admin
from .models import Pokemon, Ability, Stat
# Register your models here.
admin.site.register(Pokemon)
admin.site.register(Ability)
admin.site.register(Stat)