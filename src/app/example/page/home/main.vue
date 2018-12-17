<template>
    <div class="container">
        <div class="shooting_star" v-for="i in 20" :key="i"></div>
        <div class="tail" id="cattail">
            <svg viewBox="0 0 200 200"> 
            <path fill="#212121" stroke="black" stroke-width="4px"
            d = "M 10 200
                 C 10 200,180 110,100 20,
                 C 100 20,80 0, 80 30,
                 C 80 30, 110 80, 70 120,
                 C 70 120, 40 150, 20 160,
                 C 20 160, 10 180, 10 200"
            />
            </svg>
        </div>
        <div class="form">
          <div class="label">孟薇和她的小伙伴们的抽奖</div>
            <div class="list" id="data">
                <div class="xianwrap">
                    <div class="gunzhou">
                        <div v-for="(t, idx) in list" :key="idx">{{t}}</div>
                    </div>
                    <div class="mask">{{name}}</div>
                    <div class="mask-top"></div>
                    <div class="mask-top mask-top1"></div>
                    <div class="mask-bottom"></div>
                    <div class="mask-bottom mask-bottom1"></div>
                </div>
                
            </div>
           <button id="start" @click="start">{{btnTxt}}</button>
        </div>
        <div class="cat">
            <div class="earL">
                <svg viewBox="0 0 100 100">
                  <path fill="#212121" stroke="black" stroke-width="8px"
                  d="M20 95,
                     C20 95,0 50,20 5,
                     C20 5,70 10,95 80"
                  />
                  <path fill="#fab1a0" stroke="black" stroke-width="4px"
                  d="M20 95,
                     C20 95,0 50,20 5,
                     C20 5,70 10,95 80"             
                     transform="translate(20,25)scale(0.5)"
                  />
                </svg>
            </div>
            <div class="earR">
                <svg viewBox="0 0 100 100">
                  <path fill="#212121" stroke="black" stroke-width="8px"
                  d="M20 95,
                     C20 95,0 50,20 5,
                     C20 5,70 10,95 80"
                  />
                  <path fill="#fab1a0" stroke="black" stroke-width="4px"
                  d="M20 95,
                     C20 95,0 50,20 5,
                     C20 5,70 10,95 80"             
                     transform="translate(20,25)scale(0.5)"
                  />
                </svg>
            </div>
            <div class="head">
              <div class="mouth">
              <svg viewBox="0 0 100 100"> 
              <path fill="#fab1a0" stroke="black" stroke-width="2px"
              d = "M15 5,
                   C15 5,50 75,85 5,
                   C85 5,70 20,50 5,
                   C50 5,30 20,15 5"
              />
              <path fill="white" stroke="black" stroke-width="2px"
              d = "M27 11.5,
                   L32 20,
                   L37 11"
              />
              <path fill="white" stroke="black" stroke-width="2px"
              d = "M73 11.5,
                   L68 20,
                   L63 11"
              />
              </svg>
              </div>
              <div class="nose"></div>
              <div id="eL" class="eyeL"></div>
              <div id="heL" class="heyeL">
                <svg viewBox="0 0 100 100"> 
                <path fill="none" stroke="black" stroke-width="8px"
                d = "M 15 100,
                     C 15 100, 50 15 , 85 100"      
                />
                </svg>
               </div>
              <div id="aeL" class="AeyeL">
                <svg viewBox="0 0 100 100"> 
                <path fill="none" stroke="black" stroke-width="8px"
                d = "M 15 85,
                     L 85 50,
                     L 15 15"      
                />
                </svg>
               </div>
              <div id="eR" class="eyeR"></div>
              <div id="heR" class="heyeR">
                <svg viewBox="0 0 100 100"> 
                <path fill="none" stroke="black" stroke-width="8px"
                d = "M 15 100,
                     C 15 100, 50 15 , 85 100"      
                />
                </svg>
               </div>
              <div id="aeR" class="AeyeR">
                <svg viewBox="0 0 100 100"> 
                <path fill="none" stroke="black" stroke-width="8px"
                d = "M 85 85,
                     L 15 50,
                     L 85 15"      
                />
                </svg>
               </div>
            </div>
            <div class="faceL"></div>
            <div class="faceR"></div>
            <div class="Larm"></div>
            <div class="Rarm"></div>
           
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import axios from 'axios';

    export default {
        components: {
        },
        computed: {
            ...mapState({
                list: state => state.match.list,
                salt: state => state.match.salt
            })
        },
        methods: {
            start() {
                if (this.btnTxt == '停止') {
                    this.btnTxt = '开始';
                    
                    axios
                      .get('http://localhost:8000/choujiangvue/api')
                      .then(response => {
                        clearInterval(this.t);
                        this.name = this.list[response.data.data.salt];
                        // console.log(response.data.data.salt);
                      });
                    
                } else if (this.btnTxt == '开始') {
                    this.btnTxt = '停止';
                    let i = 0;
                    this.t = setInterval(() => {
                        this.name = this.list[i];
                        if (i+1>=this.list.length) {
                            i = 0;
                            return;
                        }
                        i++;
                    }, 10);
                }
            }
        },
        mounted() {
            this.name = this.list[this.salt];
        },
        data(){
            return {
                name: '123',
                btnTxt: '开始'
            };
        },

        created() {
        }
    };
</script>
<style lang="less" scoped>
    @import './style.less';
</style>
