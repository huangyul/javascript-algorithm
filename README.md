# javascript-algorithm

javascript 算法学习

## 环境搭建

- ES6
- Jest 自动化测试
- npm
- Git

###### Jest 的安装

`npm i jest -s`

_简单使用教程_  
新建源 js 文件

```javascript
function sum(n, m) {
  return n + m
}

export default sum
```

新建测试文件 `test/sum.test.js`

```javascript
// 引入测试文件的函数
import sum from '../xxx'

// 测试的描述
test('计算 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5)
})
```

`npm run test`

###### 使用 babel

`npm i -d babel-jest @babel/core @babel/preset-env`

## 简单算法

主要分为**字符串**、**数组**、**正则**、**排序**和**递归**

### 字符串

#### 反转字符串单词

###### 主要用到方法

- String.prototype.split() // 字符串分解数组
- Array.prototype.join() // 数组组成字符串
- Array.prototype.reverse() // 数组反转
- Array.prototype.map() // 数组内每一个值都执行函数，返回新的数组

```javascript
// 测试用例
// 输入 I`m a student
// 输出 m`I a tneduts

function reversalWord(str) {
  return str
    .split(' ')
    .map((i) => i.split('').reverse().join(''))
    .join(' ')
}
```
