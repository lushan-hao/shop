<template>
  <div>
    <van-nav-bar title="首页" class="head">
      <van-icon @click="$router.push('/Error')" name="search" slot="left"></van-icon>
      <van-icon
        @click="$router.push('/Mine')"
        slot="right"
      >{{JSON.stringify(userInfo) === '{}'? '未登录': userInfo.userName}}</van-icon>
    </van-nav-bar>

    <div class="homeswipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in imgAll" :key="index" class="homeswipe-index">
          <img :src="item.imgSrc">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="hot">
      <p class="hot-title">热门书籍</p>
      <swiper class="hot-price" :options="swiperOption">
        <swiper-slide class="hot-price-index" v-for="(item,index) in bookprice" :key="index">
          <img :src="item.img" @click="$router.push('/Error')" alt>
          <p class="hot-price-index-read">{{item.reading}}</p>
          <p class="hot-price-index-class">{{item.catalog}}</p>
          <p class="hot-price-index-time">
            <br>
            {{item.bytime}}
          </p>
        </swiper-slide>
      </swiper>
    </div>
    
    <div class="recommend">
      <p class="hot-title">推荐小说</p>
      <hr>
      <ul class="recommend-all">
        <li v-for="(item,index) in VarietyItem" :key="index" class="recommend-all-item">
          <img v-lazy="item.img" alt>
          <p class="hot-price-index-title">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";

