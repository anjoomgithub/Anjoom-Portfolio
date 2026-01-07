import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Project
from django.core.files import File

# Define README content for each project
readmes = {
    "DriveHub": """# DriveHub - Automotive Marketplace & Service Booking

## Project Overview
**DriveHub** is a dual-purpose web platform designed to bridge the gap between vehicle owners and automotive service providers. It functions as both a marketplace for car parts and a booking system for vehicle services.

## Core Features
### For Users:
*   **Service Booking:** Schedule repairs, maintenance, or doorstep services.
*   **Marketplace:** Browse and purchase car accessories and modifications.
*   **Service Tracking:** Real-time updates on vehicle service status.

### For Vendors/Mechanics:
*   **Shop Management:** Manage service slots and inventory.
*   **Order Processing:** Handle product orders and service requests.

## Technology Stack
*   **Frontend:** React 19, Tailwind CSS
*   **Backend:** Django 5, Django Rest Framework
*   **Database:** PostgreSQL

## Setup Instructions
```bash
git clone https://github.com/Anjoom/DRIVE_HUB.git
cd DRIVE_HUB
pip install -r requirements.txt
python manage.py runserver
```
""",
    "Zolvi": """# Zolvi Advertising (UAE)

## Project Overview
A premium corporate website developed for **Zolvi Advertising**, a leading agency in the UAE. The site showcases their portfolio, services, and client success stories with a high-end, professional aesthetic.

## Key Highlights
*   **Dynamic Portfolio:** CMS-driven project showcase.
*   **SEO Optimized:** Built with server-side rendering strategies.
*   **Responsive Design:** Flawless experience across all devices.
*   **Multi-language Support:** Ready for Arabic and English content.

## Tech Stack
*   **Framework:** Django (Full Stack)
*   **Styling:** Custom CSS, Bootstrap
*   **Database:** PostgreSQL

## Live Site
[Visit Zolvi Advertising](https://zolviadvertising.com)
""",
    "Deccor": """# Deccor Aluminium & Interiors

## Overview
A business website designed for an interior design firm. The platform focuses on visual storytelling through galleries and ease of communication via automated inquiry systems.

## Features
*   **Gallery System:** High-resolution image showcases of interior work.
*   **Automated Emails:** Instant notifications for new inquiries using SMTP.
*   **Admin Dashboard:** Custom admin interface for managing project uploads.

## Tech Stack
*   **Stack:** Django, React
*   **Features:** Email Automation, Gallery Management
""",
    "Online Diary": """# Online Diary Shop

## Overview
A fully functional E-commerce platform dedicated to personalized diaries and stationery. It features a complete shopping lifecycle from product selection to checkout.

## Features
*   **User Accounts:** Profile management and order history.
*   **Shopping Cart:** Persistent cart using local storage and backend sessions.
*   **Checkout Process:** Secure transaction workflows.
*   **Admin Panel:** Product and category management.

## Tech Stack
*   **Backend:** Django, Python
*   **Frontend:** HTML/CSS/JS (Template based)
""",
    "AI Summarizer": """# AI Summarizer Tool

## Overview
An intelligent content processing tool that leverages the Gemini API to summarize large blocks of text effectively. Designed for students and professionals who need quick insights.

## How It Works
1.  **Input:** User pastes text or uploads a document.
2.  **Process:** The system sends the data to the Gemini API with custom prompts.
3.  **Output:** A concise summary is generated in seconds.

## Tech Stack
*   **API:** Google Gemini API
*   **Backend:** Django
*   **Frontend:** React
""",
    "Apexio": """# Apexio Labs

## Overview
The official corporate website for **Apexio Labs**, a software development company. The site serves as a central hub for their services, team information, and client portal.

## Features
*   **Service Catalog:** Detailed breakdown of development services.
*   **Content Management:** Custom dashboard for blog and news updates.
*   **Lead Generation:** Integrated contact forms and CRM hooks.

## Tech Stack
*   **Frontend:** React, Tailwind CSS
*   **Backend:** Django
*   **Deployment:** AWS
"""
}

image_urls = {
    "DriveHub": "https://images.unsplash.com/photo-1487754158491-0f164b8ee21b?auto=format&fit=crop&q=80&w=1000",
    "Zolvi": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    "Deccor": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
    "Online Diary": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    "AI Summarizer": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    "Apexio": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    "Distribution": "https://images.unsplash.com/photo-1586528116311-ad861f1ef2a3?auto=format&fit=crop&q=80&w=1000"
}

def generate_readmes():
    projects = Project.objects.all()

    for project in projects:
        # Update README content
        matched_readme_key = next((key for key in readmes if key.lower() in project.title.lower()), None)
        if matched_readme_key:
            project.readme_content = readmes[matched_readme_key]
            print(f"Updated README content for: {project.title}")
        
        # Update Image URL
        matched_image_key = next((key for key in image_urls if key.lower() in project.title.lower()), None)
        if matched_image_key:
            project.image_url = image_urls[matched_image_key]
            print(f"Updated Image URL for: {project.title}")
            
        project.save()

if __name__ == '__main__':
    generate_readmes()
