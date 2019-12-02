<template>
	<div class="aboutBox">
    <video
        id="my-player2"
        class="video-js  vjs-big-play-centered"
        ref="videojs2"
        controls
        width="700"
        height="400"
        preload="auto" >
        <!-- fmtp视频  -->
      <!-- <source :src="tbVideoUrl.zhibo.flvUrl.src" :type="tbVideoUrl.zhibo.flvUrl.type"/> -->

        <!-- http协议--cctv1的直播源 http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8-->
      <!-- <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" :type="tbVideoUrl.zhibo.hlsUrl.type"/> -->

      <!-- <source :src="tbVideoUrl.zhibo.hlsUrl.src" :type="tbVideoUrl.zhibo.hlsUrl.type"/> -->
      <!-- <source src="http://ws.cdn.xuetangx.com/b786c0807b946929-20.mp4" type="video/mp4"/> -->
      <!-- <track kind="subtitles"  src="../../static/troduction.vtt" srclang="en" label="Chinese" default/> -->
      <!-- <source :src="content.content_info.videoList[videoQu]" type="video/mp4"></source> -->
      <!-- <object id="wsplayer" name="wsplayer" type="application/x-shockwave-flash" width="100%" height="100%">
        <param name="quality" value="high">
        <param name="bgcolor" value="#000000">
        <param name="devicefont" value="false">
        <param name="wmode" value="opaque">
        <param name="allowScriptAccess" value="always">
        <param name="allowFullscreen" value="true">
        <param name="flashVars" value="auto=1&amp;vid=1938165&amp;video=rtmp%3A%2F%2Flivertmp-bj.wasu.cn%2Flive12%2Fhd_zjws&amp;mode=4&amp;wide=false&amp;p2p=1&amp;plugin=%2F%2Fs.wasu.cn%2Fportal%2Fplayer%2F20160406%2Floader.swf&amp;rate=0&amp;live=0&amp;staticurl=//s.wasu.cn/portal&amp;api=https://www.wasu.cn&amp;&amp;ad=10354&amp;">
        <param name="allownetworking" value="all">
      </object> -->
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
	</div>
</template>

<script>
//	引入jquery及视频播放插件的js
import $ from "jquery";

import "video.js/dist/video-js.css";
import videojs from "video.js";
export default {
  data() {
    return {
      tbVideoUrl: {
        zhibo: {
          flvUrl: {
            srcw:
              "https://txy.live-play.acgvideo.com/live-txy/559260/live_183430_5743361.flv?wsSecret=311e046727ebc035aae2b731e40eebf7&wsTime=1542869188&trid=f23f6504435445deb8ea50a654e3c496&sig=no",
            src:
              "http://liveng.alicdn.com/mediaplatform/6634c790-fe81-4d3f-9bc0-febd6cc265e9.flv?auth_key=1545286862-0-0-1f984e6486bac7865f7499efc906e798&viewer_id=0",
            type: "video/x-flv"
          },
          hlsUrl: {
            srctb:
              "http://liveng.alicdn.com/mediaplatform/ec9e4066-01c3-4fcc-be1b-32ae64f3f75e.m3u8?auth_key=1545876535-0-0-b7dbf0cfd7b546b49d88af2a0ceb4467&viewer_id=0",
            cctv12: "http://ivi.bupt.edu.cn/hls/cctv12.m3u8",
            cctv6: "http://ivi.bupt.edu.cn/hls/cctv6.m3u8",
            cctv1: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
            type: "application/x-mpegURL"
          },
          swfUrl: {
            //暂时不嫩播
            srchs: "//s.wasu.cn/portal/player/20180801/WsPlayer.swf?r=70",
            type: "application/x-shockwave-flash"
          },
          rtmpUrl: {
            //直播源不好找
            // srchs:'rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp', //韩国tv
            srchs: "rtmp://202.69.69.180:443/webcast/bshdlive-pc",
            type: "rtmp/flv"
          }
        },
        player: null
      },
      srcs:{
        src:'',
        type:''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        techOrder: ["html5", "flash"],
        sourceOrder: true,
        flash: {
          // hls: { withCredentials: false },
          // swf: "../../static/js/WsPlayer.swf" //华数tv的swf
          swf: "../../static/js/video-js.swf"
        },
        html5: { hls: { withCredentials: false } }
      }
    };
  },
  components: {},
  mounted() {
    this.init();
  },
  watch: {
    $route(curVal, oldVal) {
      this.init();
    }
  },
  methods: {
    init(){
      if(this.$route.query && this.$route.query.url && this.$route.query.type){
        this.srcs.src = this.$route.query.url;
        this.srcs.type = this.$route.query.type;
      }else if(this.$route.query && this.$route.query.name){
        this.srcs.src = this.tbVideoUrl.zhibo.hlsUrl[this.$route.query.name];
        this.srcs.type = this.tbVideoUrl.zhibo.hlsUrl.type;
      }else{
        this.$notify({
            title: '直播提示',
            dangerouslyUseHTMLString: true,
            message: '请在url上自行拼接直播地址<br/>（url--直播url，<br/>type--url的type：video/x-flv、application/x-mpegURL、application/x-shockwave-flash、rtmp/flv，<br/>name--常用cctv地址：cctv1、cctv6、cctv12）'
          });
      }
      this.videoinit()
    },
    videoinit() {
      this.player = videojs("my-player2", this.playerOptions, () => {
        this.player.reset();
        this.player.src(this.srcs);
        this.player.load(this.srcs.src);
        this.player.play();
      }); //一定要初始化，不然不能播
      this.$emit("setPlayer", "live", this.player);
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  >
</style>
