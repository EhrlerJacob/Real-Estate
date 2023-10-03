from django.urls import path
from .views import ConactCreateView

urlpatterns = [
    path('', ConactCreateView.as_view()),
]