from flask import Flask,request,jsonify,json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
import datetime
from flask_cors import CORS
from flask_jwt_extended import (create_access_token,create_refresh_token,jwt_required,decode_token)
app = Flask(__name__)
from bson.json_util import dumps
app.config["MONGO_URI"] = "mongodb://localhost:27017/e-kart"
app.config["JWT_SECRET_KEY"] = "secret"
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

@app.route("/customer_register" ,methods = ["POST"])
def customer_register():
    data ={}
    data["name"]= request.json["name"]
    data["email"]= request.json["email"]
    data["phone_number"]= request.json["phone_number"]
    data["address"]= request.json["address"]
    data["password"] = bcrypt.generate_password_hash(request.get_json()["password"]).decode("utf-8")
    data["location"] = request.json["location"]
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
    data["company_address"]= request.json["company_address"]
    data["location"] = request.json["location"]
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
                # expires = datetime.timedelta(days=1)
                token = create_access_token(identity = response["email"] )
                refresh_token = create_refresh_token(identity=response["email"] )
                result = jsonify({"error":"false","token":token,"type":person})
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})

    elif person == "vendor":
        response = mongo.db.vendor.find_one({"email":email})
        if response:
            if bcrypt.check_password_hash(response["password"],password):
                token = create_access_token(identity = response["email"] )
                refresh_token = create_refresh_token(identity=response["email"] )
                result = jsonify({"error":"false","token":token,"type":person})
                # decode = decode_token(token)
                # print(str(decode["identity"]))
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})

    elif person == "admin":
        response = mongo.db.admin.find_one({"email":email})
        if response:
            if bcrypt.check_password_hash(response["password"],password):
                token = create_access_token(identity = response["email"] )
                result = jsonify({"error":"false","token":token,"type":person})
            else:
                result = jsonify({"error":"true","message":"Invalid login credentials"})
        else:
            result = jsonify({"error":"true","message":"Invalid login credentials"})
    
    return result

# @app.route("/admin_register")
# def admin_reg():
#     data = {}
#     data["email"]="b.ajpaudel@gmail.com"
#     data["password"] = bcrypt.generate_password_hash("ajpaudel").decode("utf-8")
#     mongo.db.admin.insert(data)
#     return dumps("Added")

@app.route("/add_products",methods=["POST"])
def add_products():
    decode = decode_token(request.json["token"])
    # print(decode)
    vendor_email = str(decode["identity"])
    print(vendor_email)
    products={}
    products["brand_name"] = request.json["brand_name"]
    products["vendor_email"]= vendor_email
    products["model_name"] = request.json["model_name"]
    products["color"] = request.json["color"]
    products["ram"] = request.json["ram"]
    products["internal_storage"] = request.json["internal_storage"]
    products["primary_camera"] = request.json["primary_camera"]
    products["secondary_camera"] = request.json["secondary_camera"]
    products["battery"] = request.json["battery"]
    products["processor"] = request.json["processor"]
    products["operating_system"] = request.json["operating_system"]
    products["warranty"] = request.json["warranty"]
    products["hybrid_sim_slot"] = request.json["hybrid_sim_slot"]
    products["bluetooth"] = request.json["bluetooth"]
    products["no_of_sec_camera"] = request.json["no_of_sec_camera"]
    products["no_of_primary_camera"] = request.json["no_of_primary_camera"]
    products["available_quantity"] = request.json["available_quantity"]
    products["price"] = request.json["price"]
    products["image2"] = request.json["image2"]
    #  offer price in percentage
    products["offer_price"] = request.json["offer_price"] 
    products["discounted_price"] = request.json["discounted_price"]
    mongo.db.products.insert(products)
    count = mongo.db.products.find({"vendor_email":vendor_email}).count()
    print(count)
    last_value=mongo.db.products.find({"vendor_email":vendor_email}).skip(count-1)
    # print(dumps(last_value))
    if last_value != None:
        last_product_id=""
        for i in last_value:
            last_product_id = i["_id"]
        mongo.db.vendor.update_one({"email":vendor_email},{"$push":{"products":last_product_id}})
        return dumps({"message":"Added successfully"})

        
