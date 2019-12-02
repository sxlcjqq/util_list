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
         <el-form ref="form" :model="form" label-width="80px" style="margin-top:20px;">
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
  },
  watch: {
    $route(curVal, oldVal) {
      this.init();
    }
  },
  methods: {
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
</style>
<style lang="scss" >
@import "@/styles/video.scss";
</style>