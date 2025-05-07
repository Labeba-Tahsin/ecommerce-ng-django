from rest_framework import serializers
from main.models import Category

class CategorySerializer(serializers.ModelSerializer):
    parent_id = serializers.PrimaryKeyRelatedField(
        source='parent',  # write to `parent` field in the model
        queryset=Category.objects.all(),
        required=False,
        allow_null=True
    )
    parent_name = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'parent_id', 'parent_name']

    def get_parent_name(self, obj):
        return obj.parent.name if obj.parent else None

    def validate(self, data):
        parent = data.get('parent')
        if parent and parent.parent:
            raise serializers.ValidationError("Only top-level categories can be parents.")
        return data
