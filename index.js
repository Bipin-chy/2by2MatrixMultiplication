var btn = document.querySelector("#calculate");
btn.addEventListener("click", inverseMatrix);

function inverseMatrix() {

//    let n = parseInt(prompt('Enter order of matrix'));
//    console.log(typeof parseInt(n));

   // Defining array of length
   var a = new Array(2);
   for (let i = 1; i <= 2; i++) {
       a[i] = new Array(2);
   } 


   for (let i = 1; i <= 2; i++) {
       for (let j = 1; j <= 2; j++) {
           a[i][j] = parseInt(prompt('Enter first matrix \r\n a[' + i + '][' + j + ']= '));
       }
   }

   var b = new Array(2);
   for (let i = 1; i <= 2; i++) {
       b[i] = new Array(2);
   }

   for (let i = 1; i <= 2; i++) {
       for (let j = 1; j <= 2; j++) {
           b[i][j] = parseInt(prompt('Enter second matrix \r\n b[' + i + '][' + j + ']= '));
       }
   }


   var c = new Array(2);
   for (let i = 1; i <= 2; i++) {
       c[i] = new Array(2);
   }



   for(let i= 1;i<=2;i++){
       for(let j = 1; j<=2; j++){
           c[i][j] = 0;
           for(let k = 1; k<=2; k++){
                   c[i][j] += parseInt(a[i][k] * b[k][j]);
           }
           
       }
   }

    /* Displaying  Matrix multiplication*/
  
    var table = document.querySelector("#data");
    var resultBox = document.querySelector("#resultHeading");
    
    var text = document.createElement("h6");
    text.setAttribute('style', 'margin-top:20px');
    text.innerText = "The Matrix Multiplication " + 2 +" x " + 2 +" is: ";
    resultBox.appendChild(text);
    for (i = 1; i <= 2; i++) {
        var tr = document.createElement("tr");
        for (j = 1; j <= 2; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerText += c[i][j].toFixed(2);
            
        }
        table.appendChild(tr);

    }
}