// HEADER
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//BADGES
// scroll 하면 사라지게함: lodash
//Libraries: throttle(함수,시간)
//           gsap.to(요소, 지속시간,옵션)
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(
  function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
      //숨기기 & unclickable
     gsap.to(badgeEl, .6, {
        opacity:0,
        display:'none'//문자화 ""
      });
    } else {
    //보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'//문자화 ""
    });
    }
  },300));

//VISUAL
//순차적 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * .7,//0.7, 1.4, 2.1 후에
      opacity: 1
  });
});


//SWIPER(수직슬라이드)
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데
  loop: true,
  // autoplay: {
  //   delay:5000
  // }
  pagination: {
    el:'.promotion .swiper-pagination', //페이지번호 요소 선택자
    clickable: true // 사용자의 페이지번호 요소 제어기능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //
    nextEl: '.promotion .swiper-next'
  }
});


//toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
//숨김처리
  promotionEl.classList.add('hide');
  } else {
//보임처리
  promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

