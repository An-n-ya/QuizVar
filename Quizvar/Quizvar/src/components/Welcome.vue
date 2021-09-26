<template>
  <div id="root-container">
    <el-card shadow="never" id="welcome">
      <h1>欢迎来到 Quizvar！👏</h1>
      <p>
        🎊 您已经创建了 <strong>{{ totalQuizBook }}</strong> 个问题本
      </p>
      <p>
        🎉 您已经在 Quizvar 创建了 <strong>{{ totalQuiz }}</strong> 个问题了！
      </p>
      <p>💪 您今天还有 <strong>xx</strong> 个问题本需要复习</p>
    </el-card>

    <!-- 未归档的问题本 -->
    <h1>未归档的问题本</h1>

    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(item, index) in NQuizBook"
        :key="'NClass' + index"
      >
        <el-card
          shadow="never"
          @click="navTo('/Test/' + item.quizbook, $event)"
          @mouseenter="curId = 'NClass' + index"
          @mouseleave="curId = null"
        >
          <!-- 注意到 i 的点击事件需要阻止冒泡，需要往 navTo 函数中传入 $event参数 -->
          <i
            class="el-icon-edit-outline"
            v-if="curId == 'NClass' + index"
            v-on:click="navTo('/QuizPamphlet/' + item.quizbook, $event)"
          ></i>
          <h2>{{ item.quizbook }}</h2>
          <p class="detail">{{ item.quiz_num }} 个问题</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 已归档的问题本 -->
    <!-- 遍历每个分类 -->
    <div v-for="(val, key, index) in QuizBooks" :key="'BookClass' + index">
      <h1>{{ key }}</h1>
      <el-row :gutter="20">
        <!-- 遍历该分类内的所有问题本 -->
        <el-col :span="6" v-for="(item, index2) in val" :key="'Class' + index2">
          <el-card
            shadow="never"
            @click="navTo('/Test/' + item.quizbook, $event)"
            @mouseenter="curId = 'Class' + index2"
            @mouseleave="curId = null"
          >
            <!-- 注意到 i 的点击事件需要阻止冒泡，需要往 navTo 函数中传入 $event参数 -->
            <i
              class="el-icon-edit-outline"
              v-if="curId == 'Class' + index2"
              v-on:click="navTo('/QuizPamphlet/' + item.quizbook, $event)"
            ></i>
            <h2>{{ item.quizbook }}</h2>
            <p class="detail">{{ item.quiz_num }} 个问题</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用来表示当前鼠标 hover 的卡片
      curId: null,
      // 已分类的 QuizBook
      QuizBooks: {},
      // 未分类的 QuizBook
      NQuizBook: [],
      // 总问题本数
      totalQuizBook: 0,
      // 总 Quiz 数
      totalQuiz: 0,
    };
  },
  created() {
    this.getQuizSet();
  },
  methods: {
    navTo(address, event) {
      // console.log(event);
      if (event) {
        event.stopPropagation();
      }
      this.$router.push(address);
    },
    async getQuizSet() {
      const { data: res } = await this.$http.get("nullquizbook");
      this.NQuizBook = res.QuizBook;
      // 统计未分类的问题本数
      this.totalQuizBook += this.NQuizBook.length;
      // 统计各个分类问题本里的问题数
      this.NQuizBook.forEach((item) => {
        this.totalQuiz += item.quiz_num;
      });
      const { data: cate } = await this.$http.get("category");
      cate.category.forEach(async (item) => {
        let { data: book } = await this.$http.get("quizbook/" + item.category);
        this.QuizBooks[item.category] = book.QuizBook;
        // 统计各个分类的问题本数
        this.totalQuizBook += book.QuizBook.length;
        // 统计各个分类问题本里的问题数
        book.QuizBook.forEach((item) => {
          this.totalQuiz += item.quiz_num;
        });
      });
    },
  },
};
</script>

<style scoped>
.el-col .el-card i {
  position: absolute;
  right: 20px;
  top: 20px;
}
.el-col .el-card i:hover {
  color: blue;
}
.el-col .el-card {
  position: relative;
}
</style>