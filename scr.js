

/* class workeee 
let markMass =78;
let johnMass =92;
let markHeight =1.69;
let johnHeight =1.95;
let markBmi = markMass/ (markHeight **2) ;
let johnBmi = johnMass/(johnHeight **2) ;
let markHigerBmi= markBmi>johnBmi ;

console.log( "Marks BMI:" + markBmi);
console.log("Johns BMI:" +johnBmi);
console.log("Mark has higher BMI than john?"+markHigerBmi); 

let markMass =95;
let johnMass =85;
let markHeight =1.88;
let johnHeight =1.76;
let markBmi = markMass/ (markHeight **2) ;
let johnBmi = johnMass/(johnHeight **2) ;
let markHigerBmi= markBmi>johnBmi ;

console.log( "Marks BMI:" + markBmi);
console.log("Johns BMI:" +johnBmi);
console.log("Mark has higher BMI than john?"+markHigerBmi); 

let femiage=16;
let toluage=22;
let jamesage=33;
let kemiage=13;

html=`
<table>
    <tr>
      <th>Firstname</th>
      <th>lastname</th>
      <th>Age</th>
      <th>Eligibility</th>
    </tr>
    <tr>
      <td>Femi</td>
      <td>Oluyemi</td>
      <td>${femiage}</td>
      <td>${femiage>=18?'Eligible':'Not eligible'}</td>
    </tr>
    <tr>
      <td>Tolu</td>
      <td>Adeola</td>
      <td>${toluage} </td>
      <td>${toluage>=18?'Eligible':'Not eligible'}</td>
    </tr>
    <tr>
      <td>James</td>
      <td>Bond</td>
      <td>${jamesage}</td>
      <td>${jamesage>=18?'Eligible':'Not eligible'}</td>
    </tr>
    <tr>
      <td>Kemi</td>
      <td>yemisi</td>
      <td>${kemiage}</td>
     <td>${kemiage>=18?'Eligible':'Not eligible'}</td>
    </tr>
  </table>`;
  document.body.innerHTML=html; 


  const array=[10,['tunde',['iremide',['ayomide','sodeeq',]]]];


  let firstname = array[1][0];
  console.log(firstname);

   let secondname = array[1][1][0];
  console.log(secondname);

  let thirdname = array[1][1][1][0];
  console.log(thirdname);

   let fourthname = array[1][1][1][1];
  console.log(fourthname);

   

  const boldlinkstudents= [
    {
      name:'sodeeq',
    age:16,
    state:'ogun',
  },

    {
      name:'iremide',
    age:19,
    state:'oyo',
  },

    {
      name:'favor',
    age:18,
    state:'ondo',
  },

    {
      name:'ayomide',
    age:19,
    state:'osun',
  },
  ]

  html=`
<table>
<tr>
<th>NAME</th>
<th>AGE</th>
<th>STATE</th>
</tr>
<tr>
<td>${boldlinkstudents[0].name}</td>
<td>${boldlinkstudents[0].age}</td>
<td>${boldlinkstudents[0].state}</td>
</tr>
<tr>
<td>${boldlinkstudents[1].name}</td>
<td>${boldlinkstudents[1].age}</td>
<td>${boldlinkstudents[1].state}</td>
</tr>
<tr>
<td>${boldlinkstudents[2].name}</td>
<td>${boldlinkstudents[2].age}</td>
<td>${boldlinkstudents[2].state}</td>
</tr>
<tr>
<td>${boldlinkstudents[3].name}</td>
<td>${boldlinkstudents[3].age}</td>
<td>${boldlinkstudents[3].namestate}</td>
</tr>
</table>`;
 document.body.innerHTML=html; 




 for (let i=0; i<= 100; i++) 
 {
if (i%2==0) {console.log(i)} 
 }




const boldlinkstudents= [
    {
      name:'sodeeq',
    age:16,
    state:'ogun',
  },

    {
      name:'iremide',
    age:19,
    state:'oyo',
  },

    {
      name:'favor',
    age:18,
    state:'ondo',
  },

    {
      name:'ayomide',
    age:19,
    state:'osun',
  },
  ]

 let html="";
for(let i=0; i<boldlinkstudents.length; i++)
  { let num=boldlinkstudents[i]  
    console.log(num)
 html+=`
<ul>
<li>${num.name}</li>
<li>${num.age}</li>
<li>${num.state}</li>
</ul>`;
 document.body.innerHTML=html;}



let currentyear=2023;
let adebirthyear=2012;
let inibirthyear=2002;
let ayobirthyear=2001;
let adeage=currentyear - adebirthyear;
let iniage=currentyear - inibirthyear;
let ayoage=currentyear- ayobirthyear;
console.log(adeage)
console.log(iniage)
console.log(ayoage)


if (adeage>18){console.log(`Ade is eligible to vote cause he is ${adeage}`);} else {console.log(Not eligible to vote);}
if (iniage>18){console.log(`Ini is eligible to vote cause he is ${iniage}`);} else {console.log(Not eligible to vote);}
  if (ayoage>18){console.log(`Ayo is eligible to vote cause he is ${adeage}`);} else {console.log(Not eligible to vote);}

 let color="blue";

      if (color=="blue"){console.log(`${color} is correct`);}



  let color='black';
  if (color=='yellow'){console.log(`${color} is the color`);}
    else if (color=='red'){console.log(`color is ${color}`);}
    else if (color=='brown'){console.log(`${color} is the color`);}
    else if (color=='pink'){console.log(`color is ${color}`);}
     else if (color=='green'){console.log(`color is ${color}`);}
      else {console.log(`${color} is unknown`);}

      
   


function add(a,b){return `if a is added to b it is equal to ${(a+b)}`;}
const addition= add(4,5);
console.log(addition);

function sub(a,b){return `if a is subtracted from b it is equal to ${(a-b)}`;}
const subtraction= sub(4,5);
console.log(subtraction);

function mult(a,b){return `if a is multiplied by b it is equal to ${(a*b)}`;}
const multiplication= mult(4,5);
console.log(multiplication);

function div(a,b){return `if a is divided by b it is equal to ${(a/b)}`;}
const division= div(4,5);
console.log(division);

let orange=[10,20,30,40,50];
let mango=[10,20,30,40,50]
function fruitprocessor(orange,mango){return `The juice contains ${(orange)} oranges and ${(mango)} mangovs, 
therefore the total amounts of fruits used is ${(mango+orange)}`;}
const fruitsused=fruitprocessor(orange[4],mango[3]);
console.log(fruitsused);
  
 




  const fruitslice=function (fruit) { return 4 * fruit;
  }

  const fruitprocessor=function(orange, mango)
  { const mangoslice=fruitslice(mango)
    const orangeslice=fruitslice(orange)
    return`${(mangoslice)} of mangoes and ${(orangeslice)} of oranges were used in making the juice`;}
    console.log(fruitprocessor (10,15))


const calcaverage=function (firstscore,secondscore,thirdscore) { return firstscore/3 + secondscore/3 + thirdscore/3;
  }
  const avgdolph=calcaverage(85,54,41);
  const avgkola=calcaverage(23,34,27);
  console.log(`Average dolphins = ${avgdolph}`)
  console.log(`average kolas = ${avgkola}`)

const checkwinner=function (a,b) 
{ 
 if (a>=2* b) {return`Dolphin is winner`;} 
 else if( b >=2* a ){return`koalas is winner`;}
else {return`no winner`}
  ; }
console.log(checkwinner(avgdolph,avgkola))



const calcaverage2=function (firstscore,secondscore,thirdscore) { return firstscore/3 + secondscore/3 + thirdscore/3;
  }
const avgdolph2=calcaverage2(44,23,71);
  const avgkola2=calcaverage2(65,54,49);

  console.log(`Average dolphins = ${avgdolph2}`)
  console.log(`average kolas = ${avgkola2}`)

const checkwinner2=function (a,b) 
{ 

 if (a>=2* b) {return`Dolphin is winner`;} 
 else if( b >=2* a ){return`koalas is winner`;}
else {return`no winner`}
  ; }
console.log(checkwinner2(avgdolph2,avgkola2))



const birthyears=[1985,1990,2003,2001];
const studentage=function (birthyears) 
{for (let i=0; i<birthyears.length; i++){ let age=2023-birthyears[i]} }
console.log(age)
*/


