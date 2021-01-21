<template>
  <div id="app">
         <span>小米九</span>
         <br>
        数量：{{count}}
        <input type="text" v-model="message">
        <button :disabled="count<1"  @click="$store.commit('increment',message)">购买</button>
        <!-- <button @click="$store.commit('increment2')">购买2个</button> -->
  </div>
</template>

<script>
export default {
  name:'App',
  computed:{
    count(){
      if(this.$store.state.count<0){
        return 0;
      }
      return this.$store.state.count
    },
    message:{
      get(){
        if(this.$store.state.message>this.$store.state.count){
          this.$store.state.message=this.$store.state.count
        }
        return this.$store.state.message;
      },
      set(message){
        this.$store.state.message=message
      }
    }
  }
  
}
</script>

<style>

</style>