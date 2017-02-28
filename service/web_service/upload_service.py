import cherrypy


class UploadService(object):
    def __init__(selfself):
        pass

    @cherrypy.expose()
    def upload(selfself, s_file, c_file, t_file, t_text):
        for_breakpoint = 1
        return 'Actually okay'

    @cherrypy.expose()
    def test(self):
        return 'Service is up'
