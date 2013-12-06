# Create your views here.
from passwords.models import PublicPassword

from django.shortcuts import render_to_response, RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

@login_required
def view_passwords(request):
	passwords = PublicPassword.objects.filter(user=request.user)

	return render_to_response('passwords/all.html', locals(), context_instance=RequestContext(request))