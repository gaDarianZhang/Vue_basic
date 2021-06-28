<script>
import School from './School.vue'
export default {
  data(){
    console.log("hello component");
    return{
      word:'你好'
    }
  },
  components:{"School":School}
}
</script>

<template>
  <div>
    <h1>Hello</h1>
    <School/>
  </div>
</template>

<style>
  h1{
    color: red;
  }
</style>