<template>
  <div class="index">
    <!-- <p class="h1">创新教育 改变世界</p> -->
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  watch: {},
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import "@/styles/jqqCommon.scss";
.hide {
  display: none;
}
.index {
  font-weight: $font-normal;
  background: #ffffff;
}
.h1 {
  font-size: 65px;
  color: #999999;
  letter-spacing: 0;
  line-height: 65px;
  text-align: center;
  margin: 80px auto;
  font-weight: $font-light;
}
.search {
  text-align: left;
  padding: 0;
  width: 1081px;
  margin: auto;
  height: 76px;
  position: relative;
  .searchInput {
    font-size: 20px;
    color: #333333;
    line-height: 26px;
    padding: 24px 116px 24px 50px;
    display: block;
    width: 100%;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 4px;
  }
  .iconfont.searchicon {
    position: absolute;
    top: 23px;
    right: 45px;
    font-size: 25px;
    color: #666666;
  }
  .iconfont.clear {
    position: absolute;
    top: 23px;
    right: 45px;
    font-size: 25px;
    color: #9b9b9b;
    cursor: pointer;
  }
  .searchBtn {
    cursor: pointer;
    position: absolute;
    width: 116px;
    height: 76px;
    line-height: 76px;
    background: #1769fe;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    letter-spacing: 0.42px;
    border-radius: 0 4px 4px 0;
    right: 0;
    top: 0;
  }
  &:hover {
    .searchInput {
      border-color: #1769fe;
    }
  }
}
.h2 {
  font-size: 32px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin: 90px auto 30px;
  line-height: 32px;
  position: relative;
  width: $commonWidth;
  .more {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    float: right;
    cursor: pointer;
    i {
      display: inline-block;
      background: #666666;
      width: 20px;
      height: 4px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }
}
.course_type {
  margin-top: 130px;
  .bg {
    background: url("../../assets/index/type_bg.jpg") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 261px;
  }
  .content {
    width: $commonWidth;
    margin: 0 auto;
    border-radius: 4px;
    position: relative;
    top: -84px;
    padding: 35px 0 56px;
    background: #ffffff;
    text-align: center;
    .title {
      font-size: 32px;
      color: #333333;
      margin: 0;
      line-height: 45px;
    }
    .title2 {
      font-size: 20px;
      color: #333333;
      letter-spacing: 7.58px;
      line-height: 28px;
      margin-top: 6px;
      margin-bottom: 36px;
      font-weight: $font-light;
    }
  }
  .types {
    font-size: 0;
    & > div {
      width: 260px;
      height: 261px;
      margin-right: 40px;
      padding-top: 78px;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      border-radius: 4px;
      cursor: pointer;
      color: #ffffff;
      .shadow {
        position: absolute;
        z-index: 1;
        border-radius: 4px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(74, 144, 226, 0.64);
      }
      .iconfont {
        position: relative;
        z-index: 2;
        font-size: 63px;
        display: block;
      }
      .text {
        display: block;
        position: relative;
        z-index: 2;
        font-size: 20px;
        line-height: 28px;
        margin-top: 8px;
      }
      &:hover {
        color: #333333;
        .shadow {
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .type1 {
      background: url("../../assets/index/type_1.jpg") no-repeat;
      background-size: contain;
    }
    .type2 {
      background: url("../../assets/index/type_2.jpg") no-repeat;
      background-size: contain;
    }
    .type3 {
      background: url("../../assets/index/type_3.jpg") no-repeat;
      background-size: contain;
    }
    .type4 {
      margin-right: 0;
      background: url("../../assets/index/type_4.jpg") no-repeat;
      background-size: contain;
    }
  }
}
.mxBanner {
  width: $commonWidth;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: $commonWidth 330px;
  padding-top: 120px;
  position: relative;
  text-align: center;
  .iconfont {
    position: absolute;
    top: 155px;
    color: #ffffff;
    font-size: 21px;
    cursor: pointer;
  }
  .arrowLeft {
    left: 38px;
  }
  .arrowRight {
    right: 38px;
  }
  .mxLists {
    .mxListCon {
      white-space: nowrap;
      font-size: 0;
      height: 122px;
      .mx {
        display: inline-block;
        width: 167px;
        margin: 0;
        vertical-align: middle;

        cursor: pointer;
        .headimg {
          position: relative;
          width: 51px;
          height: 50px;
          border-radius: 50%;
          margin: auto;
          transition: all 0.2s;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            background: #ffffff;
            border-radius: 50%;
          }
        }
        .text {
          font-size: 14px;
          color: #ffffff;
          margin-top: 10px;
          transition: all 0.2s;
        }
        &.active {
          .headimg {
            width: 74px;
            height: 74px;
            .bg {
              display: none;
            }
          }
          .text {
            font-size: 20px;
            color: #ffffff;
            letter-spacing: 0;
            text-shadow: 0 2px 13px rgba(0, 0, 0, 0.32);
          }
        }
      }
    }
  }
  .classLists {
    margin: 34px 30px 0;
    font-size: 0;
    .course_instance {
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
      width: 530px;
      height: 116px;
      border-radius: 4px;
      font-size: 0;
      padding: 23px;
      background: #ffffff;
      cursor: pointer;
      img {
        display: inline-block;
        vertical-align: top;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .content {
        display: inline-block;
        vertical-align: top;
        width: 266px;
        text-align: left;
        .title {
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          line-height: 25px;
          margin: 7px 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .detail {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          color: #666666;
          line-height: 20px;
          margin: 10px 0 0;
          font-weight: $font-light;
        }
      }
      .toCourse {
        display: inline-block;
        vertical-align: top;
        border: 1px solid #1769fe;
        border-radius: 2px;
        font-size: 16px;
        color: #1769fe;
        line-height: 32px;
        width: 100px;
        margin-left: 20px;
        margin-top: 38px;
      }
      &:hover {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
        .toCourse {
          color: #ffffff;
          background: #1769fe;
        }
        .title {
          color: #1769fe;
          text-decoration: underline;
        }
      }
    }
  }
}
.friends {
  font-size: 0;
  margin-bottom: 102px;
  width: $commonWidth;
  margin: 0 auto 102px;
  .friend {
    display: inline-block;
    vertical-align: top;
    width: 84px;
    margin-right: 69px;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 80px;
      height: 80px;
      display: block;
      margin: auto;
      border-radius: 50%;
    }
    .text {
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      text-align: center;
      margin: 16px 0 0;
    }
  }
}
</style>
