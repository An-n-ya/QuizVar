# Quizvar 后台接口文档

## API接口说明

* 接口地址：`https://qiucle.cn:8787/api/`
* 服务器端已开启 CORS 跨域支持
* 认证统一使用 Token 认证
* 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
* 数据返回格式为 JSON

### 支持的请求方法

* GET 从服务器取出资源
* POST 在服务器中新建资源
* PUT 在服务器更新资源
* DELETE 从服务器删除资源

### 状态码说明

| *状态码* | *含义*                | *说明*                               |
| -------- | --------------------- | ------------------------------------ |
| 200      | OK                    | 请求成功                             |
| 204      | NOT FOUND             | 创建成功，但没有找到对应资源         |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数 |
| 404      | NOT FOUND             | 请求的资源不存在                     |
| 401      | UNAUTHORIZED          | 未授权                               |
| 403      | FORBIDDEN             | 被禁止访问                           |
| 500      | INTERNAL SERVER ERROR | 内部错误                             |

## 获取Quiz 

### 获取 Quiz 列表

* 请求路径：`getquiz/:id`
* 请求方法：`get`
* 请求参数

| 参数名 | 参数说明 | 备注     |
| ------ | -------- | -------- |
| id     | Quiz ID  | 可以为空 |

- 响应参数

| 参数名  | 参数说明  | 备注 |
| ------- | --------- | ---- |
| QuizSet | Quiz 列表 |      |

* 响应数据

```json
{
    "status": 200,
    "message": "获取成功",
    "QuizSet": [
        {
            "quiz_id": 2,
            "quiz": "hello",
            "ans": "world: I'm fine",
            "category": "测试",
            "date": "1632140223206",
            "editdate": "1632143270465",
            "author": "ankh"
        }
    ]
}
```

### 获取 QuizBook

* 请求路径：`quizbook/:cate`
* 请求方法：`get`
* 请求参数

| 参数名 | 参数说明            | 备注     |
| ------ | ------------------- | -------- |
| Cate   | QuizBook 的分类名称 | 不能为空 |

- 响应参数

| 参数名   | 参数说明      | 备注                    |
| -------- | ------------- | ----------------------- |
| QuizBook | QuizBook 列表 | 该分类下的所有 QuizBook |

* 响应数据

```json
{
    "status": 200,
    "message": "获取成功",
    "QuizBook": [
        {
            "quizbook": "CSS",
            "quiz_num": 2
        },
        {
            "quizbook": "Vue",
            "quiz_num": 2
        },
        {
            "quizbook": "JavaScript",
            "quiz_num": 10
        },
        {
            "quizbook": "HTML",
            "quiz_num": 3
        }
    ]
}
```

### 获取 QuizBook 分类

* 请求路径：`category`
* 请求方法：`get`
* 响应参数

| 参数名            | 参数说明                   | 备注         |
| ----------------- | -------------------------- | ------------ |
| category          | 分类不为 null 的 category  | 类型为 Array |
| category.category | 当前分类的名称             |              |
| category.cate_num | 当前分类的下 Quiz 的总数量 |              |

* 响应数据

```json
{
    "status": 200,
    "message": "获取成功",
    "category": [
        {
            "category": "前端",
            "cate_num": 17
        },{
          	"category": "后端",
          	"cate_num": 13
        }
    ]
}
```

### 按 QuizBook 查找 Quiz

* 请求路径：`searchByBook/:quizbook`
* 请求方法：`get`

* 请求参数

| 参数名   | 参数说明            | 备注     |
| -------- | ------------------- | -------- |
| quizbook | 需要查找的 QuizBook | 不能为空 |

- 响应参数

| 参数名  | 参数说明                            | 备注 |
| ------- | ----------------------------------- | ---- |
| QuizSet | 数组，存储该 QuizBook 下的所有 Quiz |      |

* 响应数据

```json
{
    "status": 200,
    "message": "获取成功",
    "QuizSet": [
        {
            "quiz_id": 1,
            "quiz": "怎么更改 ul 默认标记符？",
            "ans": "使用 list-style-type ，使用none可以不显示 marker，使用circle，disc，square甚至是 emoji 字符可以更改 marker 样式。",
            "category": "前端",
            "date": "1632140223206",
            "editdate": "1632143270465",
            "author": "ankh",
            "quizbook": "CSS"
        },
        {
            "quiz_id": 2,
            "quiz": "什么是选择符？",
            "ans": "选择符就是把不同选择器组合在一起的符号。\n\n最常见的选择符是 后代选择符 。也就是简单的一个空格\" \"。 对于后代选择符，它的第二个选择器是第一个选择器的后代。\n\n子选择符为：\">\"。它的第二个选择器选择的元素是第一个选择器对应的元素的 直接子元素。\n\n临近兄弟选择符为：\"+\"。它的第二个选择器对应的元素是第一个选择器对应元素的 下一个兄弟元素。\n\n通用兄弟选择符为：'~'。它与临近兄弟选择符+很相似，只不过它选择的是所有的兄弟元素。",
            "category": "前端",
            "date": "1632144574807",
            "editdate": "1632144574807",
            "author": "ankh",
            "quizbook": "CSS"
        }
    ]
}
```



## 删除 Quiz

* 请求路径：`delete/:id`
* 请求方法：`delete`

* 请求参数

| 参数名 | 参数说明 | 备注     |
| ------ | -------- | -------- |
| id     | Quiz ID  | 不能为空 |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| results | 删除信息 |      |

* 响应数据

```json
{
    "status": 200,
    "message": "删除成功",
    "results": {
        "fieldCount": 0,
        "affectedRows": 0,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 添加 Quiz

* 请求路径：`insert`
* 请求方法：`post`

* 请求参数

| 参数名   | 参数说明           | 备注     |
| -------- | ------------------ | -------- |
| quiz     | Quiz 问题          | 不能为空 |
| ans      | Quiz 答案          | 不能为空 |
| category | Quiz 分类          | 可以为空 |
| quizbook | Quiz 册名          | 可以为空 |
| date     | 添加该 Quiz 的时间 | 可以为空 |
| editdate | 修改该 Quiz 的时间 | 可以为空 |
| author   | 作者               | 可以为空 |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| results | 添加信息 |      |

* 响应数据

```json
{
    "status": 200,
    "message": "添加成功",
    "results": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 7,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 更新 Quiz

* 请求路径：`update`
* 请求方法：`put`

* 请求参数

| 参数名   | 参数说明           | 备注                                   |
| -------- | ------------------ | -------------------------------------- |
| id       | Quiz ID            | 不能为空                               |
| quiz     | Quiz 问题          | 不能为空                               |
| ans      | Quiz 答案          | 不能为空                               |
| category | Quiz 分类          | 可以为空（如果没有设置，则使用原来的） |
| quizbook | Quiz 册名          | 可以为空（同上）                       |
| editdate | 修改该 Quiz 的时间 | 可以为空                               |

- 响应参数

| 参数名  | 参数说明 | 备注 |
| ------- | -------- | ---- |
| results | 更新信息 |      |

* 响应数据

```json
{
    "status": 200,
    "message": "更新成功",
    "results": {
        "fieldCount": 0,
        "affectedRows": 0,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 0  Changed: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }
}
```

