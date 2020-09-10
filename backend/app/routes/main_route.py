from flask import Blueprint

main_blueprint = Blueprint('main_blueprint', __name__)

@main_blueprint.route('/')
def index():
    return "Hello World!", 200
