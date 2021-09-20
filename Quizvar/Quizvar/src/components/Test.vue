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
        <p>{{ QuizSet[currentInd].ans }}</p>
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
export default {
  data() {
    return {
      active: true,
      currentInd: 0,
      QuizSet: [
        {
          quiz: "怎么更改 ul 默认标记符？",
          ans: `使用 list-style-type ，使用none可以不显示 marker，使用circle，disc，square甚至是 emoji 字符可以更改 marker 样式。`,
        },
        {
          quiz: "CSS 属性的值可以是什么？",
          ans: `可以是

                    1. 数字 + 单位

                    2. 函数，比如：translate() rgb() calc() rorate()`,
        },
        {
          quiz: "CSS 选择器的优先级？",
          ans: `id 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

                    若选择器优先级相同，则后面的样式将覆盖前面的样式。

                    通用选择器（*），选择符（+ > ～）以及否定伪类（：not）不会影响优先级。

                    按 CSS 来源来分，内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式`,
        },
      ],
    };
  },
  methods: {
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