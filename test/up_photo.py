# -*- coding:utf-8 -*-
import requests
import json

# url = 'httP://119.23.233.196:1234/addImg'
# files = {'txt_photo': ('201811052349395be066931102d.JPG', open('/home/liyongli/图片/201811052349395be066931102d.JPG','rb'), 'image/jpg')}
# data = {
  #  'photo_name': 11
# }


url = 'httP://119.23.233.196:1234/addImg'
files = {'filename': '5' ,'images': open('/home/liyongli/图片/201811052349395be066931102.JPG', 'rb')}
headers = {
    'Api-Key':
    'InhpeWFuZzA4MDdJBtx4AWlPpI_Oxx1Ki8',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36'
    }
data = {
    'photo_name': 11
}
# r = requests.post(url, files=multiple_files, headers=headers)
r = requests.post(url, data=data, files=files, headers=headers)
print(r.text)


# r = requests.post(url, json=data, files=files)

# print(r.json())