
var request = require('request');//加载此模块失败请使用在本目录下使用nmp i request控制台命令
 
var crypto = require('crypto');
 
var sendData = "重要通知: ";//你自己定义的关键字
let phone = {
  'e':'15201039531',
  'n':'18246196637',
  'q':'17610170919',
  'sg':'13366084891'
}
let name = {
  'e':'鹅鹅 ',
  'q':'鹅鹅 ',
  'n':'南南 ',
  'j':'俊俊 ',
  's':'sg '
}
let personKey = process.argv.slice(2)[0]
// let personKey = 'q'
// let personCon = '下班了'
let personCon = process.argv.slice(2)[1]
let content = `${sendData} ${personCon}`
let atMobiles = []
if(name[personKey]){
    content = `${sendData}${name[personKey]} @${phone[personKey]} ${personCon}`
    atMobiles = [phone[personKey]]
}
var secret = ""//签名，如果有的话
var url = "https://oapi.dingtalk.com/robot/send?access_token=834a55860f2f84fc46da7f16130ec444ba7d574563e4c14fac956afd4906cc70"//钉钉机器人的链接，当你创建是便会看到
var data = {
    "msgtype": "text", 
    "text": {
        "content": content//聊天内容，若群机器人设置了自定义关键字，则必须加上关键字
    }, 
    "at": {
        "atMobiles": atMobiles, 
        "isAtAll": false//是否@全体成员
    }
}
var time = Date.now();//当前时间
var stringToSign = time + "\n" + secret;
var base = crypto.createHmac('sha256', secret).update(stringToSign).digest('base64');
var sign = encodeURIComponent(base)//签名
url = url+`&timestamp=${time}&sign=${sign}`;
console.log(url)
 
request.post(//发送post
    url,
    { 
        json: data,
        encoding:"utf-8",
        headers:{
            'Content-Type': 'application/json'  
        }
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)//成功返回
        }
    }
);