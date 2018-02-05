from django.conf.urls import url,include
from rest_framework.routers import DefaultRouter
from . import api
import main

# app_name = "main"

bc = DefaultRouter()
bc.register(r"",api.BcRiskViewset,"risk")

ft = DefaultRouter()
ft.register(r"",api.BcFieldTypesViewset,"types")


urlpatterns = [
    url(r'^risk/api/v1/',include(bc.urls,namespace="risk-api")),
    url(r'^field-types/api/v1/',include(ft.urls,namespace="field")),
    # url(r'^(?P<path>.*)/$', main.views.index),

]