from django import forms
from .models import Notes, Company

class NotesForm(forms.ModelForm):
    class Meta():
        model = Notes
        fields = ['text']

class CompanyAddForm(forms.ModelForm):
    class Meta():
        model = Company