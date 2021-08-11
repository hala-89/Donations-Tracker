'use strict';

let tableEle = document.getElementById('table');


function randomNumber() {
    Math.floor((Math.random() * 60) + 20);
}
randomNumber();

function donatorsInfo(donatorName , donationAmount , Age) {

    this.donatorName = donatorName;
    this.donationAmount = donationAmount;
    this.Age = Age;

      allDonators.push(this);

    console.log(donatorsInfo);

}
  let allDonators = [];



donatorsInfo();




///make headerrow
function makeHeader() {

    let headerRow = document.createElement('tr');
    tableEle.appendChild(headerRow);
    let firstTh = document.createElement('th');
    headerRow.appendChild(firstTh);
    firstTh.textContent = ("Donator Name");
    let secandTh = document.createElement('th');
    headerRow.appendChild(secandTh);
    firstTh.textContent = ("Donation Amount");
    let thridTh = document.createElement('th');
    headerRow.appendChild(thridTh);
    firstTh.textContent = ("Age");

}

///renderdata


let nameTd = document.createElement('td');
tableEle.appendChild(nameTd);
nameTd.textContent =this.allDonators.donatorName;

let amountTd = document.createElement('td');
tableEle.appendChild(amountTd);
amountTd.textContent = this.allDonators.donationAmount;

let ageTd = document.createElement('td');
tableEle.appendChild(ageTd);
ageTd.textContent = randomNumber();


////add event
let donationEle=document.getElementById('donation');

donationEle.addEventListener('submit' , submitQuery)

function submitQuery(event){
    event.preventDefault();

    saveLacalStrage();


}

donationEle.removeEventListener('submit' , submitQuery);







    makeHeader();




 function saveLacalStrage(){

    let data=JSON.stringify('donators',data);
    localStorage.setItem(data);

 }

function loadLocalStrage(){

    let parrArr=localStorage.getItem(data);
    parrArr=parseInt(allDonators);

    if(parrArr!==null)
    {

        for (let i=0 ;i<allDonators.length;i++){
            new donatorsInfo(parrArr[i].donatorName,parrArr[i].donationAmount,parrArr[i].Age);
        }
    }


}
loadLocalStrage();


//////Iam cant make all things 