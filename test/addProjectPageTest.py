# -*- coding:utf-8 -*-
import requests
import json


host = "httP://119.23.233.196:1234"
endpoint = "/addProjectPage"

url = ''.join([host, endpoint])
data = {
    'type': 'type',
    'id': 32,
    'title': 'ddd',
    'content': 'haodao',
    'time': '2018-12-3',
    'pageTit': 'jalfd'
}

r = requests.post(url, json=data)
response = r.json()
print(response)