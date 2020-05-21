# app.py

import json
import boto3
import time
import os
import uuid

from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

dynamodb = boto3.resource('dynamodb')


@app.route("/test")
def hello():
    return "You must have authenticated correctly."


@app.route("/current")
def getCurrent():
    timestamp = str(time.time())
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    items = table.scan(Limit=1)['Items']

    if(not items):
        return json.dumps({"message": "counter not started yet.visit /next to generate first number."}),404
    else:
        item = items[0]

    return json.dumps({"current": "{}".format(item['ctr'])})


@app.route('/next')
def getNext():
    timestamp = str(time.time())
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    items = table.scan(Limit=1)['Items']
    ctr = 1
    if(not items):
        item = {
            'id': str(uuid.uuid1()),
            'ctr': ctr,
            'createdAt': timestamp,
            'updatedAt': timestamp,
        }
        table.put_item(Item=item)
    else:
        item = items[0]
        ctr = item['ctr']+1
        result = table.update_item(
            Key={
                'id': item['id']},
            ExpressionAttributeNames={
                '#ctr': 'ctr',
            },
            ExpressionAttributeValues={
                ':ctr': ctr,
                ':updatedAt': timestamp,
            },
            UpdateExpression='SET #ctr = :ctr, '
            'updatedAt = :updatedAt',
            ReturnValues='ALL_NEW',
        )

    return json.dumps({"next": "{}".format(ctr)})


@app.route('/reset',methods=['POST'])
def restCounter():
    timestamp = str(time.time())
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    ctr = request.json.get('current')

    if(not ctr or type(ctr) != int):
        return "Not a valid value for current", 404
    items = table.scan(Limit=1)['Items']

    if(not items):
        item = {
            'id': str(uuid.uuid1()),
            'ctr': ctr,
            'createdAt': timestamp,
            'updatedAt': timestamp,
        }
        table.put_item(Item=item)
    else:
        item = items[0]
        result = table.update_item(
            Key={
                'id': item['id']},
            ExpressionAttributeNames={
                '#ctr': 'ctr',
            },
            ExpressionAttributeValues={
                ':ctr': ctr,
                ':updatedAt': timestamp,
            },
            UpdateExpression='SET #ctr = :ctr, '
            'updatedAt = :updatedAt',
            ReturnValues='ALL_NEW',
        )

    return json.dumps({"current": "{}".format(ctr)})
