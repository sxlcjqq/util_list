<template>
  <div class="courseAction_lesson_left">
    <div class="tab">
        <span class="text" :class="{'active':!tabIndex}" @click="tabIndex = 0">圆环-css</span>
        <span class="text" :class="{'active':tabIndex==1}" @click="tabIndex = 1">扇形-css</span>
        <span class="text" :class="{'active':tabIndex==2}" @click="tabIndex = 2">不闭合圆环-canvas</span>
        <i class="line" :class="tabLineClass"></i>
    </div>
    <div class="circlecon">
        <div class="block" v-if="tabIndex==0">
            <span class="demonstration">自定义值：{{total_score}}</span>
            <el-slider v-model="total_score"></el-slider>
        </div>
        <div class="progress_circle" v-if="tabIndex==0">
            <div class="circle">
                <span class="left" :class="{'top':total_score>50}" :style="{'transform': 'rotate('+(total_score>50?180:total_score*18/5)+'deg)'}"></span>
                <span class="right" :class="{'top':total_score>50}"  :style="{'transform': 'rotate('+(total_score<50?0:(total_score-50)*18/5)+'deg)'}"></span>
                <span class="rightbg" ></span>
                <span class="leftbg" ></span>
            </div>
            <div class="textcon">
            <p class="title">得分</p>
            <p class="num">{{total_score}}</p>
            </div>
        </div>

        <div class="block" v-if="tabIndex==1">
            <span class="demonstration">自定义值：{{progress}}</span>
            <el-slider v-model="progress"></el-slider>
        </div>
        <div class="shanxing" v-if="tabIndex==1">
            <span class="left" :class="{'top':progress>50}" :style="{'transform': 'rotate('+(progress>50?180:progress*18/5)+'deg)'}"></span>
            <span class="right" :class="{'top':progress>50}"  :style="{'transform': 'rotate('+(progress<50?0:(progress-50)*18/5)+'deg)'}"></span>
            <span class="rightbg" ></span>
            <span class="leftbg" ></span>
        </div>


        <div class="block" v-if="tabIndex==2">
            <span class="demonstration">自定义值：{{progress_canvas}}</span>
            <el-slider v-model="progress_canvas"></el-slider>
        </div>
        <circleProgress v-if="tabIndex==2" :percent="progress_canvas"/>
    </div>
  </div>
</template>

<script>
import circleProgress from "@/components/circleProgress";
export default {
  name: "courseAction_lesson_left",
  data() {
    return {
      total_score:50,
      progress:50,
      progress_canvas:50,
      tabIndex:0,
      tabLineClass:''
    };
  },
  components: { circleProgress },
  created() {},
  mounted() {},
  watch: {
    tabIndex(n, o) {
      switch(n){
        case 0:
          this.tabLineClass = "lefttrans";
          window.setTimeout(() => {
            this.tabLineClass = "";
          }, 100);
          break;
        case 1:
          this.tabLineClass = "righttrans";
          window.setTimeout(() => {
            this.tabLineClass = "right";
          }, 100);
          break;
        case 2:
          this.tabLineClass = "righttrans";
          window.setTimeout(() => {
            this.tabLineClass = "right2";
          }, 100);
          break;
      }
    }
  },
  methods: {
  },
  filters: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import "@/styles/jqqCommon.scss";
.courseAction_lesson_left {
  box-shadow: $commonShadow;
  font-weight: $font-normal;

    .progress_circle {
      text-align: center;
      display: block;
      margin: auto;
      border-radius: 50%;
      border: 4px solid transparent;
      position: relative;
      padding-left: 75px;
      .circle {
        position: absolute;
        top: -5px;
        left: 70px;
        width: 80px;
        height: 80px;
        .left,
        .leftbg,
        .right,
        .rightbg {
          width: 40px;
          height: 80px;
          position: absolute;
        }
        .leftbg {
          bottom: 0;
          left: 0;
          background: url(../../assets/courseAction/oval_bg_left.png) #fcfcfc
            no-repeat bottom center;
          background-size: contain;
          z-index: 7;
          .top {
            z-index: 4;
          }
        }
        .rightbg {
          bottom: 0;
          right: 0;
          background: url(../../assets/courseAction/oval_bg_right.png) #fcfcfc
            no-repeat bottom center;
          background-size: contain;
          z-index: 3;
        }
        .left {
          bottom: 0;
          left: 0;
          background: url(../../assets/courseAction/oval_left.png) no-repeat
            bottom center;
          background-size: contain;
          transform-origin: 100% 50%;
          transition-delay: 0.3s;
          transition: transform 0.3s;
          z-index: 5;
        }
        .right {
          right: 0;
          top: 0;
          background: url(../../assets/courseAction/oval_right.png) no-repeat
            top center;
          background-size: contain;
          transform-origin: 0% 50%;
          //   transform: rotate(10deg);
          transition: transform 0.3s;
          z-index: 2;
          &.top {
            z-index: 8;
          }
        }
      }
      .textcon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        padding-top: 15px;
        position: relative;

        z-index: 99;
        .title {
          font-size: 12px;
          color: #5096f5;
          letter-spacing: 0.42px;
          margin: 0;
          line-height: 12px;
        }
        .num {
          font-size: 30px;
          color: #5096f5;
          letter-spacing: 0.06px;
          text-shadow: 0 2px 1px rgba(76, 138, 254, 0.19);
          margin: 0;
          line-height: 35px;
        }
      }
    }
  .tab {
    font-size: 0;
    padding: 8px 27px;
    position: relative;
    border-bottom: 1px solid #ebebeb;
    margin: 25px 20px 0;
    .line {
      position: absolute;
      transition: width 0.3s;
      left: 64px;
      bottom: 0;
      height: 3px;
      border-radius: 2px;
      background: #333333;
      width: 28px;
      transition: all 0.2s;
      &.right {
        width: 28px;
        left: 204px;
        transition: all 0.1s;
      }
      &.right2 {
        width: 28px;
        left: 345px;
        transition: all 0.1s;
      }
      &.righttrans {
        width: 136px;
        transition: width 0.1s;
      }
      &.lefttrans {
        width: 136px;
        left: 64px;
        transition: width 0.2s, left 0.2s;
      }
    }
    .text {
      font-size: 16px;
      color: #666666;
      letter-spacing: 0.5px;
      text-align: center;
      margin: 0 35px;
      cursor: pointer;
      &.active {
        color: #333333;
      }
    }
  }
  .shanxing {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border-color: #e8e8e8;
    background-color: #e8e8e8;
    .left,
    .leftbg,
    .right,
    .rightbg {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 0;
    }
    .leftbg {
      z-index: 7;
      clip: rect(0, 35px, 70px, 0);
      background-color: #e8e8e8;
      .top {
        z-index: 4;
      }
    }
    .rightbg {
      z-index: 3;
      clip: rect(0px, 70px, 70px, 35px);
      background-color: #e8e8e8;
    }
    .left {
      clip: rect(0, 35px, 70px, 0);
      background-color: #4182fa;
      transition-delay: 0.3s;
      transition: transform 0.3s;
      z-index: 5;
    }
    .right {
      clip: rect(0px, 70px, 70px, 35px);
      background-color: #4182fa;
      transition: transform 0.3s;
      z-index: 2;
      &.top {
        z-index: 8;
      }
    }
  }
  .circlecon{
      padding:50px;
      .block{
          width: 300px;
          margin-bottom:20px;
      }
  }
}
</style>
