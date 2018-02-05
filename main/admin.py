from django.contrib import admin
from main.models import  *


class InsurersAdmin(admin.ModelAdmin):
    list_display = ["id","name"]


class FieldTypesAdmin(admin.ModelAdmin):
    list_display = ["id","name"]


class RiskTypesAdmin(admin.ModelAdmin):
    list_display = ["id","name","insurer"]
# Register your models here.


admin.site.register(BcInsurer,InsurersAdmin)
admin.site.register(BcFieldTypes,FieldTypesAdmin)
admin.site.register(BcRiskType,RiskTypesAdmin)


