<template>
  <div id="root-container">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#4656ac"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <div id="icon">
            <el-link class="link" :underline="false" @click="haha"
              >Quizvar</el-link
            >
          </div>
          <el-menu-item index="1" @click="haha">主页</el-menu-item>
          <!-- <el-sub-menu index="2">
            <template #title>我的问题本</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-sub-menu>
          </el-sub-menu> -->
          <el-sub-menu index="3">
            <template #title>创建</template>
            <el-menu-item index="3-1" @click="navToCreateBook"
              >问题本</el-menu-item
            >
            <el-menu-item index="3-2">文件夹</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  methods: {
    haha() {
      // console.log("hha");
      //   console.log(this);
      this.$router.push("/");
    },
    navToWel() {
      this.$router.push("/Welcome");
    },
    navToCreateBook() {
      this.$router.push("/QuizPamphlet/CreateBook");
    },
  },
  created() {
    this.navToWel();
  },
};
</script>

<script setup>
let activeIndex = "1";
</script>

<style>
#root-container {
  height: 100%;
}
.el-container .el-header {
  padding: 0;
}

.el-container {
  background-color: #f6f7fb;
  height: 100%;
  width: 100%;
}

/* 导航区域 */
#icon {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 1em;
}
#icon .link {
  font-size: 20px;
  color: #f6f7fb;
  background-color: #4656ac;
}

/* 内容区域 */
.el-main .el-card {
  border-radius: 20px;
  padding: 12px 20px;
}

.el-card h1 {
  margin: 0;
}

strong {
  font-size: 20px;
}

#welcome {
  min-width: 400px;
  width: 500px;
}
.el-col .el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.el-col .el-card:hover {
  border: 1px solid #4656ac;
}
</style>