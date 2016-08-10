function compareNumberWithHex(number, hex) {
    return (
        (+number).toString(16) === hex
    );
}


// Tests
if (!module.parent) {
    console.log(compareNumberWithHex('16', '10'));
    console.log(compareNumberWithHex('1', '1'));
    console.log(compareNumberWithHex('32', '20'));
}
