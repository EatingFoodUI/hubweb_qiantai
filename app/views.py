# from .models import
from . import app, db
from .models import User, Essay, ProjectEssay, Project, Member
from flask import request, jsonify, session
from sqlalchemy import and_
import datetime
from flask import Response, json
import math
import pdb
from flask import make_response
from flask import render_template, send_from_directory
import os
# 可增减next[]参数的功能，实现重定向会登录的地方


@app.after_request
def af_request(resp):     
    """
    #请求钩子，在所有的请求发生后执行，加入headers。
    :param resp:
    :return:
    """
    resp = make_response(resp)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    resp.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
    return resp


# 前台根目录
@app.route('/', methods=['GET', 'POST'])
def index():
    return send_from_directory('./templates', 'index.html', as_attachment=False)
    # return render_template('index.html')


# 后台根目录
@app.route('/houtai', methods=['GET', 'POST'])
def index_houtai():
    return send_from_directory('./templates', 'index_houtai.html', as_attachment=False)


@app.route('/usr/hubweb_qiantai/app/templates/static/img/<string:filename>', methods=['GET'])
def show_photo(filename):
    if request.method == 'GET':
        if filename is None:
            pass
        else:
            image_data = open(os.path.join('/usr/hubweb_qiantai/app/templates/static/img/', '%s' % filename), "rb").read()
            response = make_response(image_data)
            response.headers['Content-Type'] = 'image/png'
            return response
    else:
        pass


