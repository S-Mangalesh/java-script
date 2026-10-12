let name=(prompt("enter your name"))
let num1=Number(prompt("enter your maths mark"))
let num2=Number(prompt("enter your physics mark"))
let num3=Number(prompt("enter your chemistry mark"))

let avg =(num1+num2+num3)/3
alert(avg)
if(avg >=90){
    alert("Grade A")
}
else if(avg >=75){
    alert("Grade B")
}
else if(avg >=50){
    alert("Grade C")
}
else{
    alert("Grade F")
}
