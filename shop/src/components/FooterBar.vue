<template>
  <div>
    <van-tabbar class="foot-bar" v-model="active" @change="change">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="ellipsis" to="/class">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o"  to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created(){
    this.active = parseInt(localStorage.getItem('active'));
  },
  methods:{
    change(active){
      localStorage.setItem('active',active);
    }
  }
};
</script>


<style lang="scss">
.foot-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
}
</style>
