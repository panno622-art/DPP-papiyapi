/* =====================================================
   script.js — JavaScript ของทั้งเว็บ (ทุกหน้าเรียกไฟล์นี้ด้วย <script src="script.js" defer>)
   มี 3 ส่วน: 1.อนิเมชันก่อนเปลี่ยนหน้า 2.สไลด์ Hero 3.ปุ่ม Esc ปิด pop-up
   ลบไฟล์นี้ได้ เว็บยังใช้ได้ แต่สไลด์จะไม่เลื่อนและไม่มีจังหวะรอก่อนเปลี่ยนหน้า
   ===================================================== */

/* 1) กดลิงก์ไปหน้าอื่น → เติม class "leaving" ที่ body (CSS เลือนหน้าออก) → รอ DELAY มิลลิวินาที → ไปหน้าใหม่
      DELAY ต้องเท่ากับ --leave ใน style.css | ลิงก์ภายนอก และลิงก์ #xxx ในหน้าเดิม (Dropdown, pop-up) ปล่อยตามปกติ */
const DELAY=matchMedia('(prefers-reduced-motion:reduce)').matches?0:400;
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href]');
  if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;
  const u=new URL(a.href,location.href);
  if(u.origin!==location.origin||(u.pathname===location.pathname&&u.hash))return;
  e.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(()=>location.href=a.href,DELAY);
});
addEventListener('pageshow',e=>e.persisted&&document.body.classList.remove('leaving'));   // กดปุ่มย้อนกลับของเบราว์เซอร์แล้วกลับมา

/* 2) สไลด์ Hero (ทำงานเฉพาะหน้าที่มี .hero): เลื่อนเองทุก 5 วินาที / ลูกศร / จุด — สไลด์กับจุดสลับ class "on" ตามลำดับ */
const hero=document.querySelector('.hero');
if(hero){
  const s=[...hero.querySelectorAll('.slide')],d=[...hero.querySelectorAll('.dots button')];
  let i=0,t;
  const go=k=>{i=(k+s.length)%s.length;[s,d].forEach(l=>l.forEach((x,j)=>x.classList.toggle('on',j==i)))};
  const play=()=>{clearInterval(t);t=setInterval(()=>go(i+1),5000)};   // แก้ 5000 = เปลี่ยนความเร็ว (มิลลิวินาที)
  hero.onclick=e=>{const b=e.target.closest('button');if(b){go(b.matches('.prev')?i-1:b.matches('.next')?i+1:d.indexOf(b));play()}};
  play();
}

/* 3) ปุ่ม Esc ปิด pop-up เลือกภาค */
addEventListener('keydown',e=>{if(e.key==='Escape'&&location.hash==='#regions-modal')location.hash='close'});
