<template>
  <div class="circleProgress">
    <canvas id="circleProgress"></canvas>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "circleProgress",
  props: {
    percent: {
      default: 0
    },
    scale: {
      default: 1
    }
  },
  data() {
    return {
      el: "circleProgress",
      canvas: null,
      ctx: null,
      canvaswidth: 0,
      canvasData: {
        circleX: 0, // 中心x坐标
        circleY: 0, // 中心y坐标
        radius: 0, // 圆环半径
        lineWidth: 0 // 圆形线条的宽度
      },
      angle: 0, //角度，从0-270
      circleLoading: null,
      interval: 0,
      resizeTimer: null
    };
  },
  created() {},
  computed: {},
  mounted() {
    $(window).bind("resize", () => {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.initinit();
      }, 100);
    });
    this.initinit();
  },
  watch: {
    percent(n, o) {
      if (n != o) {
        this.init();
      }
    }
  },
  methods: {
    initinit() {
      if($('.circleProgress').length){
        this.canvaswidth = $(window).width()*0.432 || 324;
        this.canvasData.lineWidth = $(window).width() * 0.032 || 24;
        this.canvas = document.getElementById(this.el);
        if (this.canvas) {
          this.canvas.height = this.canvaswidth;
          this.canvas.width = this.canvaswidth;
          this.canvasData.circleX = this.canvaswidth / 2;
          this.canvasData.circleY = this.canvaswidth / 2;
          this.canvasData.radius = this.canvaswidth / 2;
          this.ctx = this.canvas.getContext("2d");
          this.init();
        }
      }
    },
    bg(cx, cy, r) {
      var thickness = this.canvasData.lineWidth;
      var innerRadius = r - thickness;
      //画圆
      this.ctx.beginPath();
      this.ctx.fillStyle = "#d1e5fd";
      this.ctx.arc(cx, cy, r, Math.PI * 1.5, Math.PI);
      this.ctx.quadraticCurveTo(
        ...this.returnxy(cx, cy, r - thickness / 2, 180 + 6),
        ...this.returnxy(cx, cy, innerRadius, 180)
      );
      this.ctx.arc(cx, cy, innerRadius, Math.PI, Math.PI * 1.5, true);
      this.ctx.quadraticCurveTo(
        ...this.returnxy(cx, cy, r - thickness / 2, -96),
        ...this.returnxy(cx, cy, r, -90)
      );
      this.ctx.fill();
    },
    progressCircle(cx, cy, r, angle) {
      var thickness = this.canvasData.lineWidth;
      var innerRadius = r - thickness;
      var grd = this.ctx.createLinearGradient(
        (5 * r) / 3,
        r / 3,
        r / 3,
        (5 * r) / 3
      );
      var anglePoint = angle - 90;
      grd.addColorStop(0, "#3581DF");
      grd.addColorStop(1, "#8789F5");
      this.ctx.fillStyle = grd;
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, r, Math.PI * 1.5, Math.PI * (1.5 + angle / 180));
      this.ctx.quadraticCurveTo(
        ...this.returnxy(cx, cy, r - thickness / 2, anglePoint + 6),
        ...this.returnxy(cx, cy, innerRadius, anglePoint)
      );
      this.ctx.arc(
        cx,
        cy,
        innerRadius,
        Math.PI * (1.5 + angle / 180),
        Math.PI * 1.5,
        true
      );
      this.ctx.quadraticCurveTo(
        ...this.returnxy(cx, cy, r - thickness / 2, -96),
        ...this.returnxy(cx, cy, r, -90)
      );
      this.ctx.fill();
    },
    returnxy(x, y, r, angle) {
      return [
        x + r * Math.cos((angle * Math.PI) / 180),
        y + r * Math.sin((angle * Math.PI) / 180)
      ];
    },
    loading() {
      // 清除canvas内容
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvaswidth, this.canvaswidth);
      }

      // 圆形
      this.bg(
        this.canvasData.circleX,
        this.canvasData.circleY,
        this.canvasData.radius
      );
      if (this.percent > 0) {
        // 圆弧
        this.progressCircle(
          this.canvasData.circleX,
          this.canvasData.circleY,
          this.canvasData.radius,
          this.angle
        );
        if (
          this.angle >= this.percent * 2.7 ||
          this.angle < 0 ||
          this.angle > 270
        ) {
          window.clearInterval(this.circleLoading);
        } else if (this.angle + this.interval >= this.percent * 2.7) {
          this.angle = this.percent * 2.7;
          this.progressCircle(
            this.canvasData.circleX,
            this.canvasData.circleY,
            this.canvasData.radius,
            this.angle
          );
          window.clearInterval(this.circleLoading);
        } else {
          this.angle += this.interval;
        }
      }
    },
    init() {
      this.angle = 0;
      this.circleLoading && window.clearInterval(this.circleLoading);
      this.circleLoading = null;
      this.interval = this.percent / 5;
      this.circleLoading = window.setInterval(() => {
        this.loading();
      }, 20);
    }
  },
  filters: {},
  destroyed() {
    this.circleLoading && window.clearInterval(this.circleLoading);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.circleProgress {
  canvas {
    transform: rotate(-135deg);
  }
}
</style>
