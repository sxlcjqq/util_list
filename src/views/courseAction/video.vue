<template>
     <div class="lesson_right" @keydown.up="setVideoProgress(true)" @keydown.down="setVideoProgress(false)" @keydown.left="setVideoProgress(false)" @keydown.right="setVideoProgress(true)">
       <div style="width:740px;">
         <div class="list lesson_video" >
             <p class="t1"><i></i>视频</p>
             <video
                id="my-player"
                class="video-js  vjs-big-play-centered"
                controls
                ref="videojs"
                preload="auto"
                width="700"
                height="400"
                >
                
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">
                  supports HTML5 video
                </a>
              </p>
            </video>
         </div>
         <el-form ref="form" label-width="80px" style="margin-top:20px;">
          <el-form-item label="视频地址">
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入视频地址"
                    v-model="srcs">
                  </el-input>
          </el-form-item>
          <el-form-item>
                  <el-button type="danger" @click="resetSrc">确定修改</el-button>
          </el-form-item>
        </el-form>
       </div>
       
   <div class="web-box">
       <div class="web-content-box">
           <div class="video-box" >
                <div class="video-content-box">
                    <div class="prism-player" id="playerId">

                    </div>
                </div>

           </div>
       </div>
   </div>
     </div>
</template>

<script>
import $ from "jquery";
import "video.js/dist/video-js.css";
import videojs from "video.js";
export default {
  name: "courseActionLesson",
  data() {
    return {
      player: null,
      srcs: ""
    };
  },
  created() {},
  mounted() {
    this.init();
    this.createVideo();
  },
  watch: {
    $route(curVal, oldVal) {
      this.init();
    }
  },
  methods: {
        createVideo(){
            var player1 = new Aliplayer({
                "id": "playerId",
                "source": "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
                "width": "100%",
                "height": "500px",
                "autoplay": true,
                "isLive": true,
                "rePlay": false,
                "playsinline": true,
                "preload": true,
                "controlBarVisibility": "hover",
                "useH5Prism": true,
                "skinLayout": []
            }, function (player) {
                  console.log("The player is created");
                  console.log(player.getStatus())
                      // player.loadByUrl('http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8')
                  //  player.on('ready',function(e) {
                  //     player.loadByUrl('http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8')
                  // });
                }
            );

        },
    init() {
      if (this.$route.query && this.$route.query.url) {
        this.srcs = this.$route.query.url;
      } else {
        this.$notify({
          title: "播放器提示",
          dangerouslyUseHTMLString: true,
          message: "请在url上自行拼接播放地址"
        });
      }
      this.player = videojs(
        "my-player",
        {
          controlBar: {
            children: [
              {
                name: "playToggle"
              },
              {
                name: "currentTimeDisplay"
              },
              {
                name: "timeDivider"
              },
              {
                name: "durationDisplay"
              },
              {
                name: "progressControl"
              },
              {
                name: "volumePanel",
                inline: false
              },
              {
                name: "fullscreenToggle"
              }
            ]
          }
        },
        () => {
          this.player.reset();
          this.player.src({
            src: this.srcs,
            type: "video/mp4"
          });
          this.player.load(this.srcs);
        }
      );

      //播放器初始化操作面板清晰度菜单
      var playerInitVideo = () => {
        var $videoPanelMenu = $(".vjs-volume-panel");
        var $str = $(
          '<div style="width:100%;"></div>' +
            '<div class="vjs-subs-caps-button  vjs-menu-button vjs-menu-button-popup vjs-control vjs-button"  aria-live="polite" aria-expanded="false" aria-haspopup="true" >' +
            '<div class="vjs-menu beisuCon" role="presentation">' +
            '<ul class="vjs-menu-content" role="menu">' +
            '<li class="vjs-menu-item beisu" tabindex="-1" role="menuitemcheckbox"  >0.5x</li>' +
            '<li class="vjs-menu-item beisu vjs-selected" tabindex="-1" role="menuitemcheckbox"  >1.0x</li>' +
            '<li class="vjs-menu-item beisu" tabindex="-1" role="menuitemcheckbox"  >1.5x</li>' +
            '<li class="vjs-menu-item beisu" tabindex="-1" role="menuitemcheckbox"  >2.0x</li>' +
            '<li class="vjs-menu-item beisu" tabindex="-1" role="menuitemcheckbox"  >2.5x</li>' +
            '<li class="vjs-menu-item beisu" tabindex="-1" role="menuitemcheckbox"  >3.0x</li>' +
            "</ul></div>" +
            '  <button class="vjs-subs-caps-button vjs-control beisuControl vjs-button" type="button" aria-live="polite" title="倍速切换" aria-disabled="false" >' +
            '      <span class="vjsqq-control-text beisu">1.0x</span>' +
            "  </button>" +
            "</div>"
        );
        $str.find(".beisuControl").hover(
          e => {
            $str.find(".beisuCon").css("display", "block");
          },
          () => {
            $str.find(".beisuCon").css("display", "block");
            window.setTimeout(() => {
              $str.find(".beisuCon").css("display", "");
            }, 700);
          }
        );
        $str.find(".beisuCon").hover(
          e => {
            $str.find(".beisuCon").css("display", "block");
          },
          () => {
            $str.find(".beisuCon").css("display", "");
          }
        );
        $str.find(".vjs-menu-item.beisu").click(e => {
          $str.find(".vjs-menu-item.beisu").removeClass("vjs-selected");
          $(e.target).addClass("vjs-selected");
          var index = $(e.target).text();
          $str.find(".vjsqq-control-text.beisu").text(index);
          this.player.playbackRate(index.replace("x", ""));
          this.videoHeartBeat.speed = index.replace("x", "");
        });
        $videoPanelMenu.before($str);
        $videoPanelMenu.find(".vjs-mute-control").hover(
          e => {
            $videoPanelMenu.find(".vjs-volume-control").css("display", "block");
          },
          () => {
            $videoPanelMenu.find(".vjs-volume-control").css("display", "block");
            window.setTimeout(() => {
              $videoPanelMenu.find(".vjs-volume-control").css("display", "");
            }, 700);
          }
        );
        $videoPanelMenu.find(".vjs-volume-control").hover(
          e => {
            $videoPanelMenu.find(".vjs-volume-control").css("display", "block");
          },
          () => {
            $videoPanelMenu.find(".vjs-volume-control").css("display", "");
          }
        );
      };

      //加载页面进行播放器初始化
      this.player.ready(function() {
        if (!$(".video-js").find(".vjsqq-control-text").length) {
          playerInitVideo();
        }
      });
    },
    resetSrc() {
      this.player.src({
        src: this.srcs,
        type: "video/mp4"
      });
      this.player.load(this.srcs);
    },
    setVideoProgress(type) {
      if (type) {
        //前进
        if (this.player) {
          this.player.currentTime(
            this.player.currentTime() + 10 > this.player.duration()
              ? this.player.duration()
              : this.player.currentTime() + 10
          );
        }
      } else {
        // 后退
        if (this.player) {
          this.player.currentTime(
            this.player.currentTime() - 10 < 0
              ? 0
              : this.player.currentTime() - 10
          );
        }
      }
    }
  },
  filters: {},
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/jqqCommon.scss";
    html,body{
        height: 100%;
        background-color: #F7F7F8;
        margin: 0;
    }
    #app{
        height: 100% !important;
    }
