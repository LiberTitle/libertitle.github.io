window.onload = function() {
    setGame();
}

function setGame() {
    let game = [0,0,0,0,0,0,0,9,0,
                0,3,0,0,0,0,0,2,8,
                6,0,0,8,0,0,5,7,0,
                0,1,9,0,2,6,0,8,0,
                0,0,4,0,0,9,0,0,0,
                7,0,0,4,0,0,0,0,0,
                8,9,7,3,0,4,6,0,0,
                3,2,6,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0];
    game = game.reverse();
    document.querySelectorAll("div.box input").forEach(box => {
        
        let square = game.pop();
        if (square != 0) {
            box.value = square;
            box.disabled = "true";
        }
    });
}

function highlight() {
    let classArray = window.activeElement.classlist;
    
}