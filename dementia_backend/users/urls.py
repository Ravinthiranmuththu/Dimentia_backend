from django.urls import path
from .views import (
    RegisterView,
    DoctorLoginView,
    PatientLoginView,
    LogoutView,
    PatientViewSet,
    PatientProfileView
)

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'patients', PatientViewSet, basename='patients')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('doctor-login/', DoctorLoginView.as_view(), name='doctor-login'),
    path('patient-login/', PatientLoginView.as_view(), name='patient-login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]

urlpatterns += router.urls
urlpatterns += [
    path('patient-profile/<str:username>/', PatientProfileView.as_view(), name='patient-profile'),
]