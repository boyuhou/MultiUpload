import click
import os
import cherrypy
from web_service.upload_service import UploadService


def CORS():
    cherrypy.response.headers['Access-Control-Allow-Origin'] = '*'

@click.command()
@click.option('--multiproc', help='For Pycharm debug only, no use')
@click.option('--qt-support', help='For Pycharm debug only, no use')
@click.option('--client', help='For Pycharm debug only, no use')
@click.option('--file', help='For Pycharm debug only, no use')
@click.option('--port', help='For Pycharm debug only, no use')
def main(multiproc, qt_support, client, file, port):
    cherrypy.tree.mount(UploadService(), '/', {
            '/': {
                'response.timeout': 60,
                'tools.CORS.on': True,
            }
        })

    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.config.update(
        {
            'server.socket_port': 22012,
            'server.socket_host': '127.0.0.1'
        }
    )
    cherrypy.tools.CORS = cherrypy.Tool('before_handler', CORS)
    cherrypy.engine.start()


if __name__ == '__main__':
    main()


