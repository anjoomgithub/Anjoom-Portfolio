from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    image_url = models.URLField(blank=True, help_text="Direct link to image (use this for Vercel stability)")
    tech_stack = models.CharField(max_length=200, help_text="Comma separated technologies")
    link = models.URLField(blank=True)
    readme_file = models.FileField(upload_to='readmes/', blank=True, null=True)
    readme_content = models.TextField(blank=True, null=True, help_text="Markdown content for the project")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
