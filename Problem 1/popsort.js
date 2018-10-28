var numbers = [];

function generateNumbers() {
  for (var i = 0; i < 15; i ++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
}

function showNumbers(element) {
  var ul = document.getElementById(element);
  for (var i = 0; i < 15; i ++) {
    ul.innerHTML += "<li>" + numbers[i] + "</li>";
  }
}

function popSort() {
  // 请与此函数内实现对numbers数组的升序冒泡排序
    for (var i=0;i<numbers.length-1;i++)
    {
      for (var j=0;j<numbers.length-1;j++)
      {
        if (numbers[j]>numbers[j+1])
        {
          var t=numbers[j];
          numbers[j]=numbers[j+1];
          numbers[j+1]=t;
        }
      }
    }
}

generateNumbers(); 
showNumbers('randomArray');
popSort();
showNumbers('sortedArray');