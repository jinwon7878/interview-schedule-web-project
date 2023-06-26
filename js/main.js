'use strict'

//scroll animation(newhome.html)
// let mainText = document.querySelectorAll('.text');
// window.addEventListener('scroll', function(){
//     let value = window.scrollY;


// })


// 면접관용 버튼(왼쪽) 눌렀을 때, 이벤트 화면 생성 함수
function handleLeftButtonClick(){
    // 나머지 요소 숨기기
    let otherElements = document.getElementsByClassName('notLeftButton');
    for (let i=0; i<otherElements.length; i++) {
        otherElements[i].style.display = 'none';
    }
    // 왼쪽 버튼 포함 section2 확대
    let buttonSection = document.getElementById('button-section2');
    buttonSection.style.cssText = 'position:relative; margin: 5% auto; display: flex; flex-direction:column; flex-wrap: wrap; width: 70%; height: 450px; transition: 1s; align-items: center; background-color: rgba(0, 0, 0, 0.3); border:1px solid #ffa24b97; border-radius: 20px;';
    // 클릭한 왼쪽 버튼 요소 가져오기
    let leftButton = document.getElementById('left-button');
    // 버튼 초기 위치 계산
    const leftButtonRect = leftButton.getBoundingClientRect();
    const initialLeft = leftButtonRect.left;
    const initialTop = leftButtonRect.top;
    // 왼쪽 버튼에 애니메이션 클래스 추가 후 위치 적용 후 클래스 제거
    leftButton.style.cssText = 'position:absolute; padding: 1rem; font-size: clamp(1rem, 1.5vw, 2rem); border-radius: 1em;'
    leftButton.style.left = `${initialLeft}px`;
    leftButton.style.top = `${initialTop+300}px`;
    leftButton.style.animation = 'moveLeftButton 1s forwards';
}
//면접관용 버튼에 클릭 이벤트리스너 추가
let leftButton = document.getElementById('left-button');
leftButton.addEventListener('click', handleLeftButtonClick, {once: true});

// css code 주석 확인용
// .select_btn{
//     margin: 3rem;
//     box-sizing: border-box;
//     padding: 4rem 2rem;
//     font-size: clamp(1rem, 3vw, 3.5rem);
//     font-weight: bold;
//     border-radius: 30px;
//     letter-spacing: 0.4rem;
//     background-color:rgba(80, 80, 80, 0.5);
//     color: rgba(255, 255, 255, 0.7);
// }
// .select_btn:hover{
//     transition: 0.3s;
//     background-color:#ffa24b97;
//     color: rgba(255, 255, 255, 0.9);
// }
// .select_btn:active{
//     transition: 0.3s;
//     background-color:#f98316d1;
//     color: rgba(255, 255, 255, 1);
// }