# 登录板块（json）
@app.route('/checklogin', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        # 测试
        response = jsonify({'username': 'liyonglin', 'password': '123456'})
        return response
    if request.method == 'POST':
        now_username = request.json['username']
        now_password = request.json['password']
        now_user = User.query.filter(User.username == now_username).first()
        # static:0表示没当前帐号
        # static:1表示密码输入错误
        # static:2表示验证成功
        #  import pdb
        # pdb.set_trace()
        if now_user is None:
            static = 0
            return jsonify({'static': static})
        elif now_user.password != now_password:
            static = 1
            return jsonify({'static': static})
        elif now_user.password == now_password:
            static = 2
            # 记录登录状态
            session['username'] = request.json['username']
            # import pdb
            # pdb.set_trace()
            return jsonify({'static': static})


# 获取用户id
# @app.route('/getUserMation', methods=['GET'])
# def pastUserId():
    # username = request.args.get('username')
    # now_user = User.query.filter(username=username).first()
    # last_logintime = now_user.logintime
    # login_ip = request.remote_addr()
    # return jsonify({'ip': login_ip, 'time': last_logintime})


# 前端传回当前用户登录时间
# @app.route('/editUserMation')
# def getUserLoginTime():
    # username = request.json['username']
    # time = request.json['time']
    # now_user = User.query.filter(username=username).first()
    # now_user.logintime = time
    # db.session.commit()


# 项目主页
@app.route('/getProject', methods=['GET'])
def ProjectPage():
    # 项目名称，项目负责人，项目时间，具体页面
    name = request.args.get('name').strip('\'')
    # man = request.args.get('projectTit').strip('\'')
    time = request.args.get('time').strip('\'')
    page = request.args.get('page')

    # 每页8个
    # 查询，限制页数，限制时间，以时间排序
    Now_time = datetime.date.today()
    # import pdb
    # pdb.set_trace()
    if time == '一个月之前':
        time = Now_time + datetime.timedelta(days=-30)        # 将来可能需要修改，此处只改到10年前
        time2 = Now_time + datetime.timedelta(days=-3650)
        project = Project.query.order_by(Project.time.asc()).filter(and_(Project.time.between(time2, time), Project.projectName.like('%'+name+'%'))).all()
        all_page = math.ceil((float(len(project))/8))
        totalAll = len(project)
        turn_to_json = []
        for i in range(0, 8):
            try:
                one_json = project[8*(int(page)-1)+i].ProjectPage_need_to_json()
                turn_to_json.append(one_json)
            except Exception:
                print('')
        return jsonify({'list': turn_to_json, 'total': allpage, 'totalAll': totalAll})
    # 考虑修改
    elif time == '昨天':
        time = Now_time + datetime.timedelta(days=-1)
    elif time == '最近三天':
        time = Now_time + datetime.timedelta(days=-3)
    elif time == '一周内':
        time = Now_time + datetime.timedelta(days=-7)
    elif time == '一个月内':
        time = Now_time + datetime.timedelta(days=-30)
    project = Project.query.order_by(Project.time.asc()).filter(and_(Project.time.between(time, Now_time), Project.projectName.like('%'+name+'%'))).all()
    all_page = math.ceil((float(len(project))/8))
    totalAll = len(project)
    turn_to_json = []
    # for i in project:
       # one_json = project[i].ProjectPage_need_to_json()
       # turn_to_json.append(one_json)
    # project1 = Project.query.all()
    # page = 1
    for i in range(0, 8):
       try:
           one_json = project[8*(int(page)-1)+i].ProjectPage_need_to_json()
           turn_to_json.append(one_json)
       except Exception:
           print('')
    return jsonify({'list': turn_to_json, 'total': all_page, 'totalAll': totalAll})
    

# 返回所有项目文章
@app.route('/getAllProject')
def getAllPage():
    project = Project.query.all()
    all = len(project)
    turn_to_json = []
    for i in range(all):
        one_json = project[i].AllProject()
        turn_to_json.append(one_json)
    return jsonify({'list': turn_to_json, 'total': all})


# 项目下的文章显示界面
@app.route('/getTypeProject')
def show_project_essay():
    # pdb.set_trace()
    ProjectId = int(request.args.get('Projectid'))
    project = Project.query.filter(Project.projectNo == ProjectId).first()
    # 需商议
    essay_type = ['design', 'keyissue', 'point', 'process']
    # 四个不同类型的json文章内容
    # 考虑优化
    list_1 = []
    list_2 = []
    list_3 = []
    list_4 = []
    list_all = [list_1, list_2, list_3, list_4]
    if project is None:
        return '无此项目'
    else:
        # 将每个种类的文章先json化，再添加到不同的list中，最后再json化
        for i in range(0, 4):
            # pdb.set_trace()
            essay_all = ProjectEssay.query.filter(and_(ProjectEssay.projectNo == ProjectId, ProjectEssay.pro_type == essay_type[i])).all()
            eachType_sum = len(essay_all)
            for j in range(eachType_sum):
                # import pdb
                # pdb.set_trace()
                essay_json = essay_all[j].proEssay_to_json()
                list_all[i].append(essay_json)
    return jsonify({'design': list_1, 'keyissue': list_2, 'point': list_3, 'process': list_4})


# 添加项目页
@app.route('/addProject', methods=['GET', 'POST'])
def add_project():
    if request.method == 'GET':
        return '200'
    if request.method == 'POST':
        projectName = request.json.get('projectName')
        projectMan = request.json.get('projectMan')
        time = request.json.get('time')

        # 查询是否已添加过项目(商议是否修改原项目)
        ishas_project = Project.query.filter(
            Project.projectName == projectName).first()
        if ishas_project is None:
            project = Project(projectName=projectName,
                              projectMan=projectMan, time=time)
            db.session.add(project)
            db.session.commit()
            project_id = project.projectNo
            static = 1
            return jsonify({'Projectid': project_id, 'static': static})
        else:
            static = 0
            return jsonify({'static': static})

# 添加/编辑项目文章页
@app.route('/getProjectPage', methods=['GET', 'POST'])
def edit_Proessay():
    if request.method == 'GET':
        # 可以不需要projectid, type
        # Projectid = request.args.get('ProjectId')
        # pro_essay_type = request.args.get('type')
        pro_essay_id = request.args.get('id')
        pro_essay = ProjectEssay.query.filter(ProjectEssay.pro_essayNo == pro_essay_id).first()
        a = pro_essay.edit_proEssay_to_json()
        return jsonify(a)
 

# 添加项目文章
@app.route('/addProjectPage', methods=['GET', 'POST'])
def addPro_essay():
    Projectid = None
    Pro_type = None
    print('555')
    if request.method == 'GET':
        Projectid = request.args.get('projectid')
        Pro_type = request.args.get('type')
        print('sss')
        return '200'
    if request.method == 'POST':
        id = request.json.get('id')
        print(id)
        # pdb.set_trace()
        if id is None:            # 添加
            # pdb.set_trace()
            projectid = request.json.get('projectid')
            Pro_type = request.json.get('type')
            Pro_title = request.json.get('title')
            Pro_content = request.json.get('content')
            Pro_time = request.json.get('time')
            pro_EssayTit = request.json.get('pageTit')
            new_essay = ProjectEssay(pro_title=Pro_title, pro_content=Pro_content, pro_updateTime=Pro_time,pro_type=Pro_type, projectNo=projectid, pro_EssayTit=pro_EssayTit)
            db.session.add(new_essay)
            db.session.commit()
            if new_essay.pro_essayNo > 0:
                return jsonify({'static': 1})
            else:
                return jsonify({'static': 0})
        else:
            # pdb.set_trace()
            pro_id = request.json.get('id')
            pro_title = request.json.get('title')
            pro_content = request.json.get('content')
            pro_time = request.json.get('time')
            pro_EssayTit = request.json.get('pageTit')
            
            # 修改编辑后的文章数据入数据库
            pro_essay = ProjectEssay.query.filter(ProjectEssay.pro_essayNo == pro_id).first()
            # pro_essay.pro_type = pro_type
            pro_essay.pro_title = pro_title
            pro_essay.pro_content = pro_content
            pro_essay.pro_updateTime = pro_time
            pro_essay.pro_EssayTit = pro_EssayTit
            db.session.commit()
            # 商议：返回一个参数使得判断成功
            pro_essay = ProjectEssay.query.filter(
                ProjectEssay.pro_essayNo == pro_id).first()
            if pro_essay.pro_updateTime == pro_time:
                static = 1
                return jsonify({'static': static})
            else:
                static = 0
                return jsonify({'static': static}) 

# 文章页面
@app.route('/getAllPage')
def show_essay():
    title = request.args.get('title').strip('\'')
    # author = request.args.get('author')
    time = request.args.get('time').strip('\'')
    page = request.args.get('page')
    Now_time = datetime.date.today()
    # import pdb
    # pdb.set_trace()
    if time == '一个月之前':
        # 将来可能需要修改，此处只改到10年前
        time = Now_time + datetime.timedelta(days=-30)
        time2 = Now_time + datetime.timedelta(days=-3650)
        essay_sum = ProjectEssay.query.order_by(ProjectEssay.pro_updateTime.asc()).filter(and_(ProjectEssay.pro_updateTime.between(time2, time), ProjectEssay.pro_title.like('%'+title+'%'))).all()
        allpage = math.ceil((float(len(essay_sum))/8))
        totalAll = len(essay_sum)
        turn_to_json = []   
        for i in range(0, 8):
            try:
                one_json = essay_sum[8*(int(page)-1)+i].all_proEssay_to_json()
                turn_to_json.append(one_json)
            except Exception:
                print('')
        return jsonify({'total': allpage, 'pageAll': turn_to_json, 'totalAll': totalAll})
    # 获取文章，json化，传到前端
    # essay_sum = Essay.query.filter(and_(title=title, author=author, time=time)
    # .order_by(Essay.time.asc()).paginate(page=page, per_page=8, error_out=False)).all()
    # essay_sum = Essay.query.order_by(Essay.updatetime.asc()).filter(and_(
       # Essay.title == title, Essay.author == author, Essay.updatetime == time)).all()
    elif time == '昨天':
        time = Now_time + datetime.timedelta(days=-1)
    elif time == '最近三天':
        time = Now_time + datetime.timedelta(days=-3)
    elif time == '一周内':
        time = Now_time + datetime.timedelta(days=-7)
    elif time == '一个月内':
        time = Now_time + datetime.timedelta(days=-30)
    essay_sum = ProjectEssay.query.order_by(ProjectEssay.pro_updateTime.asc()).filter(and_(
            ProjectEssay.pro_updateTime.between(time, Now_time), ProjectEssay.pro_title.like('%'+title+'%'))).all()
    # essay_for_page = Project.query.filter(
    #  and_(title=title, author=author, time=time).all())
    allpage = math.ceil((float(len(essay_sum))/8))
    totalAll = len(essay_sum)
    turn_to_json = []   
    for i in range(0, 8):
        try:
            one_json = essay_sum[8*(int(page)-1)+i].all_proEssay_to_json()
            turn_to_json.append(one_json)
        except Exception:
            print('')
    # for i in range(len(essay_sum)):
        # one_json = essay_sum[i].ShowEssay_to_json()
        # turn_to_json.append(one_json)
    return jsonify({'total': allpage, 'pageAll': turn_to_json, 'totalAll':totalAll})

# 编辑/添加文章
@app.route('/getCommonPage', methods=['GET', 'POST'])
def edit_essay():
    if request.method == 'GET':
        essayId = request.args.get('id')
        now_essay = Essay.query.filter(Essay.essayNo == essayId).first()
        title = now_essay.title
        content = now_essay.content
        return request.jsonify({'id': essayId, 'title': title, 'content': content})
    elif request.method == 'POST':
        essayId = request.json.get['id']
        title = request.json.get['title']
        content = request.josn.get['content']
        time = request.json.get['time']
        now_essay = Essay.query.filter(Essay.essayNo == essayId).first()
        if now_essay:
            now_essay.title = title
            now_essay.content = content
            now_essay.updatetime = time
            db.session.commit()
            static = 1
            return request.jsonify({'static': static})
        else:
            static = 0
            return request.jsonify({'static': static})


# 显示实验室成员
@app.route('/getMember')
def show_hubMember():
    # pdb.set_trace()
    name = request.args.get('name').strip('\'')
    college = request.args.get('college').strip('\'')
    direction = request.args.get('direction').strip('\'')
    page = request.args.get('page')
    # hubMember = Member.query.filter(and_(memberName=name, academy=college, direction=direction)
                                   # .order_by(Member.memberNo.asc()).paginate(page=page, per_page=8, error_out=False)).all()
    # Member_for_count = Member.query.filter(
      # and_(memberName=name, academy=college, direction=direction)).all()
    hubMember = Member.query.order_by(Member.memberNo.asc()).filter(and_(Member.memberName.like('%'+name+'%'), Member.academy.like('%'+college+'%'), Member.direction.like('%'+direction+'%'))).all()
    total_page = math.ceil(float(len(hubMember)/8))
    totalAll = len(hubMember)
    turn_to_json = []
    for i in range(0, 8):
            try:
                one_json = hubMember[8*(int(page)-1)+i].show_all_member_to_json()
                turn_to_json.append(one_json)
            except Exception:
                print('')
    return jsonify({'total': total_page, 'member': turn_to_json, 'totalAll': totalAll})


# 成员编辑
@app.route('/editMember')
def edit_member():
    memberId = request.args.get('id')
    show_member = Member.query.filter(Member.memberNo == memberId).first()
    member_json = show_member.show_one_member_to_json()
    return jsonify(member_json)


# 添加成员
@app.route('/addMember', methods=['POST'])
def addMember():
    #pdb.set_trace()
    name = request.json.get('name')
    college = request.json.get('college')
    direction = request.json.get('direction')
    language = request.json.get('language')
    software = request.json.get('software')
    id1 = request.json.get('id')
    languageAll = ''
    softwareAll = ''
    for i in range(len(language)):
        languageAll = languageAll + language[i] + ','
    for j in range(len(software)):
        softwareAll = softwareAll + software[j] + ','
    experience = request.json.get('experience')
    if id1 is None:
        member = Member(memberName=name, academy=college, direction=direction,
                        language=languageAll, software=softwareAll, experience=experience)
        db.session.add(member)
        db.session.commit()
        show_member = Member.query.filter(Member.memberName == name).first()
        # show_member = Member.query.filter(Member.memberNo == id).first()
        if show_member:
            static = 1
            return jsonify({'static': static})
        else:
            static = 0
            return jsonify({'static': static})
    else:
        # member = session.query(Member).filter(Member.memberNo == id1).one()
        # pdb.set_trace()
        member = Member.query.filter(Member.memberNo == id1).first()
        member.memberName = name
        member.academy = college
        member.direction = direction
        member.language = languageAll
        member.software = softwareAll
        member.experience = experience
        db.session.commit()
        static = 1
        return jsonify({'static': static})
