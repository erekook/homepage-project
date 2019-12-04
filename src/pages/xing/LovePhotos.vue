<template>
    <div>

        <div class="my-container">  <!-- 大容器 -->
            <div class="photo-wrap">  <!-- 舞台 -->
                <div class="container">   <!-- 相册容器 -->
                    <div v-for="n in 9" :key="n"  :class="'img0' + n + ' img'">
                        <img class="img-item" :src="$imageUrl('photo'+n+'.jpg')" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="next-page">
            <h2>我的脑袋是个小小星球，每天只有你开着月亮列车巡游</h2>
            <img style="width:3em;height:3em;" src="../../assets/images/ic_next.png" alt="还不看看下一页吗？" @click="handleToNextPage">
        </div>
    </div>

</template>

<script>
export default {
    name: 'love-photo',
    methods: {
        handleToNextPage () {
            this.$router.push({
                name: 'love-swiper'
            })
        }
    }
}
</script>

<style scoped>
    .my-container {        
        width: 800px;
        height: 500px;
        margin: 20px auto;
    }
    .photo-wrap {
        perspective: 800px;
        width: 800px;
    }
    .container {
        width: 800px;
        height: 500px;
        margin: 0 auto;
        position: relative;
        transform-style: preserve-3d;
        animation: rotateY360 30s ease-in-out infinite;
    }
    .img {
        width: 200px;
        height: 150px;
        line-height: 118px;
        text-align: center;
        position: absolute;
        top: 160px;
        left: 300px;
        /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.9) inset; */
        /* background: pink; */
    }

    .img-item {
        display: block;
        width: 100%;
        height: 100%;
    }
    .img01 {
        transform: rotateY(0deg) translateZ(350px);
    }
    .img02 {
        transform: rotateY(40deg) translateZ(350px);
    }
    .img03 {
        transform: rotateY(80deg) translateZ(350px);
    }
    .img04 {
        transform: rotateY(120deg) translateZ(350px);
    }
    .img05 {
        transform: rotateY(160deg) translateZ(350px);
    }
    .img06 {
        transform: rotateY(200deg) translateZ(350px);
    }
    .img07 {
        transform: rotateY(240deg) translateZ(350px);
    }
    .img08 {
        transform: rotateY(280deg) translateZ(350px);
    }
    .img09 {
        transform: rotateY(320deg) translateZ(350px);
    }
    @keyframes rotateY360 {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }

    .next-page {
        text-align: center;
        color: #E64725;
    }
</style>