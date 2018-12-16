# -*- coding:utf-8 -*-
import requests
import json


host = "httP://119.23.233.196:1234/getProject"
payload = {'name':'', 'time':'最近三天', 'page':'1'}
r = requests.get(host, params=payload)

response = r.json()
print(response)