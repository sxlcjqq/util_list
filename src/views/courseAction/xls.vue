<template>
  <div class="xls">
    <div v-for="(x,index) in title">
      
    </div>
    <div v-for="(x,index) in list">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "xls",
  data() {
    return {
      title: ['名称','']
    };
  },
  computed:{
  },
  created() {},
  mounted() {
  },
  watch: {},
  methods: {
  },
  filters: {}
};
</script>


<style scoped  lang="scss">
.xls{
}
</style>
