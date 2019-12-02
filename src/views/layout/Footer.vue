<template>
  <div class="footer">
    <p class="footer_text">Copyright 2013-2016 北京慕华信息科技有限公司</p>
    <p class="footer_text"><a href="http://storagecdn.xuetangx.com/public_assets/xuetangx/copyright/icp.pdf" target="_blank">京ICP证140571号</a> | 京公网安备 11010802017721</p>
    <p class="footer_text"><a href="http://storagecdn.xuetangx.com/public_assets/xuetangx/copyright/permit.pdf" target="_blank">广播电视节目制作经营许可证（京）字第05791号</a> </p>
    <div class="footer_qrcode">
      <img  src="../../assets/index/qrcode.png"/>
      <p class="f3">手机下载APP</p>
    </div>
    <i class="iconfont">&#xe60c;</i>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      ifHas: "",
      footer: "index,footer"
    };
  },
  watch: {
    $route(curVal, oldVal) {
      this.setHeader();
    }
  },
  created() {
    this.setHeader();
  },
  methods: {
    setHeader() {
      const pathName = this.$route.name;
      if (this.footer.indexOf(pathName) > -1) {
        this.ifHas = true;
      } else {
        //没有footer
        this.ifHas = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.footer {
  font-size: 0;
  background-image: linear-gradient(133deg, #316bb3 0%, #8789f5 100%);
  padding: 76px 0 76px 146px;
  position: relative;    
  overflow: hidden;
  width: 100%;
  .iconfont {
    opacity: 0.05;
    color: #ffffff;
    position: absolute;
    font-size: 580px;
    top: -386px;
    right: -797px;
  }
}
.footer_text {
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 20px;
  margin-right: 38px;
  margin-bottom: 25px;
  &:last-child{
    margin-bottom:0;
  }
  a{
    color: #ffffff;
    cursor: pointer;
  }
}
.f2 {
  margin-left: 0;
}
.footer_qrcode {
  width: 143px;
  height: 138px;
  float: right;
  vertical-align: top;
  margin: -134px 161px 0 0;
  img {
    width: 100%;
    height: 100%;
  }
  .f3 {
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 12px;
    margin: 8px 0;
    text-align: center;
  }
}
</style>
