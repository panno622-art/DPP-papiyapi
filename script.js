/* script.js — JavaScript ของทั้งเว็บ: 1.อนิเมชันก่อนเปลี่ยนหน้า 2.สไลด์ Hero 3.ปุ่ม Esc ปิด pop-up
   ลบไฟล์นี้ได้ เว็บยังใช้ได้ แต่สไลด์จะไม่เลื่อนและไม่มีจังหวะรอก่อนเปลี่ยนหน้า */

/* 1) กดลิงก์ไปหน้าอื่น → เติม class "leaving" ที่ body (CSS เลือนหน้าออก) → รอ DELAY ms → ไปหน้าใหม่
      DELAY ต้องเท่ากับ --leave ใน style.css | ลิงก์ภายนอกและ #xxx ในหน้าเดิมปล่อยตามปกติ */
const DELAY = matchMedia('(prefers-reduced-motion:reduce)').matches ? 0 : 400;
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
  const u = new URL(a.href, location.href);
  if (u.origin !== location.origin || (u.pathname === location.pathname && u.hash)) return;
  e.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(() => location.href = a.href, DELAY);
});
addEventListener('pageshow', e => e.persisted && document.body.classList.remove('leaving'));  // กลับมาด้วยปุ่มย้อนกลับ

/* 2) สไลด์ Hero (เฉพาะหน้าที่มี .hero): เลื่อนเองทุก 5 วินาที / ลูกศร / จุด */
const hero = document.querySelector('.hero');
if (hero) {
  const slides = [...hero.querySelectorAll('.slide')], dots = [...hero.querySelectorAll('.dots button')];
  let i = 0, timer;
  const go = k => {
    i = (k + slides.length) % slides.length;
    [slides, dots].forEach(list => list.forEach((x, j) => x.classList.toggle('on', j == i)));
  };
  const play = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 5000); };  // 5000 = ความเร็ว (ms)
  hero.onclick = e => {
    const b = e.target.closest('button');
    if (b) { go(b.matches('.prev') ? i - 1 : b.matches('.next') ? i + 1 : dots.indexOf(b)); play(); }
  };
  play();
}

/* 3) ปุ่ม Esc ปิด pop-up เลือกภาค */
addEventListener('keydown', e => { if (e.key === 'Escape' && location.hash === '#regions-modal') location.hash = 'close'; });