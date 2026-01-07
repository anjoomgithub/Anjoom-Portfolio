import os
import sys

# Add current directory to sys.path so that django can find the project
app_dir = os.path.dirname(os.path.abspath(__file__))
if app_dir not in sys.path:
    sys.path.append(app_dir)

from portfolio_backend.wsgi import application

# Vercel expects 'app' variable by default for some patterns, but wsgi is usually enough.
app = application
