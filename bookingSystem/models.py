from django.db import models

# Create your models here.
class Flight(models.Model):
    picture = models.ImageField(upload_to="Media")
    city = models.CharField(max_length=40)
    trip_type = models.CharField(max_length=10)
    departure = models.DateTimeField()
    return_date = models.DateField()
    price = models.FloatField()

    def __str__(self):
        return self.city
