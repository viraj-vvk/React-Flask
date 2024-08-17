from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class Field(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project = db.Column(db.String)
    link = db.Column(db.String)
    website = db.Column(db.String)
    bid = db.Column(db.String)
    date = db.Column(db.String)
    man_days = db.Column(db.String)
    result = db.Column(db.String)
    lead = db.Column(db.String)
    type_ = db.Column(db.String)
    flag = db.Column(db.Integer, default=0)

    def field_info(self):
        return {
            'id': self.id,
            'project': self.project,
            'link': self.link,
            'lead': self.lead,
            'website': self.website,
            'bid': self.bid,
            'date': self.date,
            'man_days': self.man_days,
            'result': self.result,
            'type_': self.type_,
            'flag': self.flag
        }


@app.route('/')
def hello():
    return "Hello World"


@app.route('/fields', methods=['GET'])
def getFields():
    return jsonify(
        [Field.field_info(field) for field in Field.query.filter_by(flag=0)])


@app.route('/fields/all', methods=['GET'])
def getAllFields():
    return jsonify([Field.field_info(field) for field in Field.query.all()])


@app.route('/fields/<int:id>', methods=['GET'])
def getField(id):
    field = Field.field_info(Field.query.filter_by(id=id).first())
    return field


@app.route('/fields', methods=['POST'])
def addField():
    data = request.get_json()
    new_field = Field(project=data['project'],
                      link=data['link'],
                      website=data['website'],
                      bid=data['bid'],
                      date=data['date'],
                      man_days=data['man_days'],
                      result=data['result'],
                      lead=data['lead'],
                      type_=data['type_'])
    db.session.add(new_field)
    db.session.commit()
    field = Field.field_info(Field.query.all()[-1])
    return field


@app.route('/fields/<int:id>', methods=['PUT'])
def updateField(id):
    data = request.get_json()
    field = Field.query.filter_by(id=id).first()
    field.project = data['project']
    field.link = data['link']
    field.website = data['website']
    field.bid = data['bid']
    field.date = data['date']
    field.man_days = data['man_days']
    field.result = data['result']
    field.lead = data['lead']
    field.type_ = data['type_']
    db.session.commit()
    return "Updated Successfully", 201


@app.route('/fields/<int:id>', methods=['DELETE'])
def deleteField(id):
    Field.query.filter_by(id=id).first().flag = 1
    db.session.commit()
    return "Data Deleted", 201


if __name__ == "__main__":
    app.run(debug=True)
