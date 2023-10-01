var rows = 3
var columns = 3

var currTile;
var otherTile;

var turns = 0;

var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".png";

            //Drag Functionality
            tile.addEventListener("dragstart", dragStart); //click on tile to start dragging
            tile.addEventListener("dragover", dragOver); //moving tile around while clicked
            tile.addEventListener("dragenter", dragEnter); //dragging tile onto another tile
            tile.addEventListener("dragleave", dragLeave); //dragged tile leaving another tile
            tile.addEventListener("drop", dragDrop); //drag a tile over another tile, drop the tile
            tile.addEventListener("dragend", dragEnd);  //after drag drop swap the two tiles

            document.getElementById("board").appendChild(tile);

        }
    }
}

function dragStart(e) {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns++
        document.getElementById("turns").innerHTML = turns;
    }

}