<template>
  <div>
    <Hello/>
		<h2>我是App，我有一台{{car}}</h2>
		<School/>
	</div>
</template>

<script>
import Hello from './components/Hello'
import School from './components/School.vue'
export default {
  data() {
    return {
      car:'马自达'
    }
  },
  comments:{School,Hello}
}
</script>