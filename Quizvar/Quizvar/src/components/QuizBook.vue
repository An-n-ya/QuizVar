<template>
  <div id="root container">
    <h1>JS</h1>
    <p><strong>xx</strong> 个问题</p>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="never" @click="haha" :body-style="{ padding: '0px' }">
          <h3>CSS</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <h3>JS</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <h3>HTML</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <h3>VUE</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <h3>REACT</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
          <h3>NETWORK</h3>
          <p class="detail">xx 个问题</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.el-card {
  padding: 0;
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
</style>