import os
import sys

# Add current directory to sys.path so that django can find the project
app_dir = os.path.dirname(os.path.abspath(__file__))
if app_dir not in sys.path:
    sys.path.append(app_dir)

from portfolio_backend.wsgi import application as django_app

def app(environ, start_response):
    path = environ.get('PATH_INFO', '')
    if path.endswith('/ping'):
        start_response('200 OK', [('Content-Type', 'text/plain')])
        return [b'pong']
    return django_app(environ, start_response)
