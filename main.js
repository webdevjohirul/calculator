let result = $("#result")

function plusMinus(number) {
    var exitNumber = result.val();
    result.val(number + exitNumber)
}

function insertNum(number) {
    var exitNum = result.val();
    result.val(exitNum + number);
}

function clearResult() {
    result.val("");
}

function equal() {
    evalResult = eval(result.val());
    result.val(evalResult);
}

function deleteNumbers() {
    var presValue = result.val();
    if (presValue != '') {
        result.val(presValue.slice(0, -1))
    }
}