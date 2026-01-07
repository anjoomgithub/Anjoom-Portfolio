import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Project
from django.core.files import File

def attach_local_media():
    """Attach local media files to database records"""
    
    # Mapping of project titles to their local file names
    project_media = {
        "DriveHub": {
            "image": "projects/DriveHub.png",
            "readme": "readmes/drivehub_readme.md"
        },
        "Zolvi Advertising (UAE)": {
            "image": "projects/ZOLVI.png",
            "readme": "readmes/zolvi_readme.md"
        },
        "Deccor Aluminium & Interiors": {
            "image": "projects/DECCOR.png",
            "readme": "readmes/deccor_readme.md"
        },
        "Online Diary Shop": {
            "image": None,
            "readme": None
        },
        "AI Summarizer Tool": {
            "image": "projects/AI-SUMMARIZER.png",
            "readme": "readmes/ai_summarizer_readme.md"
        },
        "Apexio Labs": {
            "image": "projects/APEXIO.png",
            "readme": "readmes/apexio_readme.md"
        },
        "Distribution Management System": {
            "image": "projects/DMS.png",
            "readme": "readmes/dms_sample.md"
        }
    }
    
    projects = Project.objects.all()
    
    for project in projects:
        print(f"\nProcessing: {project.title}")
        
        if project.title not in project_media:
            print(f"  ⚠️  No media mapping found")
            continue
            
        media = project_media[project.title]
        
        # Set image path
        if media["image"]:
            full_path = os.path.join('media', media["image"])
            if os.path.exists(full_path):
                project.image = media["image"]
                print(f"  ✅ Image: {media['image']}")
            else:
                print(f"  ❌ Image not found: {full_path}")
        
        # Set README path
        if media["readme"]:
            full_path = os.path.join('media', media["readme"])
            if os.path.exists(full_path):
                project.readme_file = media["readme"]
                print(f"  ✅ README: {media['readme']}")
            else:
                print(f"  ❌ README not found: {full_path}")
        
        project.save()
        print(f"  💾 Saved")

if __name__ == '__main__':
    print("🚀 Attaching local media files to database...\n")
    attach_local_media()
    print("\n✨ Complete!")
