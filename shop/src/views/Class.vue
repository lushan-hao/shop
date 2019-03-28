<template>
  <div>
    <van-nav-bar title="商品类别"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              @click="selectCategory(item.typeId, index)"
              :class="{active:active==index}"
              v-for="(item,index) in types"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" v-model="isLoading" :finished="finished" @load="onLoad">
            <div @click="goDetail(item._id)" class="content-item" v-for="(item, index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      types: [],
      active: 0,
      productList: [],
      typeId: 1, // 当前选中类型的id
      start: 0,
      limit: 10,
      finished: false, //是否数据取完
      isLoading: false // 上拉加载
    };
  },
  created() {
    // this.getProductList(this.typeId, this.active);
    axios({
      url: url.getTypes
    })
      .then(res => {
        this.types = res.data;
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {
        console.log(err);
                  this.$toast.fail("获取失败");
      });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.getProductList();
    },
    getProductList() {
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit,
        }
      })
        .then(res => {
             if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
            // console.log(this.productList);
        })
        .catch(err => {
          // console.log(err);
          this.$toast.fail("获取失败");
        });
    },
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 2000);
    },
     onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    },
    goDetail(id){
      // axios({
      //   url : url.
      // }).then().catch()
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #eee;
  li {
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background: #ffffff;
  }
}
.container {
  position: fixed;
  top: 46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>