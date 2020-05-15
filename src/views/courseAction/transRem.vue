<template>
  <div class="transRem">
    <div>
      <el-input type="textarea" :rows="10" placeholder="请输入要操作的内容" v-model="textarea"></el-input>
    </div>
    <el-row style="margin:10px;">
      <el-button type="primary" size="mini" @click="clear('textarea')">清空</el-button>
      <el-button type="primary" size="mini" @click="actionFun('jiaya')">加压</el-button>
      <el-input placeholder="原单位" v-model="zhengzeValue" style="width:80px;"></el-input>
      <el-select v-model="yunsuanfuValue" placeholder="请选择运算符" style="width:80px;">
        <el-option
          v-for="item in yunsuanfuOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input placeholder="请输入数值" v-model="numValue" style="width:100px;"></el-input>
      <el-input placeholder="换单位" v-model="zhengzeValueTo" style="width:80px;"></el-input>
      <el-button type="primary" size="mini" @click="actionFun('torem')">转换</el-button>
      <el-button type="primary" size="mini" @click="actionFun('torem','jiaya')">转换并加压</el-button>
    </el-row>
    <div>
      <el-input type="textarea" :rows="10" placeholder="此处为转换后的内容" v-model="textarea_res"></el-input>
    </div>
    <el-row style="margin:10px;">
      <button
        id="btn"
        class="el-button el-button--primary el-button--mini"
        :data-clipboard-text="textarea_res"
      >复制</button>
      <el-button type="primary" size="mini" @click="clear('textarea_res')">清空</el-button>
    </el-row>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";

export default {
  name: "transRem",
  data() {
    return {
      textarea: "",
      textarea_res: "",
      zhengzeValue: "px",
      zhengzeValueTo: "rem",
      zhengzeOption: [
        {
          value: "px换rem",
          label: "px换rem"
        },
        {
          value: "rem换px",
          label: "rem换px"
        }
      ],
      numValue: "75",
      numOption: [
        {
          value: "75",
          label: "75"
        }
      ],
      yunsuanfuValue: "4",
      yunsuanfuOption: [
        {
          value: "1",
          label: "➕"
        },
        {
          value: "2",
          label: "➖"
        },
        {
          value: "3",
          label: "✖️"
        },
        {
          value: "4",
          label: "➗"
        },
        {
          value: "5",
          label: "%"
        }
      ]
    };
  },
  components: {},
  mounted() {
    var _this = this;
    const btnCopy = new ClipboardJS("#btn");
    // 复制成功后执行的回调函数
    btnCopy.on("success", function(e) {
      _this.$message({
        message: "恭喜你，复制成功。",
        type: "success"
      });
    });

    // 复制失败后执行的回调函数
    btnCopy.on("error", function(e) {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  },
  watch: {
    // zhengzeValue(n, o) {
    //   switch (n) {
    //     case "px换rem": //px换rem
    //       this.yunsuanfuValue = "4";
    //       break;
    //     case "rem换px": //rem换px
    //       this.yunsuanfuValue = "3";
    //       break;
    //   }
    // }
  },
  methods: {
    clear(dd) {
      this[dd] = "";
    },
    trans(num, jiayaval) {
        var h0=this.zhengzeValue;
        var h1=this.zhengzeValueTo;
        var $this = this
      function jisuan(val) {
        val = val.replace(h0, "");
        switch($this.yunsuanfuValue*1){
            case 1:return val + (num * 1) + h1;break;//+
            case 2:return val - (num * 1) + h1;break;//-
            case 3:return val * (num * 1) + h1;break;//*
            case 4:return val / (num * 1) + h1;break;///
            case 5:return val % (num * 1) + h1;break;//%
        }
      }
      if (jiayaval=='jiaya') {
        this.jiaya(this.textarea.replace(eval('/(((\\d)+)'+h0+'){1}/g'), jisuan));
      } else {
        this.textarea_res = this.textarea.replace(eval('/(((\\d)+)'+h0+'){1}/g'), jisuan);
      }
    },
    actionFun(val, val2) {
      if (this.textarea) {
        switch (val) {
          case "jiaya":
            this.jiaya();
            break;
          case "torem":
            this.trans(this.numValue, val2);
            break;
        }
      } else {
        this.$message({
          message: "请输入要操作的内容！",
          type: "error"
        });
      }
    },
    jiaya(val) {
      var result = this.textarea;
      if (val) {
        result = val;
      }
      this.textarea_res = result.replace(/(\r)|(\n)|(\s)/g, "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  >
</style>
