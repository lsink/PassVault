import os

DEBUG = True
TEMPLATE_DEBUG = DEBUG

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'passvault',                      # Or path to database file if using sqlite3.
        # The following settings are not used with sqlite3:
        'USER': 'passvault',
        'PASSWORD': 'passvault_pass',
        'HOST': '',                      # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': '',                      # Set to empty string for default.
    }
}

MEDIA_ROOT = '/home/lsinkevicius/webapps/jci/passvault/static/media'

MEDIA_URL = '/media/'


STATIC_ROOT = '/home/lsinkevicius/webapps/static'


STATICFILES_DIRS = (
        '/home/lsinkevicius/webapps/jci/passvault/static/static',

)

STATIC_URL = 'http://jci.litastech.com/static/'


TEMPLATE_DIRS = (
        '/home/lsinkevicius/webapps/jci/passvault/static/templates',

)