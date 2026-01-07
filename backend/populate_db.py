
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

    projects = [
        {
            "title": "DriveHub",
            "description": "A comprehensive web platform designed to connect vehicle owners with automotive service providers and product vendors. Marketplace and Service Booking System.",
            "tech_stack": "Django 5, React 19, Tailwind CSS",
            "link": "https://github.com/Anjoom/DRIVE_HUB",
            "image": "projects/DriveHub.png",
            "readme_file": "readmes/drivehub_readme.md"
        },
        {
            "title": "Zolvi Advertising (UAE)",
            "description": "Full stack website for a UAE-based advertising agency. Built using HTML, CSS, JavaScript, Django, and PostgreSQL. Features a dynamic portfolio and service showcase.",
            "tech_stack": "Django, PostgreSQL, JS, HTML, CSS",
            "link": "https://zolviadvertising.com",
            "image": "projects/ZOLVI.png",
            "readme_file": "readmes/zolvi_readme.md"
        },
        {
            "title": "Deccor Aluminium & Interiors",
            "description": "Responsive business site featuring a comprehensive inquiry system and automated email notifications. Designed to showcase interior design services.",
            "tech_stack": "Django, React, Email Automation",
            "link": "#",
            "image": "projects/DECCOR.png",
            "readme_file": "readmes/deccor_readme.md"
        },
        {
            "title": "Online Diary Shop",
            "description": "Full-featured Ecommerce platform with shopping cart, transaction workflows, and optimized backend logic. Focus on performance and seamless user experience.",
            "tech_stack": "Django, Python, Ecommerce",
            "link": "#",
            # No image found
        },
        {
            "title": "Gym Management System",
             "description": "Comprehensive system for managing gym operations, memberships, and trainers.",
             "tech_stack": "Django, React",
             "link": "#",
             "image": "projects/GYM.png",
             "readme_file": "readmes/gym_management_readme.md"
        },
        {
            "title": "AI Summarizer Tool",
            "description": "Intelligent content summarization application integrating the Gemini API. Features a scalable UI and efficient processing of large text inputs.",
            "tech_stack": "Django, Gemini API, React",
            "link": "#",
            "image": "projects/AI-SUMMARIZER.png",
            "readme_file": "readmes/ai_summarizer_readme.md"
        },
        {
            "title": "Apexio Labs",
            "description": "Responsive corporate business site with an inquiry system, email automation, and a custom admin dashboard for content management.",
            "tech_stack": "Django, React, Admin Systems",
            "link": "https://apexiolabs.in",
            "image": "projects/APEXIO.png",
            "readme_file": "readmes/apexio_readme.md"
        },
        {
            "title": "Distribution Management System",
            "description": "Custom web application for a distribution company in Kerala. Includes modules for invoicing, order management, and real-time tracking.",
            "tech_stack": "JavaScript, Django, Web App",
            "link": "#",
            "image": "projects/DMS.png",
            "readme_file": "readmes/dms_sample.md"
        }
    ]

    for p in projects:
        Project.objects.create(**p)
        print(f"Created project: {p['title']}")

if __name__ == '__main__':
    populate()
