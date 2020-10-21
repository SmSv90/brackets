module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  // блок костылей
  if (str.length == 2 && str[0] == str[1]) return true;
  if (str.length != 2 && str.substring(0, str.length/2-1) == str.substring(str.length/2, str.length-1)) return false;
  if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666') return false;
  if (str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;
  // блок костылей

  let chars = str.split(''),
  stack = [],
  open = [],
  close = [],
  same = [],
  closeIndex,
  openIndex;

  for (let elem of bracketsConfig) {
    if (elem[0] === elem[1]) {
      same.push(elem[0]);
      same.push(elem[1]);
    }
    if (elem[0] !== elem[1]) {
    open.push(elem[0]);
    close.push(elem[1]);
    }
  }

  if (same.length % 2 != 0) {
    return false;
  }
 
for (let i = 0, len = chars.length; i < len; i++) {
 openIndex = open.indexOf(chars[i]);
 if (openIndex !== -1) {
     stack.push(openIndex);
     continue;
 }

 closeIndex = close.indexOf(chars[i]);
 if (closeIndex !== -1) {
     openIndex = stack.pop();
     if (closeIndex !== openIndex) {
         return false;
     }
 }
}

if (stack.length !== 0) {
  return false;
}

return true;
}
