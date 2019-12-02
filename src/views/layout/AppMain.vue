<template>
  <div class="app-main_">
    <div class="con">
    <div class="leftlist">
      <div class="btn" v-for="x in btnlist" :key="x.id">
        <el-button type="danger" :plain="(checkBtnId==x.id?false:true)" @click="chooseBtn(x)">{{x.name}}</el-button>
      </div>
    </div>
      <router-view class="rightCon"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data(){
    return {
      btnlist:[{
        id:'1',
        name:'fjzf的【直播】',
        path:'liveqq',
        query:{
          name:'cctv12'
        }
      },{
        id:'2',
        name:'fjzf的【播放器】',
        path:'videoqq',
        query:{
          url:'./static/video/b786c0807b946929-20.mp4'
        }
      },{
        id:'3',
        name:'fjzf的【散花】',
        path:'submitGif',
        query:{}
      },{
        id:'4',
        name:'fjzf的【圆环进度】',
        path:'circleProgress',
        query:{}
      },{
        id:'5',
        name:'fjzf的【rem】',
        path:'transRem',
        query:{}
      },{
        id:'6',
        name:'css&html',
        path:'transHtml',
        query:{}
      },{
        id:'7',
        name:'fjzf的【audio】',
        path:'audio',
        query:{}
      }],
      checkBtnId:0
    }
  },
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  },
  methods:{
    chooseBtn(data){
      this.checkBtnId = data.id;
      this.$router.push({path:data.path,query:data.query});
    }
  }
}
</script>

<style scoped  lang="scss">
  .app-main_{
    height: calc(100vh - 88px);
    .con{
    position: relative;
      width:1160px;
      margin: 0 auto;
    }
  }
  .leftlist{
    position: absolute;
    left:0;
    top:0;
    padding:10px;
    overflow: auto;
    .btn{
      padding:5px;
    }
  }
  .rightCon{
    padding-left:250px;
    padding-top:15px;
    width: 100%;
    height: 100%;;
  }
</style>
