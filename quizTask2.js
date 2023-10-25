let r=0;
const showNM=()=> {
    let nm = localStorage.getItem("name");
    document.getElementById("nm").innerHTML = nm;
}
let c=0;
let database=[{q:"1234",option1:"True",option2 :"False",correctAns:"True"},
              {q:"5678",option1:"True",option2 :"False",correctAns:"False"},
              {q:"4321",option1:"True",option2 :"False",correctAns:"True"},
              {q:"8765",option1:"True",option2 :"False",correctAns:"False"}];
const next=()=> {
    if(c === 0) {
        document.getElementById("btn").innerHTML="next";
    }

    document.getElementById("Q").innerHTML= database[c].q;
    document.getElementById("op1").innerHTML= database[c].option1;
    document.getElementById("op2").innerHTML= database[c].option2;
    if(c === 3) {
        document.getElementById("btn").innerHTML="stop";
    }
    let a=document.getElementById("ANS").value;
    alert(a);
    alert(database[c].correctAns);
    if(a === database[c].correctAns) {
        r=r+5;
    }
    c=c+1;
    if(c>3) {
        redirectToResultPage(r);
    }
}
    const redirectToResultPage = (result) => {
        location.href = `result.html?result=${result}`;
    }