export default {
  data() {
    return {
      imgAll: [
        {
          name: "img1",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548921502641&di=0fed944b7bd2821d67c483f2a2f12ccc&imgtype=0&src=http%3A%2F%2Fwww.hflz.com%2FuploadFiles%2Fimages%2F20151130%2Fcce1ba19da5b469e8323bf7addd37664%2F635844735406285628.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1766804843,2428109724&fm=26&gp=0.jpg"
        },
        {
          name: "img3",
          imgSrc: "http://pic35.photophoto.cn/20150620/0017031079860457_b.jpg"
        },
        {
          name: "img4",
          imgSrc:
            "http://img.zcool.cn/community/01d3f9554213660000019ae9b70ccc.jpg"
        }
      ],
      bookprice: [
        {
          title: "霍乱时期的爱情",
          catalog: "外国文学 小说 经典",
          tags: "外国文学经典 拉美文学 经典好书推荐 经典爱情小说 诺贝尔文学奖 ",
          img:
            "http://apis.juhe.cn/goodbook/img/d539d14fe2e9450bb58164d4866819eb.jpg",
          reading: "5620人阅读",
          bytime: "2013年4月24日"
        },
        {
          title: "京华烟云",
          catalog: "中国文学 小说",
          tags: "中国文学名著 中国近代历史 值得看的好书 小说推荐 经典好书推荐 ",
          img:
            "http://apis.juhe.cn/goodbook/img/8de57bb8f82c0f31035d25e48644f3dd.jpg",
          reading: "3754人阅读",
          bytime: "2013年4月12日"
        },
        {
          title: "宋词三百首",
          catalog: "中国文学 小说",
          tags: "中国文学名著 值得看的好书 小说推荐 经典好书推荐 ",
          img:
            "http://img60.ddimg.cn/digital/product/3/59/1901110359_ii_cover.jpg?version=9d4edc5a-28c7-4907-af64-03ff4aa3f411",
          reading: "35554人阅读",
          bytime: "2017年4月12日"
        },
        {
          title: "1984",
          catalog: "外国文学 小说 经典",
          tags: "世界名著 好书推荐 文学经典 科幻小说 讽喻小说 ",
          img:
            "http://apis.juhe.cn/goodbook/img/4dad281446fea4764dd078d7d6998c7a.jpg",
          reading: "21218人阅读",
          bytime: "2014年8月14日"
        },
        {
          title: "王子与贫儿",
          catalog: "儿童文学 经典名著 ",
          tags: "儿童文学经典作品 好书排行榜 童话小说 美国文学 讽刺小说 ",
          img:
            "http://apis.juhe.cn/goodbook/img/d9b6fb6c7b51a4959754de6a739dbec0.jpg",
          reading: "34045人阅读",
          bytime: "2014年7月30日"
        },
        {
          title: "长袜子皮皮",
          catalog: "儿童文学 经典名著 ",
          tags: "世界经典童话 儿童文学经典作品 外国文学经典 童书推荐 童年 ",
          img:
            "http://apis.juhe.cn/goodbook/img/53f6916b8b9b9cd0ab84e21f67e5dea3.jpg",
          reading: "4016人阅读",
          bytime: "2013年6月1日"
        },
        {
          title: "月亮和六便士",
          catalog: "外国文学 小说 经典",
          tags: "世界名著 好书 理想与现实 经典小说推荐 英国文学 ",
          img:
            "http://apis.juhe.cn/goodbook/img/724e8fb36260f71dc8c245edbcebb1c0.jpg",
          reading: "4824人阅读",
          bytime: "2013年6月13日"
        }
      ],
      VarietyItem: [
        {
          title: "吕思勉文集(套装共10册)",
          img:
            "http://img61.ddimg.cn/digital/product/73/93/1900717393_ii_cover.jpg?version=bf4c5d2e-2c0c-4950-8f2e-7116f5009f4a555g"
        },
        {
          title: "蒙曼品最美唐诗：人生五味",
          img:
            "http://img62.ddimg.cn/digital/product/85/56/1901108556_ii_cover.jpg?version=5d51e7eb-ed3f-4960-8368-4e86ab201841"
        },
        {
          title: "你最好的样子就是做自己",
          img:
            "http://img62.ddimg.cn/digital/product/7/92/1901110792_ii_cover.jpg?version=88f53af0-acb6-4d35-899a-a8d255f7f1a5"
        },
        {
          title: "皮囊",
          img:
            "http://img62.ddimg.cn/digital/product/30/43/1900493043_ii_cover.jpg?version=b85de2d6-6104-4e99-bd77-aadb38e6cef1"
        },
        {
          title: "东京一年",
          img:
            "http://img61.ddimg.cn/digital/product/13/32/1900701332_ii_cover.jpg?version=5cc0d1a6-d2a5-416e-a6b6-bd8edf3fe779555"
        },
        {
          title: "把生活过成你想要的样子",
          img:
            "http://img61.ddimg.cn/digital/product/67/74/1900626774_ii_cover.jpg?version=21450fd1-ab7d-4c74-bfa6-5f8f035afdc5"
        },
        {
          title: "夜航船",
          img:
            "http://img61.ddimg.cn/digital/product/25/29/1901092529_ii_cover.jpg?version=392c1486-64d8-454a-a1b0-f80981d2ba06"
        },
        {
          title: "龙应台“人生三书",
          img:
            "http://img61.ddimg.cn/digital/product/94/83/1900669483_ii_cover.jpg?version=bb06705c-5e64-4978-b387-201c0cf7087e"
        },
        {
          title: "宋词三百首",
          img:
            "http://img60.ddimg.cn/digital/product/3/59/1901110359_ii_cover.jpg?version=9d4edc5a-28c7-4907-af64-03ff4aa3f411"
        },
        {
          title: "鲁迅自编文集",
          img:
            "http://img60.ddimg.cn/digital/product/19/42/1900631942_ii_cover.jpg?version=a1d43637-daf6-4bde-899f-09bad9243632555"
        },
        {
          title: "摸金天师",
          img:
            "http://img61.ddimg.cn/digital/product/43/44/1960404344_ii_cover.jpg?version=689e94ff-d852-400b-a009-82e1afc4d862"
        },
        {
          title: "女总裁的特种神医",
          img:
            "http://img61.ddimg.cn/digital/product/58/17/1960395817_ii_cover.jpg?version=6fea8d6b-4274-446d-aef3-aff2c6a22a09"
        },
        {
          title: "残阳帝国",
          img:
            "http://img60.ddimg.cn/digital/product/4/22/1960410422_ii_cover.jpg?version=463af6d7-a47e-490b-85b5-7917f854eccf"
        },
        {
          title: "我的26岁女房客",
          img:
            "http://img62.ddimg.cn/digital/product/57/8/1960395708_ii_cover.jpg?version=8182c13d-436a-4ec9-a48b-5526cb81ec65"
        },
        {
          title: "全能透视",
          img:
            "http://img60.ddimg.cn/digital/product/28/96/1960402896_ii_cover.jpg?version=97fe0be0-e4ce-491d-ac7b-efe4fc131607"
        },
        {
          title: " 致命邂逅：我的美女老板",
          img:
            "http://img62.ddimg.cn/digital/product/10/59/1960401059_ii_cover.jpg?version=4e95e613-d380-4c05-812f-ef7a809f2987"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.homeswipe {
  margin-top: 1rem;
  height: 3rem;
  &-index {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.hot {
  background-color: #eee;
  &-title {
    font-size: 0.35rem;
    height: 0.4rem;
    line-height: 0.4rem;
    padding-top: 0.2rem;
    text-align: center;
    padding-bottom: 0.2rem;
  }
  &-price-index {
    width: 2.15rem !important ;
    text-align: center;
    &-title {
      font-size: 0.25rem;
      font-weight: 600;
      color: #272727;
    }
    img {
      width: 1.6rem;
      height: 2.2rem;
    }
    &-read {
      font-size: 0.1rem;
      opacity: 0.5;
    }
    &-time {
      margin-top: -0.5rem;
      font-size: 0.12rem;
    }
    &-class {
      height: 0.5rem;
    }
  }
}
.recommend {
  background-color: #eee;
  margin-bottom: 1rem;
  &-all {
    clear: both;
    overflow: hidden;
    &-item {
      width: 50%;
      float: left;
      text-align: center;
      padding-top: 0.2rem;
      img {
        width: 2.2rem;
        height: 2.8rem;
      }
    }
  }
}
</style>
