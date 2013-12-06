from django.db import models
from django_autoslug.fields import AutoSlugField

import time


class Company(models.Model):
    name = models.CharField(max_length=120)
    slug = AutoSlugField(populate_from=('name','city'), unique=True, max_length=255, overwrite=True)
    address1 = models.CharField(max_length=120, null=True, blank=True)
    address2 = models.CharField(max_length=120, null=True, blank=True)
    city = models.CharField(max_length=120, null=True, blank=True)
    state = models.CharField(max_length=120, null=True, blank=True)
    zipcode = models.CharField(max_length=120, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __unicode__(self, ):
        return str(self.name + ' ' + self.city)
    
    class Meta:
        ordering = ['name']
        verbose_name = ('Company')
        verbose_name_plural = ('Companies')
    

class Customer(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120, null=True, blank=True)
    slug = AutoSlugField(populate_from=('first_name','last_name'), unique=True, max_length=255, overwrite=True)
    company = models.ManyToManyField(Company, blank=True)
    title = models.CharField(max_length=120, null=True, blank=True)
    office_phone = models.CharField(max_length=120, null=True, blank=True)
    office_ext = models.IntegerField(max_length=10, null=True, blank=True)
    cell_phone = models.CharField(max_length=120, null=True, blank=True)
    home_phone = models.CharField(max_length=120, null=True, blank=True)
    email = models.EmailField(max_length=120, null=True, blank=True)
    main_contact = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    
    def __unicode__(self, ):
        return str(self.first_name + ' ' + self.last_name)
    
    class Meta:
        ordering = ['first_name']
        verbose_name = ('Customer')
        verbose_name_plural = ('Customers')
    
    
class Notes(models.Model):
    text = models.TextField(max_length=300)
    company = models.ForeignKey(Company)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    
    def __unicode__(self, ):
        return str(str(self.timestamp)[:19] + ' ' + str(self.company))
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name = ('Note')
        verbose_name_plural = ('Notes')
