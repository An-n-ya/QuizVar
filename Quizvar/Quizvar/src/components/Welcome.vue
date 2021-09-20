<template>
  <div id="root-container">
    <el-card shadow="never" id="welcome">
      <h1>欢迎来到 Quizvar！👏</h1>
      <p>🎊 您已经创建了 <strong>xx</strong> 个问题本</p>
      <p>🎉 您已经在 Quizvar 创建了 <strong>xx</strong> 个问题了！</p>
      <p>💪 您今天还有 <strong>xx</strong> 个问题本需要复习</p>
    </el-card>

    <!-- 未归档的问题本 -->
    <h1>未归档的问题本</h1>

    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(item, index) in NClassified"
        :key="'NClass' + index"
      >
        <el-card
          shadow="never"
          @click="navTo('/Test', $event)"
          @mouseenter="curId = 'NClass' + index"
          @mouseleave="curId = null"
        >
          <!-- 注意到 i 的点击事件需要阻止冒泡，需要往 navTo 函数中传入 $event参数 -->
          <i
            class="el-icon-edit-outline"
            v-if="curId == 'NClass' + index"
            v-on:click="navTo('/QuizPamphlet', $event)"
          ></i>
          <h2>{{ item.title }}</h2>
          <p class="detail">{{ item.NumOfQuiz }} 个问题</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 已归档的问题本 -->
    <h1>JS 文件夹</h1>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(item, index) in classified"
        :key="'Class' + index"
      >
        <el-card
          shadow="never"
          @click="navTo('/Test', $event)"
          @mouseenter="curId = 'Class' + index"
          @mouseleave="curId = null"
        >
          <!-- 注意到 i 的点击事件需要阻止冒泡，需要往 navTo 函数中传入 $event参数 -->
          <i
            class="el-icon-edit-outline"
            v-if="curId == 'Class' + index"
            v-on:click="navTo('/QuizPamphlet', $event)"
          ></i>
          <h2>{{ item.title }}</h2>
          <p class="detail">{{ item.NumOfQuiz }} 个问题</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用来表示当前鼠标 hover 的卡片
      curId: null,
      // 问题本
      NClassified: [
        {
          title: "CSS",
          NumOfQuiz: 4,
        },
        {
          title: "HTML",
          NumOfQuiz: 10,
        },
        {
          title: "JS",
          NumOfQuiz: 23,
        },
        {
          title: "VUE",
          NumOfQuiz: 18,
        },
        {
          title: "REACT",
          NumOfQuiz: 20,
        },
        {
          title: "NETWORK",
          NumOfQuiz: 10,
        },
      ],
      classified: [
        {
          title: "CSS",
          NumOfQuiz: 4,
        },
        {
          title: "HTML",
          NumOfQuiz: 10,
        },
        {
          title: "JS",
          NumOfQuiz: 23,
        },
      ],
    };
  },
  methods: {
    navTo(address, event) {
      // console.log(event);
      if (event) {
        event.stopPropagation();
      }
      this.$router.push(address);
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