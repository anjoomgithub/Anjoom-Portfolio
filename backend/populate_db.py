
import os
import django
import sys

# Add the project root to the python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Project

def populate():
    # Clear existing data to avoid duplicates/mess
    Project.objects.all().delete()
    print("Cleared existing projects.")

    media_base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'media')
    
    projects = [
        {
            "title": "DriveHub",
            "description": "A comprehensive web platform designed to connect vehicle owners with automotive service providers and product vendors. Marketplace and Service Booking System.",
            "tech_stack": "Django 5, React 19, Tailwind CSS",
            "link": "https://github.com/Anjoom/DRIVE_HUB",
            "image_filename": "DriveHub.png",
            "readme_filename": "drivehub_readme.md"
        },
        {
            "title": "Zolvi Advertising (UAE)",
            "description": "Full stack website for a UAE-based advertising agency. Built using HTML, CSS, JavaScript, Django, and PostgreSQL. Features a dynamic portfolio and service showcase.",
            "tech_stack": "Django, PostgreSQL, JS, HTML, CSS",
            "link": "https://zolviadvertising.com",
            "image_filename": "ZOLVI.png",
            "readme_filename": "zolvi_readme.md"
        },
        {
            "title": "Deccor Aluminium & Interiors",
            "description": "Responsive business site featuring a comprehensive inquiry system and automated email notifications. Designed to showcase interior design services.",
            "tech_stack": "Django, React, Email Automation",
            "link": "#",
            "image_filename": "DECCOR.png",
            "readme_filename": "deccor_readme.md"
        },
        {
            "title": "Online Diary Shop",
            "description": "Full-featured Ecommerce platform with shopping cart, transaction workflows, and optimized backend logic. Focus on performance and seamless user experience.",
            "tech_stack": "Django, Python, Ecommerce",
            "link": "#",
            "image_filename": "DMS.png", # Reusing DMS icon if no specific diary one
            "readme_filename": "dms_sample.md"
        },
        {
            "title": "AI Summarizer Tool",
            "description": "Intelligent content summarization application integrating the Gemini API. Features a scalable UI and efficient processing of large text inputs.",
            "tech_stack": "Django, Gemini API, React",
            "link": "#",
            "image_filename": "AI-SUMMARIZER.png",
            "readme_filename": "ai_summarizer_readme.md"
        },
        {
            "title": "Apexio Labs",
            "description": "Responsive corporate business site with an inquiry system, email automation, and a custom admin dashboard for content management.",
            "tech_stack": "Django, React, Admin Systems",
            "link": "https://apexiolabs.in",
            "image_filename": "APEXIO.png",
            "readme_filename": "apexio_readme.md"
        },
        {
            "title": "Distribution Management System",
            "description": "Custom web application for a distribution company in Kerala. Includes modules for invoicing, order management, and real-time tracking.",
            "tech_stack": "JavaScript, Django, Web App",
            "link": "#",
            "image_filename": "DMS.png",
            "readme_filename": "dms_sample.md"
        }
    ]

    for p in projects:
        image_name = p.pop('image_filename', None)
        readme_name = p.pop('readme_filename', None)
        
        # Read README content
        readme_content = ""
        if readme_name:
            readme_path = os.path.join(media_base, 'readmes', readme_name)
            if os.path.exists(readme_path):
                with open(readme_path, 'r', encoding='utf-8') as f:
                    readme_content = f.read()
        
        project = Project.objects.create(
            **p,
            readme_content=readme_content
        )
        
        # Set image string (using static path approach for Vercel)
        if image_name:
            # We store the intended static URL in the image field
            # This is a bit of a trick because it's an ImageField, 
            # but we'll manually set the path string.
            project.image = f"projects/{image_name}"
            project.save()

        print(f"Created project: {p['title']} with README content ({len(readme_content)} chars)")

if __name__ == '__main__':
    populate()
