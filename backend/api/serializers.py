from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'tech_stack', 'link', 'readme_content']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        
        # Ensure image URL points to our static location if it's just a path string
        if instance.image:
            image_path = str(instance.image)
            if not image_path.startswith(('http://', 'https://')):
                # Prepend static URL
                request = self.context.get('request')
                static_url = '/static/'
                if request:
                    # Try to build absolute URL if request is available
                    # Otherwise relative is fine for the frontend to handle
                    pass
                representation['image'] = f"{static_url}{image_path}"
        
        return representation
