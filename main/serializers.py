from rest_framework import serializers

from main.models import BcRiskType, BcInsurer, BcFieldTypes


class BcInsurerSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = BcInsurer


class BcFieldTypesSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = BcFieldTypes


class BcRiskTypeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = BcRiskType