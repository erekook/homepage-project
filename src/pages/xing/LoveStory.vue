<template>
    <div id="mainDiv">
		<div id="content">
			<div id="code" ref="code">
				<span class="comments">/**</span><br />
				<span class="space"/><span class="comments">* Dear Xing,</span><br />
				<span class="space"/><span class="comments">* I write some code to celebrate your birthday.</span><br />
				<span class="space"/><span class="comments">*/</span><br />
				Boy i = <span class="keyword">new</span> Boy(<span class="string">"longjie"</span>);<br />
				Girl u = <span class="keyword">new</span> Girl(<span class="string">"xing"</span>);<br />
				<span class="comments">// July 16, 2017, I told you I love you. </span><br />
				i.love(u);<br />
				<span class="comments">// Luckily, you accepted and became my girlfriend eversince.</span><br />
				u.accepted();<br />
				<span class="comments">// Since then, I miss u every day.</span><br />
				i.miss(u);<br />
				<span class="comments">// And take care of u and our love.</span><br />
				i.takeCareOf(u);<br />
				<span class="comments">// I swear I couldn't love you more than I do right now,</span><br />
				<span class="comments">// and yet I know I will tomorrow.</span><br />
				<span class="keyword">boolean</span> isAlive = <span class="keyword">true</span>;<br />
				<span class="keyword">while</span> (isAlive) {<br />
				<span class="placeholder"/>i.love(u);<br/>
                <span class="placeholder"/>i.kiss(u);<br/>
				}<br />
			</div>
			<div id="loveHeart">
				<canvas id="garden"></canvas>
                    <div id="words" >
                        <transition name="fade">
                            <div id="messages" v-if="messageShow">
                                Xing, I have fallen in love with you for
                                <div id="elapseClock">
                                    <span class="digit">{{time[0]}}</span> days
                                    <span class="digit">{{time[1]}}</span> hours
                                    <span class="digit">{{time[2]}}</span> minutes
                                    <span class="digit">{{time[3]}}</span> seconds
                                </div>
                            </div>
                        </transition>
                        <transition name="slide-fade">
                            <div id="loveu" v-if="loveuShow">
                                Love u forever and ever.<br/>
                                <div class="signature">- longjie</div>
                            </div>
                        </transition>
                    </div>
			</div>
		</div>
        <transition name="slide-fade">
            <div v-if="nextShow" class="next-page" @click="handleToNextPage">
                <h2>GO GO GO</h2>
                <img style="width:3em;height:3em;" src="../../assets/images/ic_next.png" alt="还不看看下一页吗？" >
            </div>
        </transition>

	</div>
</template>

<script>
import { Garden } from '../../assets/js/garden'
export default {
    name: 'love-story',
    data () {
        return {
            offsetX: 0,
            offsetY: 0,
            garden: null,
            messageShow: true,
            loveuShow: true,
            nextShow: true,
            loveDay: null,
            time: [0, 0, 0, 0],
            typeInterval: null
        }
    },
    mounted () {
        let that = this
        this.initLoveDay()

        setTimeout(function () {
            that.initFlower()
        }, 5000)

        this.timeElapse(this.loveDay)
        setInterval(function () {
			that.timeElapse(that.loveDay);
        }, 500);

        this.typewriter()
    },
    destroyed () {
        if (this.typeInterval) {
            clearInterval(this.typeInterval)
        }
    },
    methods: {
        initFlower () {
            let that = this
            let gardenCtx, gardenCanvas
            let loveHeart = document.getElementById("loveHeart")
            this.offsetX = loveHeart.clientWidth / 2
            this.offsetY = loveHeart.clientHeight / 2 - 55
            // var a = $loveHeart.width() / 2;
            // var b = $loveHeart.height() / 2 - 55;
            let garden1 = document.getElementById("garden")
            // $garden = $("#garden");
            gardenCanvas = garden1;
            gardenCanvas.width = loveHeart.clientWidth;
            gardenCanvas.height = loveHeart.clientHeight;
            gardenCtx = gardenCanvas.getContext("2d");
            gardenCtx.globalCompositeOperation = "lighter";
            this.garden = new Garden(gardenCtx, gardenCanvas);
            console.log(this.garden)
            setInterval(function() { that.garden.render() }, Garden.options.growSpeed)
            this.startHeartAnimation()
        },

        initLoveDay () {
            this.loveDay = new Date()
            this.loveDay.setFullYear(2017, 6, 16);
            this.loveDay.setHours(20);
            this.loveDay.setMinutes(0);
            this.loveDay.setSeconds(0);
            this.loveDay.setMilliseconds(0);
        },

        timeElapse (c) {
            var e = Date();
            var f = (Date.parse(e) - Date.parse(c)) / 1000;
            var g = Math.floor(f / (3600 * 24));
            f = f % (3600 * 24);
            var b = Math.floor(f / 3600);
            if (b < 10) { b = "0" + b }
            f = f % 3600;
            var d = Math.floor(f / 60);
            if (d < 10) { d = "0" + d }
            f = f % 60;
            if (f < 10) { f = "0" + f }
            // var a = '<span class="digit" style="font-size:36px;font-family:"digit";">' + g + '</span> days <span class="digit" style="font-size:36px;font-family:"digit";">' + b + '</span> hours <span class="digit" style="font-size:36px;font-family:"digit";">' + d + '</span> minutes <span class="digit" style="font-size:36px;font-family:"digit";">' + f + "</span> seconds";
            this.time = [g, b, d, f]
        },
        /**
         * 逐字打印
         */
        typewriter () {
            let codeHtml = document.getElementById("code").innerHTML
            let b = 0;
            document.getElementById("code").innerHTML = ""
            this.typeInterval = setInterval(function() {
                var f = codeHtml.substr(b, 1);
                if (f == "<") {
                    b = codeHtml.indexOf(">", b) + 1
                } else {
                    b++
                }
                document.getElementById("code").innerHTML = codeHtml.substring(0, b) + (b & 1 ? "_" : "")
                if (b >= codeHtml.length) { clearInterval(this.typeInterval) }
            }, 75)
        },
        getHeartPoint (c) {
            var b = c / Math.PI;
            var a = 19.5 * (16 * Math.pow(Math.sin(b), 3));
            var d = -20 * (13 * Math.cos(b) - 5 * Math.cos(2 * b) - 2 * Math.cos(3 * b) - Math.cos(4 * b));
            return new Array(this.offsetX + a, this.offsetY + d)
        },
        startHeartAnimation() {
            let that = this
            var c = 50;
            var d = 10;
            var b = new Array();
            var a = setInterval(function() {
                var h = that.getHeartPoint(d);
                var e = true;
                for (var f = 0; f < b.length; f++) { var g = b[f]; var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2)); if (j < Garden.options.bloomRadius.max * 1.3) { e = false; break } }
                if (e) {
                    b.push(h);
                    that.garden.createRandomBloom(h[0], h[1])
                }
                if (d >= 30) {
                    clearInterval(a);
                    that.messageShow = true
                    setTimeout(function () {
                        that.loveuShow = true
                        that.nextShow = true
                    }, 1000)
                } else { d += 0.2 }
            }, c)
        },
        handleToNextPage () {
            this.$router.push({
                name: 'love-photo'
            })
        },
    }
}
</script>