</style>
<style lang="scss" >
@import "@/styles/video.scss";
 @media screen and (min-width: 1600px){
        .web-box{
            height: 100%;
        }
        .web-box .web-title-box{
            width: 100%;
            height: 72px;
            background-color: #FFFFFF;
            display: flex;
            justify-content:center;
            align-content: center;
        }
        .web-box .web-title-box .web-title-content-box{
            width: 1360px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
         .web-box .web-title-box .web-title-content-box span{
             padding-left: 5px;
             font-size: 20px;
             font-weight: 900;
             color: #000000;

         }
        .video-box, .chat-box{
        }
        .web-box{
            width: 100%;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            flex-wrap: wrap;
        }
        .web-title-box{
            width: 100%;
            height: 72px;
            background-color: #FFFFFF;
        }
        .web-content-box{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 20px 0 0;
        }
        .video-box{
            width: 960px;
            margin-right: 20px;
        }
        .video-box .video-content-box{
            height: 600px;
        }
        .chat-box{
            width: 380px;
        }
        .video-box .mobile-info-box{
            display: none;
        }
        .video-box .info-box{
            padding: 0 20px;
        }
        .video-box .info-box h3{
            font-size: 24px;
        }
        .video-box .info-box .people-number{
            color: #909090;
            font-size: 16px;
            height: 36px;
            border-bottom: 1px solid #ECF1F4;
        }
        .video-box .info-box p{
            color: #4B4B4B;
            font-size: 16px;
        }
        .chat-box .title-box{
            color: #141414;
            font-size: 20px;
            padding-left: 20px;
            height: 43px;
            line-height: 43px;
            border-bottom: 1px solid #ECF1F4;
        }
    }
    @media screen and (min-width: 1440px) and (max-width: 1600px){
        .web-box{
            height: 100%;
        }
        .web-box .web-title-box{
            width: 100%;
            height: 72px;
            background-color: #FFFFFF;
            display: flex;
            justify-content:center;
            align-content: center;
        }
        .web-box .web-title-box .web-title-content-box{
            width: 1200px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
         .web-box .web-title-box .web-title-content-box span{
             padding-left: 5px;
             font-size: 20px;
             font-weight: 900;
             color: #000000;

         }
        .video-box, .chat-box{
        }
        .web-box{
            width: 100%;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            flex-wrap: wrap;
        }
        .web-title-box{
            width: 100%;
            height: 72px;
            background-color: #FFFFFF;
        }
        .web-content-box{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 20px 0 0;
        }
        .video-box{
            width: 800px;
            margin-right: 20px;
        }
        .video-box .video-content-box{
            height: 500px;
        }
        .chat-box{
            width: 380px;
        }
        .video-box .mobile-info-box{
            display: none;
        }
        .video-box .info-box{
            padding: 0 20px;
        }
        .video-box .info-box h3{
            font-size: 24px;
        }
        .video-box .info-box .people-number{
            color: #909090;
            font-size: 16px;
            height: 36px;
            border-bottom: 1px solid #ECF1F4;
        }
        .video-box .info-box p{
            color: #4B4B4B;
            font-size: 16px;
        }
        .chat-box .title-box{
            color: #141414;
            font-size: 20px;
            padding-left: 20px;
            height: 43px;
            line-height: 43px;
            border-bottom: 1px solid #ECF1F4;
        }
    }

    .video-box, .chat-box{
        background-color: #FFFFFF;
    }
    .axzt-live{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    .axzt-live-display{
        position: absolute;
        left: 35px;
        bottom: 18px;
        width: 56px;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
        background-color: #FF3B30;
    }
    .axzt-live-volume{
        position: absolute;
        bottom: 12px;
        right: 146px;
        display: flex;
        align-items: center;
    }
    .axzt-live-volume i{
        color: #FFFFFF;
        font-size: 24px;
        margin-right: 10px;
        height: 35px;
        line-height: 35px;
    }
    .axzt-live-quality{
        position: absolute;
        right: 79px;
        bottom: 20px;
        color: #FFFFFF;
        font-size: 16px;
    }
    .axzt-live-quality-list{
        position: absolute;
        right: 10px;
        bottom: 64px;
        width: 171px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 0px 0px 10px 0px;
        color: #FFFFFF;
    }
    .axzt-live-quality-list .title{
        height: 70px;
        line-height: 70px;
        font-size: 16px;
        padding-left: 23px;
        border-bottom: 1px solid #979797;
    }
    .axzt-live-quality-list .list div{
        padding-left: 23px;
        height: 37px;
        line-height: 37px;
    }
    .axzt-live-quality-list .list div:hover{
        cursor:pointer;
        background-color: rgba(216, 216, 216, 0.1);
    }
    .axzt-live-full{
        position: absolute;
        right: 24px;
        bottom: 20px;
        width: 24px;
        height: 24px;
    }
    .axzt-live-full i{
        color: #FFFFFF !important;
        font-size: 22px !important;
    }
    .axzt-live-volume:hover, .axzt-live-quality:hover,
    .axzt-live-full:hover{
        cursor:pointer;
    }
    /**手机屏幕适配**/
    @media screen and (max-width: 500px){
        .web-box{
            padding: 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .web-title-box{
            display: none;
        }
        .web-content-box, .video-box{
            width: 100%;
            margin: 0;
        }
        .video-box .video-content-box{
            height: 211px;
        }
        .video-box .info-box{
            display: none;
        }
        .video-box .mobile-info-box {
            padding: 0 12px;
        }
        .video-box .mobile-info-box .title-box{
            position: relative;
            height: 50px;
            padding: 5px 0px 0;
        }
        .mobile-info-box .title-box .title{
            color: #141414;
            font-size: 15px;
            font-weight: 500;
        }
        .mobile-info-box  .title-box .people-number{
            color: #CCCCCC;
            font-size: 12px;
        }
        .mobile-info-box .title-box i{
            position: absolute;
            top: 18px;
            right: 21px;
        }
        .mobile-info-box .title-box .info-down{
            color: #8E8E93;
        }
        .mobile-info-box .title-box .info-up{
            color: #275EDB;
        }
        .mobile-info-box .describe-box{
            border-top: 1px solid #F0F2F4;
            font-size: 14px;
            color: #4B4B4B;
        }
        .chat-box{
            width: 100%;
        }
        .chat-box .title-box{
            display: none;
        }
    }

</style>
<style deep>
    .axzt-live-volume .el-slider{
        width: 120px;
    }
    .axzt-live-volume .el-slider .el-slider__runway{
        height: 3px;
    }
    .axzt-live-volume .el-slider .el-slider__bar{
        height: 3px;
        background-color: #275EDB;
    }
    .axzt-live-volume .el-slider .el-slider__runway
    .el-slider__button-wrapper {
        top: -16px;
    }
    .axzt-live-volume .el-slider .el-slider__runway
    .el-slider__button-wrapper .el-slider__button{
        height: 10px;
        width: 10px;
        background-color: #275EDB;
        box-shadow: 0 0 0 4px rgba(39, 94, 219, 0.24);
        border: 0;
    }
</style>