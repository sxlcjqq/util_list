<template>
  <div class="maoxian">
    <div v-for="(x,index) in aa">
      <p>第{{index+1}}行,{{reverseA[reverseA.length - index - 1].length}}</p>
      <div class="task-item">
        <div class="task-remark">
          <p class="title">
            <span class="text overflow" v-for="(xx) in x">
              <span :class="'aa a'+xx.split('-')[1]"></span> * {{xx.split('-')[0]}} ,
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="img-con">
      <span class="order" v-for="(xx,indexx) in 85"><span>{{85-indexx}}</span></span>
    </div>
    <div class="img-con" v-for="(x,index) in reverseA" >
      <span class="order"><span>{{reverseA.length - index}}</span></span>
      <span :class="'aa a'+xx" v-for="(xx,indexx) in x" :a="indexx"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "maoxian2",
  data() {
    return {
      aa: [
        [
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-2",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "4-3"
        ],
        [
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "1-3"
        ],
        [
          "8-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "2-3"
        ],
        [
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "6-3"
        ],
        [
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "4-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "7-3"
        ],
        [
          "4-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "1-3"
        ],
        [
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "1-3"
        ],
        [
          "4-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "7-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "1-3"
        ],
        [
          "8-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "1-3"
        ],
        [
          "7-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "1-3"
        ],
        [
          "7-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "1-3"
        ],
        [
          "2-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "10-3"
        ],
        [
          "1-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "7-3"
        ],
        [
          "1-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "8-1"
        ],
        [
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "8-1"
        ],
        [
          "1-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "1-1"
        ],
        [
          "1-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "2-3"
        ],
        [
          "1-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3"
        ],
        [
          "4-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3"
        ],
        [
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3"
        ],
        [
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "2-3"
        ],
        [
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1"
        ],
        [
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1"
        ],
        [
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",'2-2','2-3','3-1'
        ],
        [
          "4-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",'1-2','3-3','3-1'
        ],
        [
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",'3-1'
        ],
        [
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','3-1'
        ],
        [
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','1-2','2-1'
        ],
        [
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",'1-2','1-1'
        ],
        [
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",'1-2','2-3','1-2','2-3','3-1'
        ],
        [
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",'1-2','2-3','1-2','3-3','2-1'
        ],
        [
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",'2-2','2-3','3-1','1-2','2-3','1-2','5-3'
        ],
        [
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",'1-2','3-3','6-1','1-2','2-3','1-1','2-3'
        ],
        [
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",'6-1','1-2','2-3','3-1'
        ],
        [
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','3-1','1-2','2-3','1-2','2-3','3-1'
        ],
        [
          "3-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','1-2','2-1','1-2','2-3','1-2','2-3','3-1'
        ],
        [
          "4-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",'1-2','4-1','1-2','2-3','3-1'
        ],
        [
          "3-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",'1-2','2-3','1-2','2-3','6-1','1-2','2-3','3-1'
        ],
        [
          "3-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",'1-2','2-3','1-2','3-3','5-1','1-2','2-3','2-1','1-3'
        ],
        [
          "1-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",'2-2','2-3','3-1','1-2','2-3','1-2','11-3','3-1'
        ],
        [
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",'1-2','3-3','6-1','1-2','2-3','1-1','9-3','2-1'
        ],
        [
          "1-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",'6-1','1-2','2-3','9-1','1-3','2-1'
        ],
        [
          "1-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','3-1','1-2','2-3','1-2','2-3','9-1','3-3'
        ],
        [
          "1-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "1-2",
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "4-1",
          "3-3",
          "3-1",
          "2-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "11-3",
          "3-1",
          "1-3",
          "3-1",
          "1-3",'1-2','2-3','1-2','2-3','1-2','2-1','1-2','2-3','1-2','2-3','4-1','3-3','3-1','2-2'
        ],
        [
          "9-3",
          "1-2",
          "4-1",
          "1-2",
          "2-3",
          "3-1",
          "2-3",
          "1-1",
          "4-3",
          "1-2",
          "3-3",
          "6-1",
          "1-2",
          "2-3",
          "1-1",
          "9-3",
          "2-1",
          "2-3",
          "1-1",
          "9-3",'1-2','4-1','1-2','2-3','3-1','2-3','1-1','4-3','1-2','1-3'
        ],
        [
          "1-3",
          "1-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "6-1",
          "1-2",
          "2-3",
          "3-1",
          "1-3",
          "3-1",
          "7-3",
          "6-1",
          "1-2",
          "2-3",
          "9-1",
          "1-3",
          "2-1",
          "4-3",
          "1-1",'1-2','2-3','1-2','2-3','6-1','1-2','2-3','3-1','1-3','3-1','5-3'
        ],
        [
          "2-1",
          "1-2",
          "2-3",
          "1-2",
          "3-3",
          "5-1",
          "1-2",
          "2-3",
          "2-1",
          "2-3",
          "3-1",
          "1-3",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "3-1",
          "1-2",
          "2-3",
          "1-2",
          "2-3",
          "9-1",
          "6-3",
          "2-1",'1-2','2-3','1-2','3-3','5-1','1-2','2-3','2-1','2-3','3-1','1-3','1-2','2-3','1-2'
        ]
      ]
    };
  },
  computed: {
    reverseA() {
      console.log("-------");
      let newa = [];
      this.aa.forEach(item => {
        let line = [];
        item.forEach(i => {
          const d = i.split("-");
          for (let x = 0; x < d[0]; x++) {
            line.push(d[1]);
          }
        });
        newa.push(line.reverse());
      });
      return newa.reverse();
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    old() {
      // 旧版1-17行数据
    }
  },
  filters: {}
};
</script>


<style scoped  lang="scss">
.maoxian {
  color: #3a3a3a;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1.5;
  padding-bottom: 100px;
  .img-con {
    font-size: 0;
    background: #d6d6d6;
    &:hover {
      background: #ff751b;
    }
    .aa {
      margin: 0;
      width: 10px;
      height: 10px;
    }
    .order {
      width: 10px;
      height: 10px;
      display: inline-block;
      font-size: 12px;
      overflow: hidden;
      letter-spacing: -1px;
      vertical-align: middle;
      span {
        display: block;
        text-align: center;
        transform: scale(0.8);
      }
    }
  }
}
.title {
  line-height: 25px;
  font-size: 18px;
  color: #999999;
  flex-wrap: wrap;
}
.task-item {
  padding: 14px 0 15px;
  .task-remark {
    background: #d6d6d6;
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    .title {
      font-weight: bold;
      line-height: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .text {
        font-size: 14px;
        color: #666666;
        padding: 3px;
        margin: 10px 0px;
        border: 1px solid #9f9f9f;
        border-width: 1px 0;
      }
      .coin {
        font-size: 16px;
        color: #c3813b;
        flex-shrink: 0;
        padding-left: 15px;
        display: inline-flex;
        align-items: center;
        padding-right: 3px;
        img {
          height: 19px;
          width: 19px;
          transform: translateY(-1px);
          margin-right: 3px;
        }
        .iconfont {
          font-size: 12px;
          width: 14px;
        }
      }
    }
    .remark {
      margin-top: 2px;
      color: #9398a3;
      line-height: 17px;
      font-size: 12px;
    }
  }
}
.aa {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin: 0 3px;
  vertical-align: middle;
  &.a1 {
    background: #ffffff;
  }
  &.a2 {
    background: #759071;
  }
  &.a3 {
    background: #466eb8;
  }
}
</style>
