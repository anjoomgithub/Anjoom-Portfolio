from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    readme_content = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'tech_stack', 'link', 'readme_content']

    def get_image(self, obj):
        # Prioritize image_url for Vercel stability
        if obj.image_url:
            return obj.image_url
        if obj.image:
            return obj.image.url
        return None

    def get_readme_content(self, obj):
        # Prioritize direct text content in database
        if obj.readme_content:
            return obj.readme_content
            
        # Fallback to file reading (likely to fail on Vercel but okay for local)
        if obj.readme_file:
            try:
                try:
                    path = obj.readme_file.path
                    with open(path, 'r', encoding='utf-8') as f:
                        return f.read()
                except AttributeError:
                    with obj.readme_file.open('r') as f:
                        content = f.read()
                        if isinstance(content, bytes):
                            return content.decode('utf-8')
                        return content
            except Exception:
                return None
        return None
