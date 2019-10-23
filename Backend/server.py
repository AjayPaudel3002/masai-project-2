from flask import Flask,request,jsonify,json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token,jwt_required,decode_token)
app = Flask(__name__)
from bson.json_util import dumps
app.config["MONGO_URI"] = "mongodb://localhost:27017/e-kart"
app.config["JWT_SECRET_KEY"] = "secret"
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route("/customer_register" ,methods = ["POST"])
def customer_register():
    data ={}
    data["name"]= request.json["name"]
    data["email"]= request.json["email"]
    data["phone_number"]= request.json["phone_number"]
    data["address"]= request.json["address"]
    data["password"] = bcrypt.generate_password_hash(request.get_json()["password"]).decode("utf-8")
    is_available = mongo.db.customer.find({"email":request.json["email"]})
    if is_available != None:
        mongo.db.customer.insert(data)
        return dumps({"message":"added successfully"})
    else:
        return dumps({"message":"sorry"})
    
@app.route("/vendor_register" ,methods = ["POST"])
def vendor_register():
    data ={}
    data["name"]= request.json["name"]
    data["email"]= request.json["email"]
    data["phone_number"]= request.json["phone_number"]
    data["address"]= request.json["address"]
    data["password"] = bcrypt.generate_password_hash(request.get_json()["password"]).decode("utf-8")
    is_available = mongo.db.vendor.find({"email":request.json["email"]})
    if is_available != None:
        mongo.db.vendor.insert(data)
        return dumps({"message":"added successfully"})
    else:
        return dumps({"message":"sorry"})

@app.route("/login/<string:person>",methods = ["POST"])
def login(person):
    email = request.json['email']
    password = request.json['password']
    if person == "customer":
        response = mongo.db.customer.find_one({"email":email})
        if response:
            if bcrypt.check_password_hash(response["password"],password):
                token = create_access_token(identity = response["email"] )
                result = jsonify({"error":"false","token":token})
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})

    elif person == "vendor":
        response = mongo.db.admin.find_one({"email":email})
        if response:
            if bcrypt.check_password_hash(response["password"],password):
                token = create_access_token(identity = response["email"] )
                result = jsonify({"error":"false","token":token})
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})

    elif person == "admin":
        response = mongo.db.vendor.find_one({"email":email})
        if response:
            if bcrypt.check_password_hash(response["password"],password):
                token = create_access_token(identity = response["email"] )
                result = jsonify({"error":"false","token":token})
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})
    return result

# @app.route("/add_products/:<string:token>")
# def add_products():
#     data ={}
#     data["brand_name"]= request.json["name"]
#     data["email"]= request.json["email"]
#     data["phone_number"]= request.json["phone_number"]
#     data["address"]= request.json["address"]
