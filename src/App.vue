<template>
    <div>
     <top></top>
     <index></index>
    </div>
</template>

<script>
import Top from './components/Top.vue'
import Index from './components/Index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    Top,
    Index
  },
  methods:{
  
  }
}
</script>

<style>
a{
  list-style: none;
  text-decoration: none;
}
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
</style>