var cartData;
var total;
var names=[];
var prices=[];
var quantity=[];
var title =   '<table align="center" cellspacing="3" width=320px;><tr><th>Назва</th><th>Ціна</th><th>Кількість</th><th>Всього</th></tr>';



function add(id){
	var parent = id.parentNode;
	var children = parent.children;
	
	names.push(children[1].textContent)
	prices.push(children[3].textContent);
	quantity.push(children[5].value);
	if(names.length>25){
		alert("Cart is full!")
	} else
	displayCart();

}

function remove(e){
	names.splice(e, 1);
	prices.splice(e, 1);
	quantity.splice(e, 1);
	if(names.length==0){ document.getElementById("our-items").innerHTML=title;
	}else
	displayCart();
}
	

function displayCart(){
	cartData =  '<table align="center" cellspacing="3" width=320px;><tr><th>Назва</th><th>Ціна</th><th>Кількість</th><th>Всього</th></tr>';
	total = 0;
	for(var i=0;i<names.length;i++){
		total+=quantity[i]* parseInt(prices[i]);
		cartData += "<tr><td>" + names[i] + "</td><td align='center'>" + prices[i] + "</td><td align='center'>" + quantity[i] + "</td><td>" + quantity[i] * parseInt(prices[i]) 		+ "</td><td><button id='delete-button' onclick='remove(" + i + ")'>Delete</button></td></tr>";	
}  
		cartData+= '<tr><td></td><td></td><td><strong>До сплати: </strong></td><td>' + total + '</td></tr></table>' +
		'<button id="delete-all" onclick="removeAll()" class="final-buttons">Clear</button>' + 
		'<a href="form.html"><button id="accept" class="final-buttons">Buy</button></a>';
		document.getElementById("our-items").innerHTML=cartData;

}


function removeAll(){
	names=[];
	prices=[];
    quantity=[];
	document.getElementById("our-items").innerHTML=title;
}
	
	
	
function gj(){
	alert("GOOD JOB!!!!")
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
