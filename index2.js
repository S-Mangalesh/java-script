function repeat(){
    var iname=["lays","KitKat","7UP","coldcoffee","Fanta"];
    var imoney=[15,25,15,50,20];
    console.log("0. lays  Rs.15/-" + "\n"+"1. KitKat Rs.25/-"+ "\n"+"2. 7UP Rs.15/-"+ "\n"+"3. coldcoffee Rs.50/-"+ "\n"+"4. Fanta Rs.20/-");
    var item=Number(prompt("Enter item num:"));
    alert("The item is:" + iname[item]);
    var money=Number(prompt("Enter ammount of You Have:"));
    if(money>0){
        for(let i=3;i>=1;i--){
            alert(i + "!")
        }
        alert("Order Placed")
        var changereq=confirm("Do you Want to See Your Remaining Balance?");
        if(changereq){
            changemoney(money)
        }
    }
    else{
        alert("Your Balance is insufficient");
    }
    function changemoney(money){
        if(money>=imoney[item]){
            var cmoney=money-imoney[item];
            alert("Your Remaining Balance:" + cmoney);
        }
        else{
            alert("Insufficient Balance");
        }
    }
    var Srepeat=confirm("do You Want to Calculate another Student's Result?")
    if(Srepeat){
        repeat()
    }
    else{
        alert("Student's Result Calculation Completed");
    }
}
repeat()