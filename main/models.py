from django.contrib.postgres.fields import JSONField, HStoreField
from django.db import models

# Create your models here.


class BcInsurer(models.Model):
    name = models.CharField(max_length=265)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meat:
        db_table = "bc_insurer"


class BcFieldTypes(models.Model):
    name = models.CharField(max_length=10)

    class Meta:
        db_table = "bc_field_types"


class BcRiskType(models.Model):
    name = models.CharField(max_length=255)
    insurer = models.ForeignKey(BcInsurer,related_name="risk_types",on_delete=models.CASCADE)
    fields = JSONField(default=list)

    class Meta:
        db_table = "bc_risk_type"


class BcDataCollected(models.Model):
    risk = models.ForeignKey(BcRiskType,related_name="data_collected",on_delete=models.CASCADE)
    data = JSONField(default=dict)

    class Meta:
        db_table = "bc_data_collected"
