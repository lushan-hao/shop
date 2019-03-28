<template>
  <div>
    <van-nav-bar class="header" title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item, index) in pruductList"
        :key="index"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="small" @click="cut(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>
     <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/service.config.js";

export default {
  data() {
    return {
      pruductList: [],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
        return this.pruductList.reduce((sum, elem)=>{
            sum += elem.price;
            return sum;
        }, 0) * 10 * 10;
    }
  },
  created() {
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/mine");
      }, 1000);
    } else {
      axios({
        url: url.getCar,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          for (let item of res.data) {
            this.pruductList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      this.$toast.fail("对不起，我们不卖");
    },
    cut(id, index){
      axios({
        url:url.cutdata,
        method: "post",
        data: {
          id: id,
        }
      }).then(res=>{
         this.pruductList.splice(index, 1);
      }).catch(err=>{
        this.$toast.fail("删除失败");
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  width: 100%;
}
.submit-bar {
  margin-bottom: 1rem;
}
.card{
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>