# main/views/category_view.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from main.models import Category
from main.serializers.category_serializer import CategorySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from main.models import Category
from main.serializers.category_serializer import CategorySerializer
from rest_framework.response import Response
from rest_framework import status

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message": "Category deleted"}, status=status.HTTP_200_OK)


class ParentCategoryListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        parents = Category.objects.filter(parent__isnull=True)
        serializer = CategorySerializer(parents, many=True)
        return Response(serializer.data)
