from flask import Flask
from flask_cors import CORS

from app.extensions import db, migrate

from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config())

    # initialize flask plugins
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # add endpoints
    from app.routes.main_route import main_blueprint
    app.register_blueprint(main_blueprint)

    return app
