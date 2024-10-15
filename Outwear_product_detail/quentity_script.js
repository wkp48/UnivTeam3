function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    let totalcost = document.querySelector("#totalcost");
    const cost = document.getElementById('cost');
    const stock = document.getElementById('stock');

    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    let costn = cost.innerText;
    let stockn = stock.innerText;
    
    
    // 더하기/빼기
    if(type === 'plus') {
        if(parseInt(number) >= parseInt(stockn)){
            alert("재고가 부족합니다!");
            parseInt(number) = parseInt(stockn) -1;
            let totalcostnum = parseInt(number) * parseInt(costn);
            totalcost.textContent = "₩" + totalcostnum.toLocaleString();
        }
        number = parseInt(number) + 1;
        let totalcostnum = parseInt(number) * parseInt(costn);
        totalcost.textContent = "₩" + totalcostnum.toLocaleString();

    }else if(type === 'minus')  {
        if(number > 0){
            number = parseInt(number) - 1;
            let totalcostnum = parseInt(number) * parseInt(costn);
            totalcost.textContent = "₩ " + totalcostnum.toLocaleString();
        }
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }

let totalcost = document.querySelector("#totalcost");

// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 20
    ) {
    //   document.getElementById('btn-back-to-top').style.visibility = 'visible';
      document.getElementById('btn-back-to-top').classList.add("active");
    } else {
    //   document.getElementById('btn-back-to-top').style.visibility = 'hidden';
      document.getElementById('btn-back-to-top').classList.remove("active");

    }
  });
  
function backToTop() {
    const position =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 10);
        backToTop();
      });
    }
  }