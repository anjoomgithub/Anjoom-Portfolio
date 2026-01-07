from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    tech_stack = models.CharField(max_length=200, help_text="Comma separated technologies")
    link = models.URLField(blank=True)
    readme_file = models.FileField(upload_to='readmes/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
