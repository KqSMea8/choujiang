<template>
    <div class="container">
          <div class="box" :class="boxshow == 1?'show' : 'hide'">
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
        <video id="video" :class="videoshow == 1?'show' : 'hide'" preload x5-video-player-type="h5" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-fullscreen="true" x5-video-orientation="portrait">
            <source src="./static/videoplayback.mp4" type="video/mp4">
        </video>
        <canvas :class="canvasShow == 1?'show' : 'hide'" id="testCanvas" style="width:100%; vertical-align:middle;"></canvas>
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
                // this.canvasShow = 1;
                this.boxshow = 0;
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
                     this.canvasShow = 0;
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
                canvasShow: 0,
                videoshow: 0,
                boxshow: 1,
                lingshow: false,
                btnshow: true
            };
        },
        mounted() {
            //判断是否为安卓设备
            function isAndroid(){
                var u = navigator.userAgent;
                if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
                    return true;
                }
            }
            // let $video = document.querySelector('video');
            var $video = $('#video');
                
            if(isAndroid()){
                this.canvasShow = 1;
                $video.css('display','none');
                /*以上配置 安卓 机解所需元素及相关属性*/
                var videoW , videoH;
                setTimeout(function(){
                    videoW = $video.width() * 3;
                    videoH = $video.height() * 3;
                    TestCanvas.width = videoW;
                    TestCanvas.height = videoH;

                    //之所以这里要播放下，是因为经过测试，第一次点击CANVAS时，视频播放又立即停止了
                    let playPromise = TestVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                          // 这个时候可以安全的暂停
                          TestVideo.pause();
                        })
                        .catch(error => {

                        });
                    }
                    TestVideo.pause();
                },100);

                /*以下是渲染CANVAS画布中的视频*/

                //获取video
                var TestVideo=document.querySelector('video');
                //获取canvas画布
                var TestCanvas=document.getElementById("testCanvas");
                //设置画布
                var TestCanvas2D=TestCanvas.getContext('2d');
                //设置setinterval定时器
                var TestVideoTimer=null;
                //监听播放
                TestVideo.addEventListener('play',function() {
                    TestVideoTimer=setInterval(function() {
                        TestCanvas2D.drawImage(TestVideo,0,0,videoW,videoH);
                    },20);

                },false);
                //监听暂停
                TestVideo.addEventListener('pause',function() {
                    clearInterval(TestVideoTimer);
                },false);
                //监听结束
                TestVideo.addEventListener('ended',function() {
                    clearInterval(TestVideoTimer);
                },false);
            }else{
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
            }

            // let video = document.querySelector('video');
            // var playPromise = video.play();

            // if (playPromise !== undefined) {
            //     playPromise.then(_ => {
            //       // 这个时候可以安全的暂停
            //       video.pause();
            //     })
            //     .catch(error => {

            //     });
            // }
            // document.addEventListener("WeixinJSBridgeReady", function() {
            //     document.getElementById('video').play();
            // }, false);
        },
        created() {
        }
    };
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
