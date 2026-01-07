# Portfolio Media Upload to Cloudinary

## Problem
Vercel's serverless functions don't support persistent file storage. Your media files (images and READMEs) stored in `backend/media/` won't be accessible in production.

## Solution
Use **Cloudinary** (free cloud storage) to host all media files.

---

## Step 1: Create Cloudinary Account

1. Go to [cloudinary.com](https://cloudinary.com/)
2. Sign up for a free account
3. After logging in, go to **Dashboard**
4. Note down these credentials:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

---

## Step 2: Set Environment Variables

### Local Testing:
```powershell
$env:CLOUDINARY_CLOUD_NAME="your_cloud_name"
$env:CLOUDINARY_API_KEY="your_api_key"
$env:CLOUDINARY_API_SECRET="your_api_secret"
$env:POSTGRES_URL="your_postgres_url"
```

### Vercel Backend:
1. Go to your **backend project** in Vercel Dashboard
2. Settings > Environment Variables
3. Add these variables:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `POSTGRES_URL` (already set)

---

## Step 3: Upload Media Files

Run the upload script:
```powershell
cd backend
python upload_media_to_cloudinary.py
```

This will:
- Upload all project images to Cloudinary
- Upload all README files to Cloudinary
- Update the database with Cloudinary URLs
- Print the new URLs for verification

---

## Step 4: Update Django Settings

The settings are already configured to use Cloudinary URLs directly in the `image` and `readme_file` fields.

---

## Step 5: Deploy

```powershell
git add .
git commit -m "Add Cloudinary media hosting"
git push origin main
```

Vercel will auto-deploy both frontend and backend.

---

## Verification

After deployment:
1. Visit your frontend URL
2. Projects should now show images
3. Click "SYSTEM_LOGS" to verify README files load

---

## File Mapping

| Project | Image | README |
|---------|-------|--------|
| DriveHub | DriveHub.png | drivehub_readme.md |
| Zolvi Advertising | ZOLVI.png | zolvi_readme.md |
| Deccor Aluminium | DECCOR.png | deccor_readme.md |
| Online Diary Shop | ❌ None | ❌ None |
| AI Summarizer | AI-SUMMARIZER.png | ai_summarizer_readme.md |
| Apexio Labs | APEXIO.png | apexio_readme.md |
| Distribution Management | DMS.png | dms_sample.md |

---

## Alternative: GitHub Raw URLs (Quick Fix)

If you want to skip Cloudinary, you can:
1. Create a `media` folder in your GitHub repo
2. Upload images and READMEs there
3. Use raw GitHub URLs in the database

Example:
```
https://raw.githubusercontent.com/anjoomgithub/Anjoom-Portfolio/main/media/projects/DriveHub.png
```

But Cloudinary is recommended for better performance and CDN delivery.
