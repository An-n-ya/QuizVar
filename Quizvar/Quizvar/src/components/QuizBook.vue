<template>
  <div id="root container">
    <h1>{{ this.$route.params.quizbook }}</h1>
    <p>
      <strong>{{ QuizSet.length }}</strong> 个问题
    </p>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card
          shadow="never"
          :body-style="{ padding: '0px', height: '100%' }"
          @click="showDialog()"
        >
          <div class="addCard">
            <h3><i class="el-icon-circle-plus-outline"></i>添加 Quiz</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" v-for="(item, index) in QuizSet" :key="'quiz' + index">
        <el-card
          shadow="never"
          @click="showDialog(item)"
          :body-style="{ padding: '0px' }"
          @mouseenter="curId = 'Quiz' + index"
          @mouseleave="curId = null"
        >
          <!-- 注意到 i 的点击事件需要阻止冒泡，需要往 deleteById 函数中传入 $event参数 -->

          <i
            class="el-icon-close"
            v-if="curId == 'Quiz' + index"
            v-on:click="deleteById(item.quiz_id, $event)"
          ></i>
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
      <el-form ref="Quiz" :model="Quiz">
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
          <el-button type="primary" @click="createQuiz()">保 存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
// 配置 axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8787/api/";
export default {
  data() {
    return {
      // 当前 QuizCard 的 index
      curId: null,
      // 控制弹框的显示
      dialogVisible: false,
      QuizBook: "",
      Quiz: {
        quiz_id: "",
        quiz: "",
        ans: "",
        category: "",
        date: "",
        editdate: "",
        author: "",
        quizbook: "",
        createFlag: false,
      },
      QuizSet: [
        {
          quiz_id: "",
          quiz: "",
          ans: "",
          category: "",
          date: "",
          editdate: "",
          author: "",
          quizbook: "",
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
    },
    showDialog(item) {
      this.dialogVisible = true;
      if (item) {
        this.Quiz = item;
        this.createFlag = false;
      } else {
        this.Quiz = { quiz: "", and: "", createFlag: true };
      }
      // console.log(item);
    },
    async createQuiz() {
      if (this.Quiz.createFlag) {
        // 使用默认的 cate author quizbook
        // this.Quiz.category = this.QuizSet[0].category;
        this.Quiz.author = "ankh";
        this.Quiz.quizbook = this.$route.params.quizbook;
        const { data: res } = await axios.post("insert", this.Quiz);
        if (res.status !== 200) {
          this.$message({
            message: "获取数据失败",
            type: "danger",
          });
        }
        this.$message({
          message: "添加成功",
          type: "success",
        });
        // 重新获取数据
        this.getQuizSet();
        // 关闭窗口
        this.dialogVisible = false;
      } else {
        // console.log("entering update");
        const { data: res } = await axios.put("update", this.Quiz);
        if (res.status !== 200) {
          this.$message({
            message: "获取数据失败",
            type: "danger",
          });
        }
        this.$message({
          message: "修改成功",
          type: "success",
        });
        // 重新获取数据
        this.getQuizSet();
        // 关闭窗口
        this.dialogVisible = false;
      }
    },
    async deleteById(id, event) {
      if (event) {
        event.stopPropagation();
      }
      const { data: res } = await axios.delete("delete/" + id);
      if (res.status !== 200) {
        this.$message({
          message: "删除失败",
          type: "danger",
        });
      }
      this.$message({
        message: "删除成功",
        type: "success",
      });
      // 重新获取数据
      this.getQuizSet();
    },
  },
};
</script>

<style scoped>
.el-card {
  position: relative;
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

/* 删除图标样式 */
.el-col .el-card i {
  position: absolute;
  right: 10px;
  top: 10px;
}
.el-col .el-card i:hover {
  color: blue;
}
</style>