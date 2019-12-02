import request from '@/utils/request'

// 获取目录列表 sku_id
export function getLeafList(params) {
    return request({
        url: `learn/menu/`,
        method: 'GET',
        params
    })
}
// 获取考核目录分类及全部列表 sku_id
export function getExamList(params) {
    return request({
        url: `learn/exam/`,
        method: 'GET',
        params
    })
}
// 获取考核目录列表by考核目录 etag_id sku_id
export function getExamListByid(params) {
    return request({
        url: `learn/search_exam/`,
        method: 'GET',
        params
    })
}
// 获取leaf详情
export function getDetailByLeafId(params, leaf_id) {
    return request({
        url: `learn/leaf_info/${leaf_id}/`,
        method: 'GET',
        params
    })
}
// 获取视频byccid
export function getVideoByCcid(params, ccid) {
    return request({
        url: `service/video2ccsource/${ccid}/`,
        method: 'GET',
        params
    })
}
// 获取讨论帖by sku_id  leaf_id
export function getDiscussBySkuid(params) {
    return request({
        url: `discussion/get_discussion_list/`,
        method: 'POST',
        data: params
    })
}
// 获取全部习题
export function getAllExercise(params,exercise_id) {
    return request({
        url: `exercise/get_exercise_list/${exercise_id}/`,
        method: 'GET',
        data: params
    })
}
// 提交单个习题
export function pushSingleExercise(params) {
    return request({
        url: `exercise/problem_apply/`,
        method: 'POST',
        data: params
    })
}
// 获取答题卡   leaf_id
export function getAnswerSheet(params) {
    return request({
        url: `exercise/get_answer_sheet/`,
        method: 'GET',
        params
    })
}
// 提交答题卡   leaf_id
export function setAnswerSheet(params) {
    return request({
        url: `exercise/answer_sheet_apply/`,
        method: 'POST',
        data: params
    })
}
// 获取视频字幕
export function getVideoSrt(video_id) {
    return request({
        url: `learn/video/subtitle/${video_id}/`,
        method: 'GET',
        data: {}
    })
}
//获取产品详情
export function getCourseDetail(product_id){
    return request({
        url:`product/get_product_basic_info/${product_id}/`,
        method:'GET',
        data:{}
    })
}
//获取视频进度by ccid array
export function getVideoCurrentTimeByCcid(params){
    return request({
        url:`service/video/get_process/`,
        method:'POST',
        data:params
    })
}
//上传视频进度
export function setVideoCurrentTime(params){
    return request({
        url:`service/video/apply_process/`,
        method:'POST',
        data:params
    })
}
//我已看完--leaf_id
export function alreadyFinishByLeafid(params){
    return request({
        url:`learn/user_article_finish/`,
        method:'GET',
        params
    })
}
//获取用户上次浏览的leaf
export function getLastLeaf(params){
    return request({
        url:`learn/get_last_leaf/`,
        method:'GET',
        params
    })
}
