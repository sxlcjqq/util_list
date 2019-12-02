<template>
    <div class="audioCon unselectable" v-if="live_url">
        <div class="audioImg">
        <i class="audioLine" :class="(play?'active':'')"></i>
        <i class="audioPoint"></i>
        <i class="audioCenter" :style="{'transform':'rotate('+rotateNumber+'deg)','background-image':'url('+(poster||'https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/716521fc5046e61e9d02f4e82593fc3a.audio-center.png')+')'}" @click="play = !play"></i>
        <i class="audioPoster"></i>
        </div>
        <div class="audioSelf">
        <span class="play" @click="play = !play"><i class="iconfont">{{(play?'&#xe67e;':'&#xe67f;')}}</i></span>
        <span class="start-time">{{audio?transtime(audio.currentTime,'current'):'00:00'}}</span>
        <span class="progress_qq" @mousedown.stop="downProgress" @mousemove.stop="moveProgress">
            <span class="line-down">
            <i class="line-up" v-if="audio" :style="{'width':returnProgress(audio.currentTime)}"></i>
            </span>
        </span>
        <span class="full-time">{{transtime(duration)}}</span>
        <span class="volume">
            <i class="iconfont">{{volume?'&#xe67c;':'&#xe67d;'}}</i>
        </span>
        <span class="volume-ctl" @mousemove.stop="moveVolume">
            <div class="bb">
            <span class="volume-text">{{volume*100}}%</span>
            <div class="bc" @mousedown.stop="downVolume">
                <span class="line-down">
                <i class="line-up" :style="{'height':(volume*100)+'%'}"></i>
                </span>
            </div>
            <span class="muted" @click="setMuted()"></span>
            </div>
        </span>
        </div>
    </div>
</template>

<script>
export default {
  name: "audio",
  components: {
  },
  data() {
    return {
        live_url: "",
        audio:null,
        play:false,
        poster:'',
        duration:0,
        audioInterval:null,
        lastVolume:0,
        volume:1,
        moveV:false,
        moveP:false,
        rotateNumber:0,
        rotateInterval:null,
    };
  },
  created() {
    // this.setAudioUrl('https://qn-st0.yuketang.cn/15736358653525.mp3');
  },
  mounted() {},
  watch: {
    'play'(n,o){
      if(this.audio){
        if(this.rotateInterval) clearInterval(this.rotateInterval)
        if(!n){
          this.audio.pause();
        }else{
          this.rotateInterval = setInterval(() => {
            this.rotateNumber = this.rotateNumber+8;
          }, 120);
          this.audio.play();
          this.audio.volume = this.volume;
        }
      }
    },
    'volume'(n,o){
      if(this.audio){
        this.audio.volume = n;
      }
    }
  },
  methods: {
    setAudioUrl(url,poster) {
        this.destroyAudio();
        this.live_url = url;
        this.poster = poster;
        if(!this.audio){
            this.audio = document.createElement("AUDIO");
        }
        this.audio.src = this.live_url;
        this.audioInterval = setInterval(() => {
            if(this.audio.readyState == 4){
                clearInterval(this.audioInterval);
                this.duration = this.audio.duration;
            }
        }, 200);
    },
    setMuted(){
      if(this.volume){
        this.lastVolume = this.volume;
        this.volume = 0;
      }else{
        this.volume = this.lastVolume;
      }
    },
    mouseup(e){
      this.upVolume(e);
      this.upProgress(e);
    },
    downVolume(e){
      this.moveV = true;
    },
    upVolume(e){
      if(this.moveV){
        this.setVolume(e);
      }
      this.moveV = false;
    },
    moveVolume(e){
      if(this.moveV){
        this.setVolume(e);
      }
    },
    setVolume(e){
      if($('.volume-ctl').css('display') == 'block'){
        let hh = 93;
        if(/(line-down)|(bc)/.test(e.toElement.className)) {
          hh = 93 - (e.offsetY<0?0:e.offsetY);
        }else if(/(volume-ctl)|(bb)/.test(e.toElement.className)) {
          hh = 130 - (e.offsetY<0?0:e.offsetY);
        }else if(/(line-up)/.test(e.toElement.className)){
          hh = 93 - e.toElement.offsetTop - (e.offsetY<0?0:e.offsetY);
        }
        hh = hh>93?93:hh;
        hh = hh<0?0:hh;
        let h = hh/0.93;
        h= (h+'').replace(/\..*/g,'')/100;
        this.volume = h;
      }
    },
    upProgress(e){
      if(this.moveP){
        this.setProgress(e);
      }
      this.moveP = false;
    },
    moveProgress(e){
      if(this.moveP){
        this.setProgress(e);
      }
    },
    downProgress(e){
      this.play = true;
      this.moveP = true;
    },
    setProgress(e){
      if(e && this.audio){
        this.audio.currentTime = e.offsetX/440*this.audio.duration;
      }
    },
    returnProgress(progress){
      if(this.audio && this.audio.duration){
        return (progress/this.audio.duration*440+'px');
      }else{
        return '0px';
      }
    },
    destroyAudio(){
        if(this.rotateInterval) clearInterval(this.rotateInterval)
        if(this.audioInterval) clearInterval(this.audioInterval)
        if(this.audio){
            this.audio.src = null;
            this.audio.currentTime = 0;
            this.poster = '';
            this.play = false;
        }
    },
    transtime(sec,type){//返回 hh:mm:ss
      var retu = null;
      if(sec){
        var ss = sec%60,mm=parseInt((sec%3600-ss)/60),hh=parseInt(sec/3600);
        ss = parseInt(sec%60);
        retu = (hh?(hh>9?hh:'0'+hh)+':':'')+(mm>9?mm:'0'+mm)+':'+(ss>9?ss:'0'+ss);
      }else{
        retu = '00:00';
      }
      if(type == 'current'){
        if(sec == this.audio.duration){
          this.play = false;
        }
      }
      return retu
    }
  },
  filters: {},
  beforeDestroy() {
    this.destroyAudio()
  }
};
</script>