<style scoped>
    @font-face {
        font-family: digit;
        src: url('../../assets/font/digital-7_mono.ttf') format("truetype");
    }
    #mainDiv {
        width:100%;
        height:100%
    }

    @media screen and (min-width: 1200px) {
        #code{
            float:left;
            width:440px;
            height:400px;
            color:#333;
            font-family:"Consolas","Monaco","Bitstream Vera Sans Mono","Courier New","sans-serif";
            font-size:12px;
            margin-top: 20em;
            margin-left: 30em;
        }
        #loveHeart{
            float:left;
            width:670px;
            height:625px;
            margin-top: 10em;
            margin-left: 10em;
        }
        #words{
            font-family:"sans-serif";
            width:500px;
            height: 500px;
            font-size:2rem;
            color:#666;
            position: absolute;
            top: 10em;
            left: 57%;
        }
        #loveu{
            padding:5px;
            font-size: 1.5rem;
            margin-top: 2.5em;
            margin-right: 5.5em;
            text-align:right;
        }
        #loveu .signature{
            margin-top:10px;
            font-size:20px;
            font-style:italic;
        }
        #elapseClock{
            text-align:right;
            font-size: 1rem;
            margin-top:10px;
            margin-bottom:10px;
            padding-right: 10px;
        }
        #elapseClock .digit{
            font-family:"digit";
            font-size: 2rem;
        }
        .next-page {
            position: absolute;
            top: 40%;
            right: 50px;;
            text-align: center;
            color: #E64725;
        }
    }
    @media screen and (max-width: 400px) {
        #content {
            width:100%;
            height:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #code{
            width:85%;
            /* height:100em; */
            color:#333;
            font-family:"Consolas","Monaco","Bitstream Vera Sans Mono","Courier New","sans-serif";
            font-size: .5rem;
            margin-top: 5em;
        }
        #loveHeart{
            width: 80%;
            height: 500px;
            /* height: 280em; */
            margin-top: 5em;
            position: relative;
        }
        #words{
            font-family:"sans-serif";
            width: 85%;
            /* height: 100em; */
            font-size: 1rem;
            color:#666;
            position: absolute;
            top: 2em;
            left: 1.5em;
        }
        #loveu{
            padding:5px;
            font-size: 1rem;
            /* margin-top: 2.5em;
            margin-right: 5.5em; */
            text-align:right;
        }
        #loveu .signature{
            margin-top: .8em;
            font-size: 1.5rem;
            font-style:italic;
        }
        #elapseClock{
            text-align:right;
            font-size: 1rem;
            margin-top: 1em;
            margin-bottom: 1em;
            /* padding-right: 1em; */
        }
        #elapseClock .digit{
            font-family:"digit";
            font-size: 1.5rem;
        }
        .next-page {
            /* position: absolute;
            top: 40%;
            right: 50px;; */
            text-align: center;
            color: #E64725;
            margin-top: 2em;
        }
    }



    #garden{
        width:100%;
        height:100%;
    }


    /* #messages{
        display:none
    } */



    #clickSound{
        display:none;
    }

    #code .string{
        color:#2a36ff;
    }
    #code .keyword{
        color:#7f0055;
        font-weight:bold;
    }
    #code .placeholder{
        margin-left:15px;
    }
    #code .space{
        margin-left:7px;
    }
    #code .comments{
        color:#3f7f5f
    }
    #errorMsg{
        width:100%;
        text-align:center;
        font-size:24px;
        position:absolute;
        top:100px;left:0
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(20px);
        opacity: 0;
    }


</style>