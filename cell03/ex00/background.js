
//เป็นคำสั่งหา..
const btn = document.getElementById("colorBtn");
 //รอการคลิก
btn.addEventListener("click", function () 

{

//สุ่มสี
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


);
 