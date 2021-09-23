<template>
  <div class="rootContainer">
    <div v-if="active" class="quizPhase" @click="toggleActive">
      <el-card shadow="never">
        <h1>{{ QuizSet[currentInd].quiz }}</h1>
      </el-card>
    </div>
    <div v-else class="ansPhase">
      <el-card shadow="never" style="margin-bottom: 20px">
        <h1>{{ QuizSet[currentInd].quiz }}</h1>
      </el-card>
      <el-card shadow="never" style="margin-bottom: 20px">
        <!-- <p>{{ QuizSet[currentInd].ans }}</p> -->
        <MilkDown :modelValue="QuizSet[currentInd].ans" :readonly="true" />
      </el-card>
      <div class="selection">
        <el-button
          type="success"
          icon="el-icon-check"
          @click="check"
        ></el-button>
        <el-button
          type="warning"
          icon="el-icon-s-flag"
          @click="forget"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
// 配置 axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8787/api/";
// Fisher-Yates shuffle 打乱算法
Array.prototype.shuffle = function () {
  var array = this;
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};
// 导入 Milkdown
import MilkDown from "./Milkdown.vue";
export default {
  components: {
    MilkDown,
  },
  data() {
    return {
      active: true,
      currentInd: 0,
      QuizBook: "",
      QuizSet: [
        {
          quiz: "",
          ans: "",
        },
      ],
    };
  },
  created() {
    this.QuizBook = this.$route.params.quizbook;
    this.getQuizSet();
  },
  methods: {
    async getQuizSet() {
      const { data: res } = await axios.get("searchbybook/" + this.QuizBook);
      if (res.status !== 200) {
        this.$message({
          message: "获取数据失败",
          type: "danger",
        });
      }
      this.QuizSet = res.QuizSet;
      this.QuizSet.shuffle();
    },
    toggleActive() {
      this.active = !this.active;
    },
    check() {
      if (this.currentInd < this.QuizSet.length - 1) {
        this.currentInd++;
        this.active = true;
      } else {
        this.$message({
          message: "单词本到底啦！",
          type: "warning",
        });
      }
    },
    forget() {
      if (this.currentInd < this.QuizSet.length - 1) {
        this.currentInd++;
        this.active = true;
      } else {
        this.$message({
          message: "单词本到底啦！",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
.quizPhase {
  height: 100%;
  width: 100%;
}
.quizPhase .el-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.selection {
  display: flex;
  justify-content: center;
}
.selection .el-button {
  border-radius: 20px;
  margin: 0 30px 0 30px;
}
</style>