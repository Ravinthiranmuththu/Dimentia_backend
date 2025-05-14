from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Patient

# Custom User Admin
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'first_name', 'last_name', 'slmc_id', 'is_staff')
    search_fields = ('email', 'slmc_id')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password', 'first_name', 'last_name', 'slmc_id')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'slmc_id', 'password1', 'password2')}
        ),
    )

admin.site.register(CustomUser, CustomUserAdmin)

# Patient Admin
class PatientAdmin(admin.ModelAdmin):
    list_display = ('user', 'age', 'gender', 'address', 'emergency_contact')
    search_fields = ('user__first_name', 'user__last_name', 'user__slmc_id')  # Searching by user fields (first name, last name, SLMC ID)
    list_filter = ('gender', 'age')  # Filtering by gender and age
    ordering = ('user__last_name',)  # Ordering by patient's last name

admin.site.register(Patient, PatientAdmin)
