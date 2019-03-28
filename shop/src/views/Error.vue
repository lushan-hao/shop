<template>
  <div @click="back">
      <img :src="img.url" alt="">
  </div>
</template>


<script>
export default {
    data(){
        return{
            img:{
            url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2299622565,1544540595&fm=26&gp=0.jpg'
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="scss">
img{
    width: 100%;
    height: 100%;
}
</style>
