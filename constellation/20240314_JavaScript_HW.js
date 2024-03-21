alert("歡迎使用★星座判斷器★");
const name = prompt("請填入姓名");
const birth_month = prompt("請填入出生月份");
const birth_date = prompt("請填入出生日期");
if (birth_month === "1") {
  if (Number(birth_date) >= 21) {
    document.write(`<h2>${name}你好，你的星座是水瓶座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是魔羯</h2>`);
  }
} else if (birth_month === "2") {
  if (Number(birth_date) >= 20) {
    document.write(`<h2>${name}你好，你的星座是雙魚座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是水瓶座</h2>`);
  }
} else if (birth_month === "3") {
  if (Number(birth_date) >= 21) {
    document.write(`<h2>${name}你好，你的星座是牡羊座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是雙魚座</h2>`);
  }
} else if (birth_month === "4") {
  if (Number(birth_date) >= 21) {
    document.write(`<h2>${name}你好，你的星座是金牛座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是牡羊座</h2>`);
  }
} else if (birth_month === "5") {
  if (Number(birth_date) >= 22) {
    document.write(`<h2>${name}你好，你的星座是雙子座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是金牛座</h2>`);
  }
} else if (birth_month === "6") {
  if (Number(birth_date) >= 22) {
    document.write(`<h2>${name}你好，你的星座是巨蟹座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是雙子座</h2>`);
  }
} else if (birth_month === "7") {
  if (Number(birth_date) >= 24) {
    document.write(`<h2>${name}你好，你的星座是獅子座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是巨蟹座</h2>`);
  }
} else if (birth_month === "8") {
  if (Number(birth_date) >= 24) {
    document.write(`<h2>${name}你好，你的星座是處女座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是獅子座</h2>`);
  }
} else if (birth_month === "9") {
  if (Number(birth_date) >= 24) {
    document.write(`<h2>${name}你好，你的星座是天秤座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是處女座</h2>`);
  }
} else if (birth_month === "10") {
  if (Number(birth_date) >= 24) {
    document.write(`<h2>${name}你好，你的星座是天蠍座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是天秤座</h2>`);
  }
} else if (birth_month === "11") {
  if (Number(birth_date) >= 23) {
    document.write(`<h2>${name}你好，你的星座是射手座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是天蠍座</h2>`);
  }
} else if (birth_month === "12") {
  if (Number(birth_date) >= 23) {
    document.write(`<h2>${name}你好，你的星座是魔羯座</h2>`);
  } else {
    document.write(`<h2>${name}你好，你的星座是射手座</h2>`);
  }
}