<style scoped lang="scss">
.unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
 }
.audioCon{
    width: 700px;
    height: 320px;
    background: #FCFCFC;
    padding-top:38px;
    .audioImg{
    width: 203px;
    height: 190px;
    margin:0 auto 36px;
    position: relative;
    z-index: 1;
    .audioLine{
        position: absolute;
        right: 0;
        top: 20px;
        width: 44px;
        height: 169px;
        background: url('https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/c6af27e4209a935f9899f28f375d7482.audio-line.png') no-repeat center;
        background-size: contain;
        z-index: 2;
        transition: all 0.3s ease-in-out;
        transform-origin: top left;
        &.active{
            top: 15px;
            transform: rotate(23deg);
        }
    }
    .audioPoint{
        position: absolute;
        right: 4px;
        top: 0;
        width: 36px;
        height: 36px;
        background: url('https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/0c26da4359dc4dd9cb534f69473d2caa.audio-point.png') no-repeat center;
        background-size: contain;
        z-index: 3;
    }
    .audioCenter{
        position: absolute;
        left: 37.8px;
        top: 56.8px;
        width: 95.4px;
        height: 95.4px;
        cursor: pointer;
        background: url('https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/716521fc5046e61e9d02f4e82593fc3a.audio-center.png') no-repeat center;
        background-size: cover;
        transition: all 0.12s;
        border-radius: 50%;
        z-index: 4;
    }
    .audioPoster{
        position: absolute;
        left: 0;
        top: 19px;
        width: 171px;
        height: 171px;
        background: url('https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/bd52135549a32bef6957573db19b423d.audio.png') no-repeat center;
        background-size: cover;
        z-index: 1;
    }
    }
    .audioSelf{
    width: 648px;
    height: 32px;
    position: relative;
    margin:auto;
    font-size: 0;
    line-height: 32px;
    &>span{
        display: inline-block;
        vertical-align: top;
    }
    .play{
        cursor: pointer;
        height: 32px;
        .iconfont{
        font-size: 32px;
        color: #4182fa;
        }
    }
    .start-time{
        width: 62px;
        color: #333333;
        font-size: 14px;
        text-align: right;
        margin-right: 16px;
    }
    .progress_qq{
        width: 440px;
        height: 32px;
        cursor: pointer;
        .line-down{
        display: block;
        background: #C8C8C8;
        height: 3px;
        width: 100%;
        border: 1px solid #dcdcdc;
        border-radius: 1px;
        margin-top:15.4px;
        .line-up{
            background: #4182FA;
            height: 5px;
            border-radius: 2px;
            display: block;
            border:1px solid #8BB2FA;
            position: relative;
            top:-2px;
            left:-1px;
            z-index: 3;
            cursor: pointer;
            &::after{
            background: url('https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/77f950b047c8d23f7bce9f02c4079ab6.audio-point.png') no-repeat;
            background-size: contain;
            width: 19px;
            height: 19px;
            display: block;
            content:'';
            position: absolute;
            right: -10px;
            top: -8px;
            z-index: 4;
            cursor: pointer;
            }
        }
        }
    }
    .full-time{
        width: 62px;
        color: #333333;
        font-size: 14px;
        margin-left: 16px;
    }
    .volume{
        color: #5D5D5D;
        cursor: pointer;
        height: 32px;
        .iconfont{
        font-size: 20px;
        line-height: 32px;
        }
        &:hover{
        & + .volume-ctl{
            display: block;
        }
        }
    }
    .volume-ctl{
        display: none;
        width: 48px;
        position: absolute;
        right: -16px;
        bottom: 0;
        padding-bottom:40px;
        .bb{
        background: #FFFFFF;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
        height: 130px;
        }
        .muted{
        position: absolute;
        bottom: 1px;
        left: 6px;
        width: 32px;
        height: 32px;
        z-index: 3;
        cursor: pointer;
        }
        &:hover{
        display: block;
        }
        .volume-text{
        font-size: 12px;
        color: #333333;
        letter-spacing: 0.18px;
        line-height: 17px;
        display: block;
        padding-top:8px;
        padding-bottom:4px;
        text-align: center;
        }
        .bc{
        display: block;
        height: 93px;
        width: 10px;
        cursor: pointer;
        margin: 0 auto;
        }
        .line-down{
        display: block;
        background: #C8C8C8;
        height: 100%;
        width: 2px;
        border-radius: 2px;
        margin: 0 auto;
        position: relative;
        .line-up{
            display: block;
            background: #4182fa;
            height: 0;
            width: 2px;
            border-radius: 2px;
            position: absolute;
            bottom:0;
            left:0;
            &::before{
            width: 12px;
            height: 6px;
            border-radius: 3px;
            display: block;
            background: #4182fa;
            content:'';
            position: absolute;
            right: -5px;
            top: -3px;
            z-index: 4;
            cursor: pointer;
            }
        }
        }
    }
    }
}
</style>
