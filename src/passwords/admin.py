from django.contrib import admin
from .models import PublicPassword

class PublicPasswordAdmin(admin.ModelAdmin):
    class Meta():
        model = PublicPassword
        
admin.site.register(PublicPassword, PublicPasswordAdmin)
