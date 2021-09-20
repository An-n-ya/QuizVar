<template>
  <div id="root container">
    <h1>CSS</h1>
    <p>
      <strong>{{ QuizSet.length }}</strong> 个问题
    </p>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card
          shadow="never"
          :body-style="{ padding: '0px', height: '100%' }"
          @click="editQuiz()"
        >
          <div class="addCard">
            <h3><i class="el-icon-circle-plus-outline"></i>添加 Quiz</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" v-for="(item, index) in QuizSet" :key="'quiz' + index">
        <el-card
          shadow="never"
          @click="editQuiz(item)"
          :body-style="{ padding: '0px' }"
        >
          <h3>{{ item.quiz }}</h3>
          <p class="detail">{{ item.ans }}</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 弹框 -->
    <el-dialog
      id="editBox"
      title="修改 Quiz"
      v-model="dialogVisible"
      width="70%"
    >
      <el-form ref="form" :model="Quiz">
        <el-input v-model="Quiz.quiz" placeholder="Quiz 标题"></el-input>
        <el-input
          :rows="20"
          type="textarea"
          v-model="Quiz.ans"
          class="ansBox"
          placeholder="Quiz 答案"
        ></el-input>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >保 存</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制弹框的显示
      dialogVisible: false,
      Quiz: {
        quiz: "",
        ans: "",
      },
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
    editQuiz(item) {
      this.dialogVisible = true;
      if (item) {
        this.Quiz = item;
      } else {
        this.Quiz = { quiz: "", and: "" };
      }
      // console.log(item);
    },
  },
};
</script>

<style scoped>
.el-card {
  padding: 0;
  height: 198px; /*调整到刚好显示 7 行*/
  overflow: hidden;
  white-space: pre-line; /*允许折行*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7; /*七行如果显示不完，则显示“...”*/
}
.el-card h3 {
  margin: 0;
  padding: 10px 15px;
  border-bottom: 1px solid rgb(228, 231, 237);
}
.el-card p {
  padding: 10px;
  margin: 0 0 10px 0;
}
.addCard {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

/* 对话框样式 */
.ansBox {
  margin-top: 20px;
  height: 400px;
}
</style>