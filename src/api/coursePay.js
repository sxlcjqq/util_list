import request from '@/utils/request'

// 创建订单  product_id sku_id
export function createOrder(params){
    return request({
        url: `order/create`,
        method: 'GET',
        params
      })
}
// 获取第三方支付结果没有获得确切结果时，获取订单状态的接口  order_no
export function getOrderStatu(params){
    return request({
        url: `order/detail/`,
        method: 'POST',
        data:params
      })
}

// 获取支付宝链接  order_no return_url
export function getAlipayUrl(params){
    return request({
        url: `order/pay/alipay/`,
        method: 'POST',
        data:params
      })
}
// 获取微信支付链接  order_no
export function getWechatUrl(params){
    return request({
        url: `order/pay/weixin/`,
        method: 'POST',
        data:params
      })
}
// 获取第三方支付结果  order_no
export function getPayResult(params){
    return request({
        url: `order/pay/result/`,
        method: 'POST',
        data:params
      })
}
// 提交订单 order_id
export function submitOrder(params){
    return request({
        url: `order/apply/`,
        method: 'GET',
        params,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
}
// 获取订单是否超时 order_id
export function getOrderTimeout(params){
    return request({
        url: `order/status/`,
        method: 'GET',
        params
      })
}