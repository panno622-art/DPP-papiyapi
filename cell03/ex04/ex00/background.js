$("#colorBtn").click(function () {

  // สุ่มสี
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // เปลี่ยนสีพื้นหลังของหน้าเว็บ
  $("body").css("background-color", `rgb(${r}, ${g}, ${b})`);
});