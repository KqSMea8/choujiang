<template>
    <div class="container">
          <div class="box" :class="videoshow == 1?'hide' : 'show'">
            <div class="cookies">
              <img id="cookies" src="./static/home.png" alt="cookies">
            </div>
            <div class="bea">
              <div class="arm bea-arm"></div>
              <div class="hand bea-hand"></div>
            </div>
            <div class="santa">
              <div class="arm santa-arm"></div>
              <div class="hand santa-hand"></div>
            </div>

            <!--      <div class="santa santa2">
                        <div class="arm santa-arm"></div>
                        <div class="hand santa-hand"></div>
                    </div> -->
            <!--     <div class="bea2">
                        <div class="arm bea-arm"></div>
                        <div class="hand bea-hand"></div>
                    </div> -->
          </div>
        <video :class="videoshow == 1?'show' : 'hide'" preload x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portrait">
            <source src="./static/videoplayback.mp4" type="video/mp4">
        </video>
        <img class="lingdang animated infinite swing" v-if="lingshow" src="./static/lingdang.jpg" @click="jump" alt="">
        <button v-if="btnshow" class="start" @click="click">开始</button>
    </div>
</template>
<script>

    export default {
        components: {
        },

        methods: {
            click() {
                this.videoshow = 1;
                let video = document.querySelector('video');
                video.load();
                var playPromise = video.play();
                this.btnshow = false;
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                      // 这个时候可以安全的暂停
                      // video.pause();
                      // this.videoshow = 0;
                    })
                    .catch(error => {

                    });
                }
                video.addEventListener("ended",() => {
                     this.videoshow = 0;
                     this.lingshow = true;
                });
                // this.$router.push('/');
            },
            jump() {
                this.$router.push('/two');
            }
        },

        data(){
            return {
                videoshow: 0,
                lingshow: false,
                btnshow: true
            };
        },
        mounted() {
            let video = document.querySelector('video');
            var playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                  // 这个时候可以安全的暂停
                  video.pause();
                })
                .catch(error => {

                });
            }
            document.addEventListener("WeixinJSBridgeReady", function() {
                document.getElementById('video').play();
            }, false);
        },
        created() {
        }
    };
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
