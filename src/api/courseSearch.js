import request from '@/utils/request'

// 获取课程列表；page
export function getCoursesByParam(params,page){
    return request({
        url: `get_product_list/?page=${page}`,
        method: 'POST',
        data: params
      })
}
// 获取分类列表
export function getCoursesType(params){
    return request({
        url: `get_classify_list/`,
        method: 'GET',
        params
      })
}