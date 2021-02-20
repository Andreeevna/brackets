module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let newStr = str.split('');
  for(let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (newStr[i] == bracketsConfig[j][0] && newStr[i+1] == bracketsConfig[j][1]) {
        newStr.splice(i,2);
        i--;
      }
    }
  }
  return newStr.length === 0;
}
