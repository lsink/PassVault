from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, RequestContext, get_object_or_404, Http404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

from .models import Customer, Company, Notes
from passwords.models import PublicPassword
from .forms import NotesForm, CompanyAddForm

@login_required
def companylist(request):
    companies = Company.objects.all
    return render_to_response('home.html', locals(), context_instance=RequestContext(request))

@login_required
def company(request, slug):
    try:
        company = Company.objects.get(slug=slug)
    except:
        pass
    try:
        user = request.user
    except:
        pass
    try:
        customers = Customer.objects.filter(company=company)
    except:
        pass
    try:
        latest_note = Notes.objects.filter(company=company).order_by('-id')[0]
    except:
        pass
    try:
        all_notes = Notes.objects.filter(company=company).order_by('-id')
    except Exception:
        pass
    try:
        passwords = PublicPassword.objects.filter(company=company, personal=False)
    except:
        pass

    return render_to_response('company.html', locals(), context_instance=RequestContext(request))

@login_required
def customer(request, slug):
    try:
        customer = Customer.objects.get(slug=slug)
    except:
        pass
    return render_to_response('customer.html', locals(), context_instance=RequestContext(request))

@login_required
def notes(request, slug):
    try:
        company = Company.objects.get(slug=slug)
        notes = Notes.objects.filter(company=company)
    except:
        pass
    
    return render_to_response('notes.html', locals(), context_instance=RequestContext(request))

@login_required
def addnote(request, slug):
    #request.session.set_expiry(0)
    if request.method == "POST": # Check if the request is POST
        print "POST PASSED"
        
        form = NotesForm(request.POST) # Set variable form to to the submitted form data
        if form.is_valid(): # Check if form is valid
            print 'form is valid'
            form_text = form.cleaned_data['text']
            #form_company = form.cleaned_data['slug']
            try:
                company = Company.objects.get(slug=slug)
                print 'received company'
            except Exception:
                raise Http404
            try:
                new_note = Notes.objects.create(text=form_text, company=company)
                new_note.save()
            except Exception:
                return HttpResponseRedirect('/')

    return HttpResponseRedirect('/company/' + slug + '/')
    #return render_to_response('notes.html', locals(), context_instance=RequestContext(request))

def add_company(request):
    if request.method == "POST":
        form = CompanyAddForm(request.POST)
        if form.is_valid():
            form_name = form.cleaned_data['name']
            try:
                form_address1 = form.cleaned_data['address1']
            except:
                pass
            try:
                form_address2 = form.cleaned_data['address2']
            except:
                pass
            try:
                form_city = form.cleaned_data['city']
            except:
                pass
            try:
                form_state = form.cleaned_data['state']
            except:
                pass
            try:
                form_zipcode = form.cleaned_data['zipcode']
            except:
                pass
            try:
                new_company = Company.objects.create(name=form_name)
            except:
                raise Http404
            if form_address1:
                new_company.address1 = form_address1
            if form_address2:
                new_company.address2 = form_address2
            if form_city:
                new_company.city = form_city
            if form_state:
                new_company.state = form_state
            if form_zipcode:
                new_company.zipcode = form_zipcode
            new_company.save()
            return HttpResponseRedirect('/')
    else:
        form = CompanyAddForm()

    return render_to_response('add_company.html', locals(), context_instance=RequestContext(request))
    #return HttpResponseRedirect('/company/' + slug + '/')