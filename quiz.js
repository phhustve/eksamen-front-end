function submitAnswer(){
    var total = 5;
    var score = 0;

    var q1 = document.forms["quiz"]['q1'].value;
    var q2 = document.forms["quiz"]['q2'].value;
    var q3 = document.forms["quiz"]['q3'].value;


    var correctAnsw = ["a", "b", "c", "a", "c"];

    for(var i = 1; i<=total; i++){
        if(eval('q' + i)==answers[i-1]){
            score++
        }
    }
    var results = document.getElementById('score');
    results.innerHTML = score + total ;
    
    
    return false;

}

function fasit(){
  
  document.getElementById('solution').innerHTML = "Q1 = 5, Q2 = 13, Q3 = pi, Q4 = a drink, Q5 = 3"
}