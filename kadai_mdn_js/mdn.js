const todaysDate = new Date('December 4, 23 21:56:00');
// 年を取得
const GETYEAR =todaysDate.getFullYear(); 
// 月を取得
const GETMONTH = todaysDate.getMonth() +1; 
// 日を取得
const GETDAY = todaysDate.getDate();
// 日付を出力
console.log(GETYEAR +'年'+ GETMONTH +'月'+ GETDAY+ '日');
