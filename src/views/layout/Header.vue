<template>
  <div class="header_" :class="headerClass">
    <div class="headerCon">
      <img  class="header_logo" :src="logoImg" @click="$router.push('index')"/>
        <p class="className" v-if="ifCourseAction"><i></i>{{courseName}}</p>
      <div class="fr">
        <div class="tablist"  v-if="ifCourseAction"> 
          <p :class="{'active':courseAction==0}" @click="courseActionChange(0)">上课</p>
          <!-- <p :class="{'active':courseAction==1}" @click="courseActionChange(1)">课程讨论</p> -->
        </div>
        <div class="inputCon" v-if="isSearch">
          <input type="text" class="searchHeader" placeholder="请输入课程、学校" v-model="searchText">
          <i class="iconfont" @click="toCourseSearch">&#xe603;</i>
        </div>
        <p class="login">
          <span @click="loginCli">登录 </span>/
          <span @click="registerCli">注册</span>
        </p>
        <!-- <img class="header_userimg" :src="userImg"/> -->
      </div>
      </div>
    </div>
</template>
<script>
import bus from "../../store/eventBus";
import logo_b from "@/assets/logo.png";
import logo_w from "@/assets/logo_w.png";
import userImg from "@/assets/index/headimg.png";
export default {
  name: "header_",
  props: {
    headerType: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      userImg,
      searchText: "",
      // ifCourseAction:, //是否是上课页
      courseAction: 0, //0->上课，1->课程讨论.默认0
      courseName: "" //课程名称
    }
  },
  computed: {
    headerClass() {
      return this.headerType.split(" ")[0];
    },
    isSearch() {
      return this.headerType.split(" ")[1] === "search";
    },
    logoImg() {
      return this.headerClass === "blue" ? logo_w : logo_b;
    },
    ifCourseAction() {
      return this.headerType.indexOf("courseAction") > -1 ? true : false;
    }
    
  },
  created() {
    this.setCourseDetail();
    this.setCourseAction();
  },
  watch: {
    courseAction(n, o) {
      console.log(n);
    }
  },
  mounted() {},
  methods: {
    toCourseSearch(type) {
      this.$router.push({
        name: "courseSearch",
        params: { type: 1, key: this.searchText }
      });
    },
    setCourseDetail() {
      bus.$on("setCourseDetail", data => {
        this.courseName = data;
      });
    },
    setCourseAction() {
      bus.$on("setCourseAction", data => {
        this.courseAction = data;
      });
    },
    courseActionChange(type) {
      this.courseAction = type;
      if (type) {
        this.$router.push({
          name: "classDiscuss",
          query: this.$route.query
        });
      } else {
        this.$router.push({
          name: "courseAction",
          query: {
            product_id: this.$route.query.product_id,
            sku_id: this.$route.query.sku_id
          }
        });
      }
    },
//  登录点击
    loginCli(){
    		this.$store.commit("changeLoginShow",true);
    },
//  注册点击
    registerCli(){
    		this.$store.commit("changeLoginShow",true);
    }
  }
};
</script>
<style scoped lang="scss">
.header_ {
  height: 88px;
  line-height: 88px;
  position: relative;
}

.header_.blue {
  background-image: linear-gradient(135deg, #3581df 0%, #8789f5 100%);
  box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, 0.04);
}

.headerCon {
  width: 1160px;
  margin: auto;
  font-size: 0;
  .className {
    margin: 0;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-weight: 500;
    line-height: 88px;
    display: inline-block;
    vertical-align: middle;
    i {
      display: inline-block;
      vertical-align: middle;
      width: 1px;
      height: 22px;
      background: rgba(255, 255, 255, 0.44);
      margin: 0 20px;
    }
  }
}

.header_logo {
  width: 135px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.login {
  height: 14px;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  color: #999999;
  span {
    cursor: pointer;
    color: #666666;
    &:hover {
      color: rgba(65, 130, 250, 1);
    }
  }
}
.blue .login{
  color: #ffffff;
  span {
    color: #ffffff;
    opacity: 0.6;
    &:hover {
      color: #ffffff;
      opacity: 1;
    }
  }
}
.fr {
  float: right;
}

.header_userimg {
  width: 56px;
  height: 54px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.tablist {
  display: inline-block;
  vertical-align: middle;
  line-height: 88px;
  padding-right: 55px;
  p {
    opacity: 0.6;
    font-weight: 500;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.89);
    letter-spacing: 0;
    margin: 0 19px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    &.active {
      opacity: 1;
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0.56px;
    }
  }
}
.inputCon {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 40px;
  height: 40px;
  .searchHeader {
    width: 320px;
    font-size: 14px;
    display: block;
    line-height: 1;
    padding: 10px 20px;
    background: #fcfcfc;
    border: 1px solid #f8f8f8;
    border-radius: 6px;
    padding-right: 50px;
  }
  .iconfont {
    font-size: 18px;
    color: #666666;
    position: absolute;
    right: 23px;
    top: 10px;
    cursor: pointer;
    line-height: 20px;
  }
  &:hover {
    .searchHeader {
      border-color: #3581df;
    }
    .iconfont {
      color: #3581df;
    }
  }
}
</style>
