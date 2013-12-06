from django.contrib import admin
from .models import Company, Customer, Notes

class CustomerAdmin(admin.ModelAdmin):
    #prepopulated_fields = {'slug': ['first_name'] + ['last_name']}
    class Meta():
        model = Customer
        
admin.site.register(Customer, CustomerAdmin)
    
    
class CompanyAdmin(admin.ModelAdmin):
    #prepopulated_fields = {'slug': ['name'] + ['city']}
    class Meta():
        model = Company
        

admin.site.register(Company, CompanyAdmin)
    

class NotesAdmin(admin.ModelAdmin):
    class Meta():
        model = Notes

admin.site.register(Notes, NotesAdmin)