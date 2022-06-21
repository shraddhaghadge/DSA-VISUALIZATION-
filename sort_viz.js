const container = document.querySelector(".array_container");

function generateBars(nums = 43)
{
  document.getElementById("selectOpen").style.opacity = "0";

  document.getElementById("insertOpen").style.opacity = "0";

  document.getElementById("bubbleOpen").style.opacity = "0";

  document.getElementById("selectH2").style.opacity = "0";
  document.getElementById("insertH2").style.opacity = "0";
  document.getElementById("bubbleH2").style.opacity = "0";



  for(let i=1; i<=nums; i++)
  {
    var randomNumber = Math.floor(Math.random() * 43) + 1; // Pick random no from 1 to 100

    const bar = document.createElement("div"); // create an element "div"

    bar.classList.add("bar"); // add a class "bar" to div

    bar.style.height = `${randomNumber*8}px`; // give height

    bar.style.transform = `translateX(${i * 30}px)`;

    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_info");
    barLabel.innerHTML = randomNumber;

    bar.appendChild(barLabel);
    container.appendChild(bar);



  }
}

// var knowButton = document.querySelector("select-modal-btn")
// var selectionButton = document.querySelector(".sort_1");
// var insertionButton = document.querySelector(".sort_2");
// var bubbleButton = document.querySelector(".sort_3");
// var generatButton = document.querySelector(".genereteBtn");


// generatButton.addEventListener('click', function(){
//   knowButton.classList.remove('select-modal-btn');
// })

// selectionButton.addEventListener('click', function(){
//   knowButton.classList.add('select-modal-btn');
// })

// insertionButton.addEventListener('click', function(){
//   knowButton.classList.remove('select-modal-btn')
// })


















/* ______________ SELECTION INFO ____________________*/
var modalBtn = document.querySelector('.select-modal-btn');
var modalBg = document.querySelector('.select-modal-bg');
var modalClose = document.querySelector('.select-modal-close');

modalBtn.addEventListener('click', function(){
   modalBg.classList.add('select-bg-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('select-bg-active');
});






async function selectionSort()
{
  document.getElementById("selectOpen").style.opacity = "1";
  document.getElementById("bubbleOpen").style.opacity = "0";
  document.getElementById("insertOpen").style.opacity = "0";

  document.getElementById("selectH2").style.opacity = "1";
  document.getElementById("insertH2").style.opacity = "0";
  document.getElementById("bubbleH2").style.opacity = "0";






  let bars = document.querySelectorAll(".bar");

  var min_index = 0;
  for(var i=0; i<bars.length; i++)
  {
    min_index = i;

    bars[i].style.backgroundColor = "darkblue";

    for(var j=i+1; j<bars.length; j++)
    {
      bars[j].style.backgroundColor = "#DA1212";

      await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );


      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_index].childNodes[0].innerHTML);

      if(val1 < val2)
      {
        if(min_index != i)
        {
          bars[min_index].style.backgroundColor = "rgb(24, 190, 255)";
        }
        min_index = j;
      }
      else
      {
        bars[j].style.backgroundColor = "rgb(24, 190, 255)";
      }
    }

    //swapping two variables min_index and i
    var temp1 = bars[min_index].style.height;
    var temp2 = bars[min_index].childNodes[0].innerText;
    bars[min_index].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_index].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );

    bars[min_index].style.backgroundColor = "rgb(24, 190, 255)"

    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }







}


async function bubbleSort()
{
  document.getElementById("bubbleOpen").style.opacity = "1";

  document.getElementById("insertOpen").style.opacity = "0";

  document.getElementById("selectOpen").style.opacity = "0";

  document.getElementById("selectH2").style.opacity = "0";
  document.getElementById("insertH2").style.opacity = "0";
  document.getElementById("bubbleH2").style.opacity = "1";




  let bars1 = document.querySelectorAll(".bar");

  for(var i=0; i<bars1.length; i++)
  {
    for(var j=0; j<bars1.length-i-1; j++)
    {
      bars1[j].style.backgroundColor = "red";
      bars1[j+1].style.backgroundColor = "red";

      await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );

      var val1 = parseInt(bars1[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars1[j+1].childNodes[0].innerHTML);

      if(val1 > val2)
      {
        //swap two bars
        var temp1 = bars1[j].style.height;
        var temp2 = bars1[j].childNodes[0].innerText;
        bars1[j].style.height = bars1[j+1].style.height;
        bars1[j].childNodes[0].innerText = bars1[j+1].childNodes[0].innerText;
        bars1[j+1].style.height = temp1;
        bars1[j+1].childNodes[0].innerText = temp2;

        await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );
      }

      bars1[j].style.backgroundColor = "yellow";
      bars1[j+1].style.backgroundColor = "yellow";
    }

    bars1[bars1.length-i-1].style.backgroundColor = "rgb(49, 226, 13)";
  }
}

async function insertionSort()
{
  document.getElementById("selectOpen").style.opacity = "0";

  document.getElementById("insertOpen").style.opacity = "1";

  document.getElementById("bubbleOpen").style.opacity = "0";

  document.getElementById("selectH2").style.opacity = "0";
  document.getElementById("insertH2").style.opacity = "1";
    document.getElementById("bubbleH2").style.opacity = "0";


  let bars2 = document.querySelectorAll(".bar");

  bars2[0].style.backgroundColor = "rgb(49, 226, 13)";

  for(var i=1; i<bars2.length; i++)
  {
    var key = parseInt(bars2[i].childNodes[0].innerHTML); //for storing key value
    var height = bars2[i].style.height; //for storing key height

    var j = i-1;

    bars2[i].style.backgroundColor = "darkblue";

    await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );


    while (j>=0 && parseInt(bars2[j].childNodes[0].innerHTML) > key)
    {
      bars2[j].style.backgroundColor = "darkblue";

      bars2[j+1].style.height = bars2[j].style.height;
      bars2[j+1].childNodes[0].innerText = bars2[j].childNodes[0].innerText;

      j -= 1;

      await new Promise( (resolve) => setTimeout( () => {resolve();}, 100 ) );

      for(var k=i; k>=0; k--)
      {
        bars2[k].style.backgroundColor = "rgb(49, 226, 13)";
      }
    }

    bars2[j+1].style.height = height;
    bars2[j+1].childNodes[0].innerHTML = key;

    bars2[i].style.backgroundColor = "rgb(49, 226, 13)"
  }


}

generateBars();

function generate()
{
 window.location.reload();
}

// function selecInfo(){
//   const element_1 = document.getElementById('select-modal-btn');
//   element_1.add();
// }

// function insertInfo(){
//   const element = document.getElementById('select-modal-btn');
//   element.remove();
// }

function myFunction() {
  const element = document.getElementById("select-modal-btn");
  element.remove();
}