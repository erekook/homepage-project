<template>
  <div>
    <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide v-for="n in 19" :key="n">
                    <img class="img-item" :src="$imageUrl('list-photo'+n+'.jpg')" alt="">
                    <p class="img-tip">{{imgTips[n-1]}}</p>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
    </div>
    <div class="next-page">
        <h2>还有哦~</h2>
        <img style="width:3em;height:3em;" src="../../assets/images/ic_next.png" alt="还不看看下一页吗？" @click="handleToNextPage">
    </div>
  </div>

</template>

<script>
export default {
    name: 'love-swiper',
    data() {
      return {
        swiperOption: {
          effect: 'cube',
          autoplay: true,
          duration: 500,
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 10,
            shadowScale: 0.94
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        imgTips: [
            '哈哈哈，你怎么这么可爱！',
            '上一个冬天，是短发耶~',
            '笑的好开心，丘米！',
            '日常偷拍，一只小睡猪，zZZZ',
            'emmmmm,这是微胖的幸宝宝',
            '捕捉一只努力的幸宝宝',
            'wow,是文艺的幸宝宝诶',
            '还记得吗，这是去吃火鸡面的时候，最后辣哭的样子哈哈哈',
            '小圆寸真的很丑，o(╥﹏╥)o',
            '幸·真双眼皮·梅',
            '又是一张睡猪~口水流下来了！',
            '看看，这腿，能玩好几年！',
            '哟，这么好学呢，美女',
            '我佛了！大哥',
            '这张可以，很美丽！么么哒',
            '烫头.jpg',
            '哦~哈哈哈哈，觉得太丑哭了，真的不丑啦，很漂亮！',
            '又偷吃什么玩意了~狗贼',
            '这是咋了，没睡醒吗？？？'
        ]
      }
    },
    methods: {
        handleToNextPage () {
            this.$router.push({
                name: 'happy-birthday'
            })
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    @media screen and (min-width: 1200px) {
        .swiper-inner {
            position: relative;
            overflow: hidden;
            height: 700px;
            padding: 15px;
        }
        .swiper-container {
            width: 600px!important;
            height: 700px;
            position: absolute;
            left: 46%;
            top: 20%;
            margin-left: -150px;
            margin-top: -150px;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
        }

        .swiper-pagination {
            bottom: -50px;
        }
        .next-page {
            position: absolute;
            top:85%;
            left: 50%;
            text-align: center;
            color: #E64725;
        }
    }

    @media screen and (max-width: 400px) {
        .swiper-inner {
            position: relative;
            overflow: hidden;
            height: 80%;
            padding: 1.5em;
        }
        .swiper-container {
            width: 90%!important;
            height: 30em;
            position: absolute;
            left: 46%;
            top: 20%;
            margin-left: -150px;
            margin-top: -150px;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
        }

        .swiper-pagination {
            bottom: -50px;
        }
        .next-page {
            position: absolute;
            top: 30em;
            left: 40%;
            text-align: center;
            color: #E64725;
        }
    }
   
    .img-item {
        display: block;
        width: 100%;
        height: 100%;
    }

    .img-tip {
        color: #E64725;
        font-size: 1.2rem;
        text-align: center;
    }
    

</style>