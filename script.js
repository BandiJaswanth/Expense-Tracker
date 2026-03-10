let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function addExpense(){

let category = document.getElementById("category").value;
let amount = document.getElementById("amount").value;
let date = document.getElementById("date").value;

if(category=="" || amount=="" || date==""){
alert("Please fill all fields");
return;
}

let expense={
category:category,
amount:Number(amount),
date:date
};

expenses.push(expense);

saveData();

displayExpenses();

clearFields();
}

function displayExpenses(){

let table=document.getElementById("expenseTable");

table.innerHTML="";

let total=0;

for(let i=0;i<expenses.length;i++){

let e=expenses[i];

total+=e.amount;

table.innerHTML+=`
<tr>
<td>${e.date}</td>
<td>${e.category}</td>
<td>${e.amount}</td>
<td><button onclick="deleteExpense(${i})">Delete</button></td>
</tr>
`;
}

document.getElementById("total").innerText="Total: "+total;

}

function deleteExpense(index){

expenses.splice(index,1);

saveData();

displayExpenses();
}

function clearFields(){

document.getElementById("category").value="";
document.getElementById("amount").value="";
document.getElementById("date").value="";
}

function saveData(){

localStorage.setItem("expenses", JSON.stringify(expenses));

}

function searchExpense(){

let searchValue = document.getElementById("search").value.toLowerCase();

let table = document.getElementById("expenseTable");

table.innerHTML="";

let total=0;

for(let i=0;i<expenses.length;i++){

let e = expenses[i];

if(e.category.toLowerCase().includes(searchValue)){

total += e.amount;

table.innerHTML += `
<tr>
<td>${e.date}</td>
<td>${e.category}</td>
<td>${e.amount}</td>
<td><button onclick="deleteExpense(${i})">Delete</button></td>
</tr>
`;

}

}

document.getElementById("total").innerText="Total: "+total;

}