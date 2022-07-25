from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User
from app.forms import EditUserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=["PUT"])
def editUser():
    print('edit user backend route reached')

    form = EditUserForm

    if form.validate_on_submit():
        print('data: ', data)
        data = form.data
        user = User(
            # username= data['username'],
            # email=data['email'],
            # password=data['password'],
            photo_url=data['photo_url']
            )
        db.session.add(user)
        db.session.commit()
        return user.to_dict()
