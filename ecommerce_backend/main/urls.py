from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.auth_view import RegisterView, LoginView
from .views.category_view import CategoryViewSet
from .views.category_view import ParentCategoryListView
from main.views.product_view import ProductViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('parent-categories/', ParentCategoryListView.as_view(), name='parent-categories'),
    path('', include(router.urls)),  # includes /categories/
]
