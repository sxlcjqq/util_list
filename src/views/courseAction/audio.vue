<template>
    <div class="audioCC" @mouseup.stop="mouseup">
      <audiooo ref="audio"/>
    </div>
</template>

<script>
import audiooo from "@/components/audio";
export default {
  name: "audio",
  components: {audiooo},
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
  },
  mounted() {
    this.$refs.audio.setAudioUrl('https://qn-st0.yuketang.cn/15736358653525.mp3','http://qn-sx.yuketang.cn/tougao_pic_6AH7GEGXHYk.png')
  },
  methods: {
    mouseup(e){
      this.$refs.audio.upVolume(e);
      this.$refs.audio.upProgress(e);
    },
    destroyAudio(){
      if(this.$refs.audio){
        this.$refs.audio.destroyAudio()
      }
    }
  },
  filters: {},
  beforeDestroy() {
    this.destroyAudio()
  }
};
</script>

<style scoped lang="scss">
.audioCC{
  width: 700px;
  height: 700px;
}
</style>
