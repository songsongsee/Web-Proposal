from django.shortcuts import render

# Create your views here.
def index(request):
    room_detail = {
        'room_number': "539",
        'room_name': "lecture room",
        'floor': "5"
    }
    return render(request, 'home.html', context=room_detail)