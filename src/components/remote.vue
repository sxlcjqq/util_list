<template>
    <remote-js src="//g.alicdn.com/sd/smartCaptcha/0.0.1/index.js"></remote-js>
</template>
<script>
export default {
  name: "remmote",
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    }
  }
};
</script>
