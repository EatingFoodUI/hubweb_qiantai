# -*- coding:utf-8 -*-
import requests
import json


host = "httP://119.23.233.196:1234/getMember"
payload = {'name':'', 'college':'', 'direction':'', 'page':'1'}
r = requests.get(host, params=payload)

response = r.json()
print(response)