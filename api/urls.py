

from django.urls import path, include

from .views import RoomView, CreateRoomView

urlpatterns = [
    path('room', RoomView.as_view(), name="api_room_url"),
    path('create_room', CreateRoomView.as_view())
]