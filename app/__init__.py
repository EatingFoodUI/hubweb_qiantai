from flask import Flask
from flask_login import LoginManager
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
import os
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager, Shell
import pymysql
from flask_compress import Compress
from flask_cors import *


app = Flask(__name__, static_folder='./templates', static_url_path='')
# app = Flask(__name__)
app.debug = True
app.secret_key = "welecome to hubwebpage"
app.config.from_pyfile('config.py', silent=True)

app.config['COMPRESS_MIMETYPES'] = ['text/html', 'text/css', 'text/xml',
                                    'application/json', 'application/javascript',
                                    'image/png']
app.config['COMPRESS_MIN_SIZE'] = 50

login_manager = LoginManager(app)
login_manager.init_app(app)
bootstrap = Bootstrap(app)
Compress(app)
CORS(app, supports_credentials=True)

basedir = os.path.abspath(os.path.dirname(__file__))
# UPLOAD_ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg']) # 允许上传的扩展名
# UPLOAD_FOLDER_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER_PATH = '/usr/hubweb_qiantai/app/templates/up_photo/'    # 上传文件路径
# UPLOAD_FOLDER = os.path.join(UPLOAD_FOLDER_ROOT, UPLOAD_FOLDER_PATH)
UPLOAD_FOLDER = UPLOAD_FOLDER_PATH

db = SQLAlchemy(app)
from .models import User, Member, Essay, Project
migrate = Migrate(app, db)

manager = Manager(app)



def make_shell_context():
    return dict(app=app, db=db, User=User, Member=Member, Essay=Essay, Project=Project)


manager.add_command('db', MigrateCommand)
manager.add_command("shell", Shell(make_context=make_shell_context))

from . import views
