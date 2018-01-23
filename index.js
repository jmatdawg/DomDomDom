document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

    let idNum = 0
    let button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.className = "button"
    document.body.appendChild(button);
    button.addEventListener ("click", function() {
        let square = document.createElement("div");
        document.body.appendChild(square);
        square.className = "box";
         let wrap = idNum++;
         square.id = wrap
        square.innerText= wrap;
       
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 15)];
                }
                return color;
                }
            square.addEventListener ("click", function() {
            square.style.backgroundColor = getRandomColor();
            })

            let left = 1;
            let right = 1; 
            square.addEventListener ("dblclick", function() {
            if (wrap % 2===0){
                if (square.nextElementSibling == null){
                    alert ("nun");
                }
                document.getElementById(wrap + right).remove();
                right = right + 1;

            } else {
                if(document.getElementById(wrap - left)<1) {
                    alert ("nun");
                } else {
                    document.getElementById(wrap - left).remove();
                left = left + 1;
                }
                    
            }}

        )    }) })
   