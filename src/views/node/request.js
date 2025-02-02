const chalk = require("chalk")
const http = require('http')

let result = {};
http.get('http://www.lc.gov.cn/IGI/nbhd/openGovmsgbox.do?siteId=72&appId=32&method=listGovmsgboxs&pageIndex=1&pageSize=10&orderBy=replyTime_desc', res => {
    let list = [];
    res.on('data', chunk => {
        list.push(chunk);
    });
    res.on('end', () => {
        const { datas: {data} } = JSON.parse(Buffer.concat(list).toString());
        data.forEach(item => {
            result[item.METADATAID] = {
              content: item.CONTENT
            }
            http.get('http://www.lc.gov.cn/IGI/nbhd/openGovmsgbox.do?siteId=72&method=viewGovmsgbox&metadataId='+item.METADATAID, res => {
              let list = [];
              res.on('data', chunk => {
                  list.push(chunk);
              });
              res.on('end', () => {
                  const { datas: {REPLYS} } = JSON.parse(Buffer.concat(list).toString());
                  result[item.METADATAID].replys = REPLYS.map((item)=>item.REPLYCONTENT)
                  console.log(result[item.METADATAID])
              });
            }).on('error', err => {
              console.log('Error: ', err.message);
            });
        })
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});