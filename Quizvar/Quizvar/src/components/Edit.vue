<template>
  <div id="rootContainer">
    <el-card shadow="never" style="margin-bottom: 20px">
      <h1>{{ QuizSet[currentInd].quiz }}</h1>
    </el-card>
    <el-card shadow="never" style="margin-bottom: 20px">
      <p>{{ QuizSet[currentInd].ans }}</p>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>