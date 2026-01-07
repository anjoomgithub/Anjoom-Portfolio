from http.server import BaseHTTPRequestHandler

def handler(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    return [b'Hello from api_handler.py']
