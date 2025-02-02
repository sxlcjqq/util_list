<template>
  <div ref="mount">
  </div>
</template>

<script>
import * as THREE from 'three';
// import teapotModel from '../three/obj/jian.obj'
// import teapotModelMtl from '../three/obj/unicorngumroad.mtl'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
// import { MTLLoader, OBJLoader } from 'three-obj-loader';
// import { OBJLoader } from 'three-obj-loader';
export default {
  name: "three",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      canvasWidth: 500,
      canvasHeight: 500
    };
  },
  computed:{
  },
  created() {},
  mounted() {
    this.initScene();
    this.renderScene();
  },
  watch: {},
  methods: {
    initScene() {
      // 创建场景
      this.scene = new THREE.Scene();

      // 创建相机
      this.camera = new THREE.PerspectiveCamera(
        75, // 视角
        this.canvasWidth / this.canvasHeight, // 宽高比
        0.1, // 近平面
        1000 // 远平面
      );

      // 创建渲染器
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.canvasWidth, this.canvasHeight);
      this.$refs.mount.appendChild(this.renderer.domElement);

      // 创建其他需要的 Three.js 对象并添加到场景中

      // 设置相机位置
      this.camera.position.z = 5;
    },
    loadTeapotModel() {
      // 加载茶壶模型文件
      // const mtlLoader = new MTLLoader()
      // mtlLoader.load(teapotModelMtl, (mtl) => {
      //   mtl.preload()
      //   const objLoader = new OBJLoader()
      //   objLoader.setMaterials(mtl)
      //   // 设置茶壶缩放和位置
      //   // object.scale.set(0.1, 0.1, 0.1);
      //   // object.position.set(0, 0, 0);

      //   // 加载模型
      //   objLoader.load(teapotModel, (root) => {
      //     scene.add(root)
      //   })
      // })

      // const objLoader = new OBJLoader()
      // objLoader.setMaterials(mtl)
      // 设置茶壶缩放和位置
      // object.scale.set(0.1, 0.1, 0.1);
      // object.position.set(0, 0, 0);

      // 加载模型
      // objLoader.load(teapotModel, (root) => {
      //   this.scene.add(root)
      // })
    },
    renderScene() {
      requestAnimationFrame(this.renderScene);

      // 更新场景中的对象状态
      // ...

      // 渲染场景
      this.renderer.render(this.scene, this.camera);
    }
  },
  filters: {}
};
</script>


<style scoped  lang="scss">
</style>
