alert("歡迎使用★星座判斷器★");
const name = prompt("請輸入姓名");
const month = prompt("請輸入生日月份");
const day = prompt("請輸入生日日期");
let Constellation = " ";

if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
  constellation = "水瓶座";
} else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
  constellation = "雙魚座";
} else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
  constellation = "牡羊座";
} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
  constellation = "金牛座";
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
  constellation = "雙子座";
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
  constellation = "巨蟹座";
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
  constellation = "獅子座";
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
  constellation = "處女座";
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
  constellation = "天秤座";
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
  constellation = "天蠍座";
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 20)) {
  constellation = "射手座";
} else if ((month == 12 && day >= 21) || (month == 1 && day <= 20)) {
  constellation = "魔羯座";
}

document.write(`${name}你好，你的星座是${constellation}`);
