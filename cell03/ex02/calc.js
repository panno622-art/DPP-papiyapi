// 1. ตั้งเวลาทุก 30 วินาที ให้เด้ง Alert ข้อความเตือน
        setInterval(function() {
            alert("Please, use me...");
        }, 30000); // 30000 มิลลิวินาที = 30 วินาที

        // 2. ฟังก์ชันหลักเมื่อกดปุ่ม Try me!
        document.getElementById('calcForm').addEventListener('submit', function(event) {
            event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรช

            const leftInput = document.getElementById('leftMember').value;
            const rightInput = document.getElementById('rightMember').value;
            const operator = document.getElementById('operator').value;

            // 3. ตรวจสอบเงื่อนไข: ต้องเป็นจำนวนเต็มบวก (>= 0) เท่านั้น
            // ใช้ Regular Expression เช็คว่ามีเฉพาะตัวเลข 0-9 ทุกตัวอักษร
            const isPositiveInteger = /^\d+$/.test(leftInput) && /^\d+$/.test(rightInput);

            if (!isPositiveInteger) {
                alert("Error :(");
                return;
            }

            const left = Number(leftInput);
            const right = Number(rightInput);

            // 4. ตรวจสอบเงื่อนไข: หารหรือโมดูโลด้วยศูนย์
            if ((operator === '/' || operator === '%') && right === 0) {
                alert("It’s over 9000!");
                return;
            }

            // 5. ดำเนินการคำนวณตามเครื่องหมายที่เลือก
            let result;
            switch (operator) {
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    result = left / right;
                    break;
                case '%':
                    result = left % right;
                    break;
            }

            // 6. แสดงผลลัพธ์ออกทาง Alert และ Console Log ตามโจทย์
            alert(result);
            console.log(result);
        });