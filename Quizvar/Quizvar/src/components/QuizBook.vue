<template>
  <div id="root container">
    <h1>JS</h1>
    <p><strong>xx</strong> 个问题</p>

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

<script setup>
</script>

<style scoped>
strong {
  font-size: 20px;
}
</style>