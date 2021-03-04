// Question 2
function adjustMonth(value) {
    var date = new Date();
    var month = date.getMonth();
    date.setMonth(month + value);
    return date;
}

console.log(adjustMonth(2).toLocaleDateString());

// Question 11

var result = "";
var board = [['-', 'X', '-', 'X'], ['-', 'O', 'X', 'O'], ['X', 'O', '-', 'O']];

for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[0].length; j++){
        result = result + board[i][j] + ' ';
    }
    result = result + '\n';
}

console.log(result);