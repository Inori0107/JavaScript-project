alert("歡迎使用★星座判斷器★");
const name = prompt("請輸入姓名");
const month = prompt("請輸入生日月份");
const day = prompt("請輸入生日日期");
if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
  document.write(name + "您好，您的星座是水瓶座");
} else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
  document.write(name + "您好，您的星座是雙魚座");
} else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
  document.write(name + "您好，您的星座是牡羊座");
} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
  document.write(name + "您好，您的星座是金牛座");
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
  document.write(name + "您好，您的星座是雙子座");
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
  document.write(name + "您好，您的星座是巨蟹座");
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
  document.write(name + "您好，您的星座是獅子座");
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
  document.write(name + "您好，您的星座是處女座");
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
  document.write(name + "您好，您的星座是天秤座");
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
  document.write(name + "您好，您的星座是天蠍座");
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 20)) {
  document.write(name + "您好，您的星座是射手座");
} else if ((month == 12 && day >= 21) || (month == 1 && day <= 20)) {
  document.write(name + "您好，您的星座是魔羯座");
}
