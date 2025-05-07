from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.auth_view import RegisterView, LoginView
from .views.category_view import CategoryViewSet
from .views.category_view import ParentCategoryListView

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('parent-categories/', ParentCategoryListView.as_view(), name='parent-categories'),
    path('', include(router.urls)),  # includes /categories/
]
