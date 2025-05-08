from rest_framework import serializers
from main.models import Product

class ProductSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(source='category', queryset=Product._meta.get_field('category').remote_field.model.objects.all())

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'image_url', 'quantity', 'price', 'category_id']
