let adduser=()=>{

    let a=document.getElementById("fstname").value 
    let b=document.getElementById("lstname").value 
    let c=document.getElementById("eml").value
    let birthdateString =document.getElementById("db").value  
    if(!a){
        alert('please enter name')
        return;
    }
  else if (!b) {
    alert('please enter name')
    return;
  }

 else if(!birthdateString){
    alert("enter ur age")
    return;
  }
  let birthdate = new Date(birthdateString);
  
  // calculate age in years
  let ageInMs = Date.now() - birthdate.getTime();
  let ageInYears = new Date(ageInMs).getFullYear() - 1970;
  
  // print the result
  // console.log("Your age is " + ageInYears + " years.");
// document.getElementById("Output").innerHTML=a+" "+b+""+c+" "+ageInYears
document.getElementById("Output").innerHTML='<table><th>username</th> <th>lastname name</th> <th>age</th> <tr>a</tr></table>'
}