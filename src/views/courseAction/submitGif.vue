<template>
  <div class="submitGif">
    <div class="submitGifcon" :style="{'width':canvasData.width+'px','height':canvasData.height+'px'}">
      <canvas id="canvas"></canvas>
      <button @click="init">HAHA  </button>
    </div>
  </div>
</template>

<script>
// var drow
// class Draw{
//     constructor(el){
//         this.el = el
//         this.canvas = document.getElementById(this.el)
//         this.ctx = this.canvas.getContext('2d')
//         this.ctx.fillStyle = "#FF0000";
//         this.ctx.fillRect(0, 0, 150, 75);
//     }
// }
//  drow = new Draw('canvas')
export default {
  name: "submitGif",
  data() {
    return {
      el: "canvas",
      canvas: null,
      ctx: null,
      pieceList: [],
      textList: [],
      color: "65,130,250",
      uwtime: 0, //上升次数
      dwtime: 0, //下降次数
      canvasData: {
        width: 400,
        height: 300,
        top: 0,
        left: 0
      },
      timeout1: null,
      timeout2: null,
      timeout3: null,
      text: "靳老板",
      btnData: {
        width: 100,
        height: 32,
        left:100,
        top:30,
      }
    };
  },
  created() {},
  mounted() {
    this.canvas = document.getElementById(this.el);
    this.canvas.height = this.canvasData.height;
    this.canvas.width = this.canvasData.width;
    this.canvasData.left = -50;
    this.canvasData.top = -180;
    this.canvas.style.left = "0px";
    this.canvas.style.top = "0px";
    this.ctx = this.canvas.getContext("2d");
  },
  watch: {},
  methods: {
    init() {
      clearTimeout(this.timeout1);
      clearTimeout(this.timeout2);
      clearTimeout(this.timeout3);
      this.uwtime = 40;
      this.dwtime = 0;
      this.pieceList = [];
      this.textList = [];
      this.addPiece(30);
      this.drowPiece();
      this.movePiece();
    },
    initPiece(x, y, w, h, o, ex, ey, c) {
      /**
       * x,y:位置
       * w,h:半截大小
       * o:透明度
       * ex:end x
       * ey:end y
       */
      var dd = {
        x: x,
        y: y,
        w: w,
        h: h,
        o: o,
        ex: x + ex * (this.getRandom(1, 0) >= 0.5 ? 1 : -1),
        ey: y + ey * -1,
        c: c
      };
      this.pieceList.push(dd);
    },
    initText(x, y, fs, o) {
      /**
       * x,y:位置
       * fs:font-size
       * o:透明度
       * i:index
       */
      var dd = {
        x: x,
        y: y,
        fs: fs,
        o: o
      };
      this.textList.push(dd);
    },
    addPiece(num) {
      for (var i = 0; i < num; i++) {
        this.initPiece(
          this.btnData.left + this.btnData.width / 2 + 50,
          this.btnData.top + 150,
          this.getRandom(3, 3),
          this.getRandom(2, 4),
          this.getRandom(0.9, 0.1),
          this.getRandom(120, 10),
          this.getRandom(120, 70),
          this.getRandom(90, 20) + "," + this.getRandom(150, 50) + ",250"
        );
      }
      if (this.text) {
        setTimeout(() => {
          this.initText(
            this.btnData.left - this.canvasData.left + this.btnData.width / 2,
            this.btnData.top + 180,
            12,
            1
          );
        }, 100);
        setTimeout(() => {
          this.initText(
            this.btnData.left - this.canvasData.left + this.btnData.width / 2,
            this.btnData.top + 180,
            12,
            1
          );
        }, 250);
        setTimeout(() => {
          this.initText(
            this.btnData.left - this.canvasData.left + this.btnData.width / 2,
            this.btnData.top + 180,
            12,
            1
          );
        }, 400);
      }
    },
    drowText() {
      this.textList.forEach(element => {
        if (element.y > 0) {
          if (element.y < this.btnData.top - this.canvasData.top) {
            if (element.fs <= 30) {
              element.fs += 0.4;
            }
            if (element.fs > 30) {
              element.o -= 0.02;
            }
          }
          element.y -= 1 + element.fs / 18;
          this.ctx.font = element.fs + "px Georgia";
          this.ctx.fillStyle = "rgba(" + this.color + "," + element.o + ")";
          this.ctx.fillText(
            this.text,
            element.x - (12 + element.fs) / 2,
            element.y
          );
        }
      });
    },
    drowPiece() {
      this.pieceList.forEach(element => {
        this.ctx.beginPath();
        this.ctx.moveTo(element.x, element.y);
        this.ctx.lineTo(element.x + element.w, element.y + element.h);
        this.ctx.lineTo(element.x, element.y + 2 * element.h);
        this.ctx.lineTo(element.x - element.w, element.y + element.h);
        this.ctx.lineTo(element.x, element.y);
        this.ctx.fillStyle = "rgba(" + element.c + "," + element.o + ")";
        this.ctx.fill(); //填充
        // this.ctx.stroke(); //画线
      });
      if (this.text) {
        this.drowText();
      }
    },
    getRandom(num, v) {
      return Math.random() * num + v;
    },
    movePiece() {
      this.uwtime--;
      this.ctx.clearRect(0, 0, this.canvasData.width, this.canvasData.height);
      this.pieceList.forEach(element => {
        if (element.uw && element.uh) {
        } else {
          //求  uw、uh加速度，t时间间隔,间距 = g/2(t^2)
          element.uw = ((element.ex - element.x) * 2) / 0.5 / 0.5;
          element.uh = ((element.ey - element.y) * 2) / 0.5 / 0.5;
          element.t = 0.5 / 40;
        }
        this.ctx.beginPath();
        element.x +=
          (element.uw / 2) *
          (2 * this.uwtime * element.t + element.t) *
          element.t;
        element.y +=
          (element.uh / 2) *
          (2 * this.uwtime * element.t + element.t) *
          element.t;
        this.ctx.moveTo(element.x, element.y);
        this.ctx.lineTo(
          element.x + element.w + this.getRandom(4, -2),
          element.y + element.h + this.getRandom(4, -2)
        );
        this.ctx.lineTo(element.x, element.y + 2 * element.h);
        this.ctx.lineTo(
          element.x - element.w + this.getRandom(4, -2),
          element.y + element.h + this.getRandom(4, -2)
        );
        this.ctx.lineTo(element.x, element.y);
        this.ctx.fillStyle = "rgba(" + element.c + "," + element.o + ")";
        this.ctx.fill(); //填充
        // this.ctx.restore();
        // this.ctx.stroke(); //画线
      });

      if (this.text) {
        this.drowText();
      }
      if (this.uwtime >= 0) {
        this.timeout2 = setTimeout(() => {
          this.movePiece();
        }, 10);
      } else {
        this.downPiece();
      }
    },
    downPiece() {
      this.dwtime++;
      this.ctx.clearRect(0, 0, this.canvasData.width, this.canvasData.height);

      if (this.text) {
        this.drowText();
      }
      this.pieceList.forEach(element => {
        if (element.dh) {
        } else {
          //确定间隔
          element.dh = (140 * 2) / 1.2 / 1.2;
          element.dt = 1 / 50;
          element.rotate = this.getRandom(5, 3);
          element.dx = this.getRandom(1.2, -0.6);
        }
        this.ctx.save(); //保存状态
        element.x += element.dx;
        element.o -= 0.01;
        element.y +=
          (element.dh / 2) *
          (2 * this.dwtime * element.dt + element.dt) *
          element.dt;
        this.ctx.translate(element.x, element.y + element.h); //设置画布上的(0,0)位置，也就是旋转的中心点
        this.ctx.rotate((element.rotate * this.dwtime * Math.PI) / 180);

        this.ctx.translate(-element.x, -element.y - element.h); //设置画布上的(0,0)位置，也就是旋转的中心点
        this.ctx.beginPath();
        this.ctx.moveTo(element.x, element.y);
        this.ctx.lineTo(
          element.x + element.w + this.getRandom(2, -1),
          element.y + element.h + this.getRandom(2, -1)
        );
        this.ctx.lineTo(element.x, element.y + 2 * element.h);
        this.ctx.lineTo(
          element.x - element.w - this.getRandom(2, -1),
          element.y + element.h + this.getRandom(2, -1)
        );
        this.ctx.lineTo(element.x, element.y);
        this.ctx.fillStyle = "rgba(" + element.c + "," + element.o + ")";
        this.ctx.fill(); //填充
        this.ctx.restore(); //恢复状态
        // this.ctx.restore();
        // this.ctx.stroke(); //画线t);
      });
      if (this.dwtime <= 100) {
        this.timeout3 = setTimeout(() => {
          this.downPiece();
        }, 20);
      } else {
        this.ctx.clearRect(0, 0, this.canvasData.width, this.canvasData.height);
      }
    }
  },
  filters: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.submitGifcon {
  z-index: 1;
  position: relative;
  //   background: url(../../assets/courseSearch/noresult.png);
}
canvas {
  display: block;
  position: relative;
}
button {
  bottom:0;
  height: 32px;
  cursor: pointer;
  position: absolute;
  z-index: 9;
  width: 100px;
  left:150px;
}
</style>