// const calcTip=function(bill)
// {if (bill>=50 && bill<=300){return bill* 15/100}
// else{return bill* 20/100};}

// let bills=[125,555,44];
// let tips=[];

// let tip1=calcTip(bills[0]);
// let tip2=calcTip(bills[1]);
// let tip3=calcTip(bills[2]);
// tips.push(tip1,tip2,tip3);
// console.log(tips)

// let total=[];
// total.push( bills[0]+tip1, bills[1]+tip2, bills[2]+tip3 )
// console.log(total)


//  const calcTip=function(bill)
//  {if (bill>=50 && bill<=300){return bill* 15/100}
//    else if (bill>300){return bill* 20/100}
//  else{return bill* 0};}

//  let bills=[125,555,44];
//  let tips=[];

//  for(i=0; i<bills.length; i++)
//  {tips.push(calcTip(bills[i]));}
//  console.log(tips)

//  let total=[];
//  total.push( bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2])
//  console.log(total)



// const calcage=function(year)
// {return 2023-birthyears[i]}

// let birthyears=[1995,2002,2012];

// for (i=0; i<birthyears.length; i++)
// { let age=calcage(birthyears[i]);
// console.log(age )}



// const favor={
// firstName:'favor',
// lastName:'ogbaago',
// age:2023-1999,
// job:'developer',
// friends:['iremide','ayomide','sodeeq','adams',]
// };
// let statement=`${favor.firstName} has ${favor.friends.length} friends, and his best friend is called ${favor.friends[1]}`;

// console.log(statement)

// const intrestedIn= prompt('what do you want to knowabout favor? choose between firstName,lastName,age,job,friends')


