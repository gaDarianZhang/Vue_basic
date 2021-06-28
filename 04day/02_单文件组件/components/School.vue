/* 
	较真来讲：当前的这个.vue文件，并不是一个组件，而是一个组件的所有配置
 */
<template>
  <div>
    <h2 class="title">学校：{{name}}</h2>
    <h2 class="info" @click="showAddress">地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  //此处只是暴露了一个组件的配置，并没有去创建组件，因为没有调用Vue.extend
  data() {
    console.log('school data');
    return {
      name:'uest',
      address:'Chengdu, sichuan province'
    }
  },
  methods:{
    showAddress(){
      alert(this.address)
    }
  }
}
</script>

<style lang="css">
  .title{
    background-color: aqua;
  }
  .info{
    background-color: olivedrab;
  }
</style>