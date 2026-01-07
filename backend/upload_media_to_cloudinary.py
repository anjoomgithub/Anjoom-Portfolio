import os
import django
import sys
import cloudinary
import cloudinary.uploader

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Project

# Configure Cloudinary (you'll need to set these)
cloudinary.config(
    cloud_name=os.environ.get('CLOUDINARY_CLOUD_NAME', 'YOUR_CLOUD_NAME'),
    api_key=os.environ.get('CLOUDINARY_API_KEY', 'YOUR_API_KEY'),
    api_secret=os.environ.get('CLOUDINARY_API_SECRET', 'YOUR_API_SECRET')
)

def upload_media_files():
    """Upload all media files to Cloudinary and update database"""
    
    # Mapping of project titles to their local file names
    project_media = {
        "DriveHub": {
            "image": "media/projects/DriveHub.png",
            "readme": "media/readmes/drivehub_readme.md"
        },
        "Zolvi Advertising (UAE)": {
            "image": "media/projects/ZOLVI.png",
            "readme": "media/readmes/zolvi_readme.md"
        },
        "Deccor Aluminium & Interiors": {
            "image": "media/projects/DECCOR.png",
            "readme": "media/readmes/deccor_readme.md"
        },
        "Online Diary Shop": {
            "image": None,  # No image found
            "readme": None
        },
        "AI Summarizer Tool": {
            "image": "media/projects/AI-SUMMARIZER.png",
            "readme": "media/readmes/ai_summarizer_readme.md"
        },
        "Apexio Labs": {
            "image": "media/projects/APEXIO.png",
            "readme": "media/readmes/apexio_readme.md"
        },
        "Distribution Management System": {
            "image": "media/projects/DMS.png",
            "readme": "media/readmes/dms_sample.md"
        }
    }
    
    projects = Project.objects.all()
    
    for project in projects:
        print(f"\nProcessing: {project.title}")
        
        if project.title not in project_media:
            print(f"  ⚠️  No media mapping found for '{project.title}'")
            continue
            
        media = project_media[project.title]
        
        # Upload image to Cloudinary
        if media["image"] and os.path.exists(media["image"]):
            try:
                result = cloudinary.uploader.upload(
                    media["image"],
                    folder="portfolio/projects",
                    public_id=f"{project.title.lower().replace(' ', '_')}_image",
                    overwrite=True
                )
                project.image = result['secure_url']
                print(f"  ✅ Image uploaded: {result['secure_url']}")
            except Exception as e:
                print(f"  ❌ Image upload failed: {e}")
        
        # Upload README to Cloudinary (as raw file)
        if media["readme"] and os.path.exists(media["readme"]):
            try:
                result = cloudinary.uploader.upload(
                    media["readme"],
                    folder="portfolio/readmes",
                    public_id=f"{project.title.lower().replace(' ', '_')}_readme",
                    resource_type="raw",
                    overwrite=True
                )
                project.readme_file = result['secure_url']
                print(f"  ✅ README uploaded: {result['secure_url']}")
            except Exception as e:
                print(f"  ❌ README upload failed: {e}")
        
        project.save()
        print(f"  💾 Project saved to database")

if __name__ == '__main__':
    print("🚀 Starting media upload to Cloudinary...\n")
    upload_media_files()
    print("\n✨ Upload complete!")
