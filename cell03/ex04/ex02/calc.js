// 1. ตั้งเวลาทุก 30 วินาที ให้เด้ง Alert ข้อความเตือน
setInterval(function () {
  alert("Please, use me...");
}, 30000);

// 2. ฟังก์ชันหลักเมื่อกดปุ่ม Try me!
$("#calcForm").on("submit", function (event) {
  event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรช

  const leftInput = $("#leftMember").val();
  const rightInput = $("#rightMember").val();
  const operator = $("#operator").val();

  // 3. ต้องเป็นจำนวนเต็มบวก (>= 0) เท่านั้น
  const isPositiveInteger = /^\d+$/.test(leftInput) && /^\d+$/.test(rightInput);

  if (!isPositiveInteger) {
    alert("Error :(");
    return;
  }

  const left = Number(leftInput);
  const right = Number(rightInput);

  // 4. หารหรือโมดูโลด้วยศูนย์
  if ((operator === '/' || operator === '%') && right === 0) {
    alert("It’s over 9000!");
    return;
  }

  // 5. คำนวณตามเครื่องหมายที่เลือก
  let result;
  switch (operator) {
    case '+': result = left + right; break;
    case '-': result = left - right; break;
    case '*': result = left * right; break;
    case '/': result = left / right; break;
    case '%': result = left % right; break;
  }

  // 6. แสดงผลลัพธ์
  alert(result);
  console.log(result);
});