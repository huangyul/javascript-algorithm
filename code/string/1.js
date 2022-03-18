// 反转字符串单词
// 例如输入 I`m a student
// 输出 m`I a tneduts

function reversalWord(str) {
  return str
    .split(' ')
    .map((i) => i.split('').reverse().join(''))
    .join(' ')
}

export default reversalWord
