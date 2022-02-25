const btn=document.querySelector('.btn');
const color=document.querySelector('.color');

//addEventListenert 사용해서 button을 click했을 때(click 이벤트) button clicked가 출력되도록
//arrow fn 활용, callback 함수에 직접 작성
/*
btn.onclick = function() {// 익명함수를 만들고, onClick property에 할당.
    console.log('button clicked');
};

btn.addEventListener('click', buttonHandler); // 콜백함수로 등록
*/
btn.addEventListener('click', () =>{
    //const randArr = getRandomNumber(0,255);
    //const r = randArr[0];
    //const g = randArr[1];  -----------배열 호출 불편한 방법
    //const b = randArr[2];

    const[r,g,b] = getRandomNumber(0,255);

    const rgbColor = `rgba(${r},${g},${b})`;

    document.body.style.backgroundColor=rgbColor;
    color.textContent=rgbColor;
    color.style.color=rgbColor;
 
});

//랜덤값 추출 함수
function getRandomNumber(min,max){
   let randomRGBArray=[];

    for(let i=0;i<3;i++){
   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   //console.log(randomNumber);
   randomRGBArray.push(randomNumber);
    }
    return randomRGBArray;
}