// if(favor[intrestedIn]){console.log(favor[intrestedIn])}
//   else{console.log('wrong input');}


// const boldlinks=[
//               'iremide',
//               'ayomide',
//               2023-1991,
//               ['sodeeq','tunde','favor'],
// ]


// let newArray=[];
// for (let i=0; i<boldlinks.length; i++){
// console.log(typeof(boldlinks[i]))
// newArray.push(typeof(boldlinks[i]))

// }
// console.log(newArray)


// const age=[46,35,26,24,30,49,50]
// let sum=age.reduce(function(a,b){return a+b;});
// console.log(sum);

// let zum=0;
// for(let i=0; i<age.length;i++)
// {zum+=age[i]}
// // console.log(zum)

// const birthyear = [1991,2000,1985,1986,1987,1988]
// const birthyear2 = [1990,2001,1984,1982,1983,1981,1980]

// const calcAverage = function(a){

//   let totalage = 0;
// for (let i = 0; i < a.length; i++){
//   let age = 2023 - a[i];
//   totalage +=age;

// }
  
// const calcAge = totalage/a.length;
// console.log(calcAge)
// }

// calcAverage(birthyear)
// calcAverage(birthyear2)


// const calcaverage=function (a,b) { return a/b;}
// console.log(AvAge)
// const AvAge=calcaverage(totalage,birthyear.length);

//  document.getElementById('bgc').style.backgroundColor='red';
//  document.querySelector('h1:nth-child(2)').style.backgroundColor='pink';
//  document.querySelector('h1:nth-child(3)').style.backgroundColor='yellow';
//  document.querySelector('h1:nth-child(4)').style.backgroundColor='brown';



//  const displayLion = function(){
//   document.querySelector('#myimage').src='img/lion.jpg';
// } 

//  const displayTiger=function(){document.querySelector('#myimage').src='img/tiger.jpg';};


//  const displayLeopard=function(){document.querySelector('#myimage').src='img/leopard.jpg';};
//  const displayEagle=function(){document.querySelector('#myimage').src='img/eagle.jpg';};




// let num1 = document.getElementById('form1')

// let num2 = document.getElementById('form2')

// let num3=document.getElementById('form3')

// let sum=document.querySelector(".sum")
// let sub=document.querySelector(".sub")
// let mult=document.querySelector(".mult")
// let div=document.querySelector(".div")
// let clear=document.querySelector(".clear")


//  sum.addEventListener('click', function()
//   {
//   let value1 = Number(num1.value);
//   let value2 = Number(num2.value);
//  let total = value1 + value2;
//  num3.value=total;   
//  num1.value = '';
//  num2.value = '';
//  });

//  sub.addEventListener('click', function()
//   {
//   let value1 = Number(num1.value);
//   let value2 = Number(num2.value);
//  let total = value1 - value2;
//  num3.value=total;     
//  num1.value = '';
//  num2.value = '';
//  });

//  mult.addEventListener('click', function()
//   {
//   let value1 = Number(num1.value);
//   let value2 = Number(num2.value);
//  let total = value1 * value2;
//  num3.value=total;   
//  num1.value = '';
//  num2.value = '';
//  });

//  div.addEventListener('click', function()
//   {
//   let value1 = Number(num1.value);
//   let value2 = Number(num2.value);
//  let total = value1 / value2;
//  num3.value=total;     
//  num1.value = '';
//  num2.value = '';
//  });
// clear.addEventListener('click',function(){
//   num3.value = "";
// });



 let change = document.querySelector(".swap");
 let body= document.querySelector('body');
 let header= document.querySelector('h1');
 let header2= document.querySelector('h2');
 let paragraph= document.querySelector('p');
 let ancor=document.querySelector('a');


  change.addEventListener('click',function(){
    body.style.backgroundColor="black";
    header.style.color="blue";
    header.style.fontFamily="Times New Roman";
    header.style.fontSize="90px";
    header2.style.color="blue";
    header2.style.fontFamily="Times New Roman";
    header2.style.fontSize="80px";
    header2.style.textAlign="center";

    for(let i=0; i<paragraph.length; i++){
      const element=paragraph[i];
      element.style.color="green";
      element.style.fontFamily="Helvatica";
      element.style.fontSize="40px";
    }
    
    ancor.style.color='black';
    ancor.style.backgroundColor='grey';
    ancor.style.fontFamily="Helvatica";
   });


// let myArray=[23,42,88,30,50,65,30]

// const calcMean = function(a){
//     let totalmyArray = 0;
//   for (let i = 0; i < a.length; i++){ 
//     totalmyArray +=a[i];
//   } 
//   const calcmean = totalmyArray/a.length;
//   console.log(calcmean)
//   }
//   calcMean(myArray)

// const calcMedian = function(a){
// let newArray= myArray.sort(function(a,b){return a-b});
// console.log(newArray)
// let median = newArray[Math.floor(newArray.length/2)];
// console.log(median)
// }
// calcMedian(myArray)

// const calcMode = function(a){

// }
// calcMode(myArray)