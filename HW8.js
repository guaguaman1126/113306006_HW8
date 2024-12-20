function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operators').value;
    let resultnum;
    const result = document.getElementById('result');
    const mainContainer = document.getElementById('main-container');

    if (mainContainer.style.backgroundImage) {
        // 如果存在，則恢復為原本顏色（例如白色）
        mainContainer.style.backgroundImage = ""; // 移除背景圖片
        mainContainer.style.backgroundColor = "#f6e58d"; // 恢復背景顏色
    } else {
        // 如果不存在，則設置背景圖片
        mainContainer.style.backgroundImage = "url('cat.png')"; // 替換為你的圖片 URL
        mainContainer.style.backgroundSize = "cover"; // 使圖片覆蓋整個容器
        mainContainer.style.backgroundPosition = "center"; // 圖片置中
    }

     if(isNaN(num1) || isNaN(num2)){
        result.innerHTML = "沒有數字是要算三小，通靈嗎??";
        return;
     }else if(operator=="+"){
        resultnum = num1+num2;
     }else if(operator=="-"){
        resultnum  = num1-num2;
     }else if(operator=="*"){
        resultnum  = num1*num2;
     }else if(operator=="/"){
        resultnum  = num1/num2;
     }else{
         result.innerHTML = "無效的運算符！";
         return;
     }
     result.innerHTML ="對助教的愛有"+resultnum+"分💖";
     

}
