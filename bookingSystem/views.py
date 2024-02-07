from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    my_flights = Flight.objects.all()
    return render(request, 'home.html', {'my_flights':my_flights})
