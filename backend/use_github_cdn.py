import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Project

def use_github_urls():
    """Update database to use GitHub raw URLs for media files"""
    
    # Your GitHub repository base URL
    GITHUB_BASE = "https://raw.githubusercontent.com/anjoomgithub/Anjoom-Portfolio/main/backend/media"
    
    # Mapping of project titles to their file names
    project_media = {
        "DriveHub": {
            "image": f"{GITHUB_BASE}/projects/DriveHub.png",
            "readme": f"{GITHUB_BASE}/readmes/drivehub_readme.md"
        },
        "Zolvi Advertising (UAE)": {
            "image": f"{GITHUB_BASE}/projects/ZOLVI.png",
            "readme": f"{GITHUB_BASE}/readmes/zolvi_readme.md"
        },
        "Deccor Aluminium & Interiors": {
            "image": f"{GITHUB_BASE}/projects/DECCOR.png",
            "readme": f"{GITHUB_BASE}/readmes/deccor_readme.md"
        },
        "Online Diary Shop": {
            "image": None,
            "readme": None
        },
        "AI Summarizer Tool": {
            "image": f"{GITHUB_BASE}/projects/AI-SUMMARIZER.png",
            "readme": f"{GITHUB_BASE}/readmes/ai_summarizer_readme.md"
        },
        "Apexio Labs": {
            "image": f"{GITHUB_BASE}/projects/APEXIO.png",
            "readme": f"{GITHUB_BASE}/readmes/apexio_readme.md"
        },
        "Distribution Management System": {
            "image": f"{GITHUB_BASE}/projects/DMS.png",
            "readme": f"{GITHUB_BASE}/readmes/dms_sample.md"
        }
    }
    
    projects = Project.objects.all()
    
    for project in projects:
        print(f"\nProcessing: {project.title}")
        
        if project.title not in project_media:
            print(f"  ⚠️  No media mapping found")
            continue
            
        media = project_media[project.title]
        
        # Set GitHub URLs
        if media["image"]:
            project.image = media["image"]
            print(f"  ✅ Image URL: {media['image']}")
        
        if media["readme"]:
            project.readme_file = media["readme"]
            print(f"  ✅ README URL: {media['readme']}")
        
        project.save()
        print(f"  💾 Saved to database")

if __name__ == '__main__':
    print("🚀 Updating database with GitHub raw URLs...\n")
    print("⚠️  Make sure you've pushed media files to GitHub first!\n")
    use_github_urls()
    print("\n✨ Complete! Your projects will now load media from GitHub.")