@app.route("/view_products_vendor/<string:token>")
def view_products(token):
    decode = decode_token(token)
    vendor_email = str(decode["identity"])
    vendor = mongo.db.vendor.find({"email":vendor_email})
    print(vendor_email)
    all_products=[]
    for i in vendor:
        products = i["products"]
        for j in products:
            # print(dumps(j))
            all_products.append(mongo.db.products.find_one({"_id":j}))
    # print(all_products)
    return dumps(all_products)

@app.route("/view_products_admin/<string:token>")
def view_products_admin(token):
    decode = decode_token(token)
    admin_email = str(decode["identity"])
    admin = mongo.db.admin.find({"email":admin_email})
    if admin != None:
        data = mongo.db.products.find({})
        return dumps(data)

@app.route("/orders/<string:token>",methods = ["POST"])
def orders(token):
    orders={}
    decode = decode_token(token)
    user_email = str(decode["identity"])
    orders["order_status"]= "current"
    orders["products"] = request.json["products"]
    orders["user_email"] = user_email
    # send the products in array of object with product_id,quantity,price,discounted_price,offer_price,ram,internal
    mongo.db.orders.insert(orders)
    count = mongo.db.orders.find({"user_email":user_email}).count()
    last_order = mongo.db.orders.find({"user_email":user_email}).skip(count-1)
    last_order_id = ""
    all_products=[]
    for o in last_order:
        last_order_id = o["_id"]
        products = o["products"]
        # print(o)
        for j in products:
            id = ObjectId(j["product_id"])
            # print(id)
            all_products.append(mongo.db.products.find({"_id":id}))
            # all_products.append(j["product_id"])
    for i in all_products:
        for k in i:
            vendor_email = k["vendor_email"]
            print(dumps(k["vendor_email"]))
            mongo.db.vendor.update_one({"email":vendor_email},{"$push":{"orders":last_order_id}})
    mongo.db.customer.update_one({"email":user_email},{"$push":{"orders":last_order_id}})
    return dumps("Added successfully")

@app.route("/admin_current_orders")
def admin_current_orders():
    data=mongo.db.orders.find({"order_status":"current"})
    return dumps(data)

@app.route("/admin_past_orders")
def admin_past_orders():
    data=mongo.db.orders.find({"order_status":"past"})
    return dumps(data)

    
@app.route("/vendor_current_orders/<string:token>")
def vendor_current_orders(token):
    decode = decode_token(token)
    vendor_email = str(decode["identity"])
    vendor = mongo.db.vendor.find({"email":vendor_email})
    vendor_orders=[]
    for i in vendor:
        orders = i["orders"]
        for j in orders:
            vendor_orders.append(j) 
    # print(vendor)
    all_orders = mongo.db.orders.find({})
    # print(dumps(all_orders))
    # print(dumps(all_products))  
    return dumps({"vendor_orders":vendor_orders ,"all_orders":all_orders })
    # iam sending vendors_all_orders and all orders which are available in orders and in frontend need to filter and display

@app.route("/vendor_past_orders/<string:token>")
def vendor_past_orders(token):
    decode = decode_token(token)
    vendor_email = str(decode["identity"])
    vendor = mongo.db.vendor.find({"email":vendor_email})
    vendor_orders=[]
    for i in vendor:
        orders = i["orders"]
        for j in orders:
            vendor_orders.append(j) 
    # print(vendor)
    all_orders = mongo.db.orders.find({})
    return dumps({"vendor_orders":vendor_orders ,"all_orders":all_orders })
    # iam sending vendors_all_orders and all orders which are available in orders and in frontend need to filter and display

# @pp.route("/brands/<string:brand>/<string:location>")
# def brands(brand,location):
#     data = mongo.db.products.find({"brand_name":brand},{"location":location})
#     return dumps(data)

@app.route("/decode_token",methods=["POST"])
def decode_tokens():
    token = request.json["token"]
    print(token)
    decode = decode_token(request.json["token"])
    print(decode)
    vendor_email = str(decode["identity"])
    return dumps(vendor_email)
