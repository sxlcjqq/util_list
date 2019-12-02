<template>
    <div class="main">
        <Header class="header" v-if="headerType.indexOf('noheader') < 0" :headerType="headerType"></Header>
        <app-main class="appMain"></app-main>
        <!-- <Footer class="footer" v-if="headerType.indexOf('nofooter') < 0"></Footer> -->
    </div>
</template>

<script>
import Header from "./Header.vue";
import AppMain from "./AppMain.vue";
import Footer from "./Footer.vue";

export default {
  name: "layout",
  components: {
    Header,
    AppMain,
    Footer
  },
  //   mixins: [ResizeMixin],
  computed: {
    headerType() {
      return this.$route.meta.isHeader || '';
    }
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main {
  position: relative;
  min-width: 1160px;
}
.header {
  width: 100%;
  display: block;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 -7px 17px 10px rgba(13, 37, 62, 0.04);
}
.appMain {
  // min-height: calc(100vh - 342px);
  background:url(../../assets/common/commonbg.png) #f9f9f9 no-repeat;
  background-position: 0 60px ;
  background-size: 489px auto;
}
.footer {
  height: 254px;
}
</style>
