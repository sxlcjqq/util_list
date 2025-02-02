//发系统通知
//定时器
const schedule = require('node-schedule');
const path = require('path');
// const open = require('open');
const notifier = require('node-notifier');

const image = path.join(__dirname, '../../assets/qwe.gif'); // 设置通知的图标文件
const sound = path.join(__dirname, '../../assets/zqdr.mp3'); // 设置通知的声音文件
console.log(image)
console.log(sound)
// 定义规则
let rule = new schedule.RecurrenceRule();
// rule.second = [0, 10, 20, 30, 40, 50]; // 每隔 10 秒执行一次 可使用 0/10 * * * * *


// 启动任务
function a(){
  let job = schedule.scheduleJob('20 46 * * * *', () => {
  // let job = schedule.scheduleJob(rule, () => {
    notifier.notify({
      type: 'info',
      title: '啦啦啦',
      subtitle: image,
      message: sound,
      icon: path.join(__dirname, '../../assets/qwe.gif'),
      contentImage: path.join(__dirname, '../../assets/3.png'),
      open: 'https://www.npmjs.com/package/node-notifier',
      sound: sound,
      timeout: false // 单位为秒
    });
    console.log('job--:' + new Date());
    // open("https://blog.csdn.net/sleepwalker_1992/article/details/83783234")
  });
}

function returnMillisecond(hour, minute, second){
  const now = new Date();
  const localTime = now.toLocaleString();
  console.log(localTime)
  return ((hour*60+Number(minute))*60+Number(second))*1000
}

const mintue = process.argv.slice(2)[0]
const second = process.argv.slice(2)[1]

setTimeout(()=>{
  notifier.notify({
    type: 'info',
    title: '啦啦啦',
    subtitle: image,
    message: sound,
    icon: path.join(__dirname, '../../assets/qwe.gif'),
    // contentImage: path.join(__dirname, '../../assets/1520242122239.gif'),
    contentImage: path.join(__dirname, '../../assets/3.png'),
    // open: 'https://www.npmjs.com/package/node-notifier',
    sound: sound,
    timeout: false // 单位为秒
  });
  console.log('job--:' + new Date());
}, returnMillisecond(0,mintue||0,second||0))
