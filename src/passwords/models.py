from django.db import models
from customers.models import Company
from django_fields.fields import EncryptedCharField
from django.contrib.auth.models import User


class PublicPassword(models.Model):
    user = models.ForeignKey(User)
    company = models.ForeignKey(Company)
    username = models.CharField(max_length=120, null=True, blank=True)
    password = EncryptedCharField(block_type='MODE_CBC', max_length=50)
    location = models.CharField(max_length=120)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    personal = models.BooleanField(default=True)
    
    def __unicode__(self, ):
        return str(self.company.name + ' ' + self.location)