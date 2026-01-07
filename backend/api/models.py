from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(blank=True, null=True, max_length=500, help_text="URL to project image")
    tech_stack = models.CharField(max_length=200, help_text="Comma separated technologies")
    link = models.URLField(blank=True)
    readme_file = models.URLField(blank=True, null=True, max_length=500, help_text="URL to README file")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
