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
                # Open the file trying UTF-8 first
                try:
                    path = obj.readme_file.path
                    with open(path, 'r', encoding='utf-8') as f:
                        return f.read()
                except AttributeError:
                    # If .path is not available (e.g. S3 storage), fallback to standard open
                    # This might fail on some storage backends if they don't support text mode correctly with specific encodings
                    with obj.readme_file.open('r') as f:
                        content = f.read()
                        # If content is bytes, decode it
                        if isinstance(content, bytes):
                            return content.decode('utf-8')
                        return content
            except Exception as e:
                print(f"Error reading readme for {obj.title}: {e}")
                return None
        return None
