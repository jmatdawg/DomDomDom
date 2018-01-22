document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM loaded");

let idNum = -1
    let button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.className = "button"


   
document.body.appendChild(button);
button.addEventListener ("click", function() {
    let square = document.createElement("div");
    document.body.appendChild(square);
    square.className = "box";
    square.id = idNum += 1;
        let text= document.createElement("p");
        square.appendChild(text);
        text.className = "text";
        text.innerHTML= idNum;
        
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
        }
    
    let boxGone = square.addEventListener ("dblclick", function() {
        if 

        }
    
    )

)})})  


//window.alert"no box" 