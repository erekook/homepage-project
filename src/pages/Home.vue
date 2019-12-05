<template>
  <div class="home" :style="{ backgroundImage: bgImg }">
      <div class="quote">
          {{quote}}
      </div>
      <div class="container">
          <h2>LONGJIETAN'S WEBSITE</h2>
          <ul class="menu">
              <li>MY BLOGS</li>
              <li>TODOS</li>
              <li @click="handleToStory">OUR LOVE STORY</li>
              <li>CONTACT ME</li>
          </ul>
      </div>
  </div>
</template>

<script>
import bgImage01 from '../assets/images/bg_nesSimpleDesktop.png'
import bgImage02 from '../assets/images/bg_block_search.png'
import bgImage03 from '../assets/images/bg_Ink_Bottle_Droplets.png'

export default {
    name: 'home',
    data () {
        return {
            quote: '恭祝我幸宝生日啦~爱你',
            bgImgs: [
                bgImage01,
                bgImage02,
                bgImage03,
            ],
            bgImg: ''
        }
    },
    mounted () {
        this.initBG()
        // this.getQuote()
    },
    methods: {
        initBG () {
            let rand = parseInt(Math.random() * this.bgImgs.length, 10)
            this.bgImg = 'url(' + this.bgImgs[rand] + ')'
        },
        handleToStory () {
            this.$router.push({
                name: 'love-story'
            })
        },
        getQuote () {
            this.$http.get('/api/v1/quote/quotes')
                .then((res) => {
                    console.log(res)
                    this.quote = res.data
                }, err => {
                    console.log(err)
                })
        },
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 1px;

}

@media (min-width: 1200px) {
    .container {
        width: 50%;
        /* height: 20em; */
        margin: 0 auto;
        background: rgba(0, 0, 0, .4);
        border-radius: 20px;
        padding: 0.5em;
    }
    .quote {
        width: 50%;
        height: auto;
        margin: 2em auto;
        font-size: 2rem;
        color: #ffffff;
        font-weight: bold;
        background: rgba(0, 0, 0, .4);
        border-radius: 10px;
        padding: .5em 0;
    }
    h2 {
        font-size: 2.5rem;
        color: #ffffff;
    }
}


@media (max-width: 400px) {
    .container {
        width: 80%;
        margin: 0 auto;
        background: rgba(0, 0, 0, .4);
        border-radius: 20px;
        padding: 0.5em;
    }
    .quote {
        width: 85%;
        height: auto;
        margin: 2em auto;
        font-size: 2rem;
        color: #ffffff;
        font-weight: bold;
        background: rgba(0, 0, 0, .4);
        border-radius: 10px;
        padding: .5em 0;
    }
    h2 {
        font-size: 2rem;
        color: #ffffff;
    }
}



.menu {
    list-style: none;
    padding: 0;
}

.menu>li {
    text-align: left;
    color: #ffffff;
    font-size: 2rem;
    background: rgba(0, 0, 0, .7);
    margin-bottom: 0.5em;
    border-radius: 15px;
    padding: 0.2em 0.5em;
}

.menu>li:hover {
    display: block;
    color: black;
    background: #ffffff;
}

</style>