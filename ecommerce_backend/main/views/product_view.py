from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from main.models import Product
from main.serializers.product_serializer import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
