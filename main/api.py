
from rest_framework import viewsets,mixins
from rest_framework.decorators import list_route,detail_route
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from main.models import BcRiskType, BcFieldTypes
from main.serializers import BcRiskTypeSerializer,BcFieldTypesSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000

    def get_paginated_response(self, data):
        return {
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data
        }


class BcRiskViewset(viewsets.ModelViewSet,mixins.ListModelMixin):
    queryset = BcRiskType.objects.all()
    pagination_class = StandardResultsSetPagination
    serializer_class = BcRiskTypeSerializer

    def list(self, request):
        page = self.paginate_queryset(self.queryset)
        if page is not None:
            serializer = self.serializer_class(page,many=True)

            return Response(self.get_paginated_response(serializer.data))
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    @detail_route(methods=["get"])
    def insurers_risk_types(self, request, pk=None):
        queryset = BcRiskType.objects.filter(insurer=pk)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.serializer_class(page, many=True)

            return Response(self.get_paginated_response(serializer.data))
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)


class BcFieldTypesViewset(viewsets.ModelViewSet):
    queryset = BcFieldTypes.objects.all()
    serializer_class = BcFieldTypesSerializer

    def list(self,request):
        serializer = self.serializer_class(self.queryset,many=True)
        return Response(serializer.data)

