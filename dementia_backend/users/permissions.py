from rest_framework.permissions import BasePermission

class IsDoctor(BasePermission):
    """
    Allows access only to doctor users.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.user_type == 'doctor'

class IsPatient(BasePermission):
    """
    Allows access only to patient users.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.user_type == 'patient'
