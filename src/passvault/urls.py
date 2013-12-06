from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    #url(r'^$', 'passvault.views.home', name='home'),
    
    
    
    #admin
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'customers.views.companylist'),
    url(r'^company/add/', 'customers.views.add_company'),
    url(r'^company/(?P<slug>[-\w\d]+)/addnote', 'customers.views.addnote'),
    url(r'^company/(?P<slug>[-\w\d]+)/', 'customers.views.company'),
    url(r'^customer/(?P<slug>[-\w\d]+)/', 'customers.views.customer'),
    url(r'^notes/(?P<slug>[-\w\d]+)/', 'customers.views.notes'),
    url(r'^passwords/$', 'passwords.views.view_passwords'),
    
)
