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
      <el-col :span="6">
        <el-card shadow="never" @click="haha">
          <h2>CSS</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>JS</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>HTML</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>VUE</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>REACT</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>NETWORK</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
    </el-row>

    <!-- 已归档的问题本 -->
    <h1>JS 文件夹</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="never" @click="haha">
          <h2>CSS</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>JS</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>HTML</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>VUE</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>REACT</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <h2>NETWORK</h2>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    haha() {
      console.log("hha");
      //   console.log(this);
      this.$router.push("/QuizPamphlet");
    },
  },
};
</script>

<style scoped>
</style>