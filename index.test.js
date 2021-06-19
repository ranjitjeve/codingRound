const {
    getInput,
    isInputValid,
    showPlaneSeats,
    asignSeatNumber,
    assignSeatNotation,
} = require("./index");
test("checks if input is array ", () => {
    const testArray = [
        [2, 3],
        [3, 4],
        [3, 2],
        [4, 3],
    ];
    const result = getInput(testArray, 30);
    expect(result).toBeTruthy();
});
test("checks if input is not an array ", () => {
    const testArray = "[2, 3],[3, 4],[3, 2],[4, 3]";
    const result = getInput(testArray, 30);
    expect(result).toBeFalsy();
});
/*test("checks if input passenger no is in range ", () => {
    const testArray = [
        [2, 3],
        [3, 4],
        [3, 2],
        [4, 3],
    ];
    const result = getInput(testArray, 30);
    expect(result).toBeTruthy();
});
test("passsenger no is more ", () => {
    const testArray = [
        [2, 3],
        [3, 4],
        [3, 2],
        [4, 3],
    ];
    const result = getInput(testArray, 130);
    console.log(result);
    expect(result).toBe("Available seats are less than passengers in queue");
});*/
