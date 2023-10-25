const start=()=> {
    let nm=document.getElementById("nm").value;
    localStorage.setItem("name",nm);
    location.href="quizTask2.html";
}