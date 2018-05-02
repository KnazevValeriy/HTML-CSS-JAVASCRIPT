function taskOne(){
	var str = document.getElementById("string1").value;
	var maximalLenght = document.getElementById("int1").value;
	if(str.length > maximalLenght){
	var l = str.slice(0, maximalLenght)+"...";
	alert(l);
	}else alert("Empty!!!")}
	
	
function taskTwo(){
	var text = "Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького."	
	var count = 0;
	var pos = text.indexOf("а");
	while(pos !=-1){
		count++;
		pos = text.indexOf("а",pos+1);
	}
	alert("Nubmer: " + count);
}

function taskThree(){
	var myString = document.getElementById("string2").value;
	var regOne = /xxxx/g;
	var regTwo = /politika/g;
	var newStr = myString.replace(regOne, "");
	var finalStr = newStr.replace(regTwo, "");
	alert(finalStr)
}

function taskFourth(){
	var string = "іва 24 уц ац34434ауку";
	var numbers = parseInt(string.replace(/\D+/g,""));
	alert("Your numbers: "+ numbers);
}



function arrayTaskOne(){
	var testArray = [1,2435,544,4545, 4, 6, 7 ,23];
	double(testArray);
	
}

function arrayTaskTwo(){
	var testArray = [1,2435,544,4545, 4, 6, 7 ,23];
	oddFilter(testArray);
	
}


function arrayTaskThree(){
	var testArray = [1,2435,544,4545, 4, 6, 7 ,23];
	avg(testArray);
	
}

function double(array) {
  array = array.map(function(e){return e*2;});
  alert("Doubled numbers: " + array);
}


function oddFilter(array) {
  array = array.filter(function(element){
	  if(element%2!=0)
		  return true;});
  
    alert("Odd numbers: " + array);
}

function avg(array) {
      var sum = array.reduce(function(acc, element, index){
	    return (acc+element);
      });
      var avg = sum/array.length;
      alert("Average: " + avg);
}

function specialTask(){
	var myString = document.getElementById("string3").value;
	remember(myString);
}


function remember(str) {
	var tmp = [];
	var counter = 0;
    var arr = str.split("");
    for(var i = 0; i<str.length; i++){
      for(var j = 0; j<str.length; j++){
        if(arr[i]==arr[j] && (i!=j)){
          tmp[counter]=(arr[j]);
          counter++;
//           arr[j] = "";
        }
      }
    }
    alert(tmp);
  }
