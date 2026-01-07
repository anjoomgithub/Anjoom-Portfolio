from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    readme_content = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'tech_stack', 'link', 'readme_file', 'readme_content']

    def get_readme_content(self, obj):
        if obj.readme_file:
            try:
                import requests
                response = requests.get(obj.readme_file, timeout=10)
                response.raise_for_status()
                return response.text
            except Exception as e:
                print(f"Error fetching readme for {obj.title}: {e}")
                return None
        return None
