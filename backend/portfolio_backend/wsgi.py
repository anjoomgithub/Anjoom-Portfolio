"""
WSGI config for portfolio_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os
import sys
from pathlib import Path

# Add project root to path
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')

_application = get_wsgi_application()

def application(environ, start_response):
    if environ.get('PATH_INFO') == '/ping':
        start_response('200 OK', [('Content-Type', 'text/plain')])
        return [b'pong']
    return _application(environ, start_response)
