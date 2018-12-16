# -*- coding:utf-8 -*-
import requests
import json

# host = "httP://119.23.233.196:1234"
host = "http://0.0.0.0:1235"
endpoint = "/addMember"

url = ''.join([host, endpoint])
data = {
    "name": "alipapa",
    "id": 32,
    "college": "d",
    "direction": "hao",
    "language": ["cc","55","88"],
    "software": ["55","66","22"]
}

r = requests.post(url, json=data)
response = r.json()
print(response)

s = '{"name": "alipapa","id": 32,"college": "d","direction": "hao","language": ["cc","55","88"],"software": ["55","66","22"]}'