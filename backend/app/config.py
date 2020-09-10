import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'my-very-secret-key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI') or 'sqlite:///app.db'
