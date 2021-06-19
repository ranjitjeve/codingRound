var arr = [
    [2, 3],
    [3, 4],
    [3, 2],
    [4, 3],
];
var sum = 0;
getInput(arr, 30);

function getInput(arr, passengersNo) {
    var temp = Array.isArray(arr);
    for (let i = 0; i < arr.length; i++) {
        get_Total_Number_of_seats(arr[i]);
    }
    //if (sum < passengersNo) {
    //    return `Available seats are less than passengers in queue`;
    // } else {
    if (temp) {
        arr = JSON.stringify(arr);
        var array = JSON.parse(arr);
        var size_of_row = Math.max.apply(
            Math,
            array.map((e) => e[0])
        );
        var size_of_col = Math.max.apply(
            Math,
            array.map((e) => e[1])
        );

        var seats = assign_Seat_Notation(array);

        var obj = {};
        obj = asign_Seat_Number(
            "A",
            1,
            seats,
            size_of_col,
            size_of_row,
            passengersNo
        );
        obj = asign_Seat_Number(
            "W",
            obj.counter,
            obj.seats,
            size_of_col,
            size_of_row,
            passengersNo
        );
        obj = asign_Seat_Number(
            "M",
            obj.counter,
            obj.seats,
            size_of_col,
            size_of_row,
            passengersNo
        );
        seats = obj.seats;

        console.log(display_Plane_Seats(seats, size_of_col, size_of_row));
    }
    return temp;
    //}
}

function get_Total_Number_of_seats(arr) {
    sum = sum + arr[0] * arr[1];
}
function assign_Seat_Notation(array) {
    var seats = [];
    for (var i = 0; i < array.length; i++)
        seats.push(
            Array(array[i][0])
                .fill()
                .map(() => Array(array[i][1]).fill("M"))
        );

    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {
            seats[i][j][0] = "A";
            seats[i][j][seats[i][j].length - 1] = "A";
        }
    }

    for (var i = 0; i < seats[0].length; i++) {
        seats[0][i][0] = "W";
    }
    for (var i = 0; i < seats[seats.length - 1].length; i++) {
        seats[seats.length - 1][i][seats[seats.length - 1][i].length - 1] = "W";
    }

    return seats;
}

function asign_Seat_Number(
    notation,
    counter,
    seats,
    rowSize,
    colSize,
    waiting_Queue
) {
    for (var i = 0; i < colSize; i++) {
        for (var j = 0; j < rowSize; j++) {
            if (seats[j] == null || seats[j][i] == null) continue;
            for (k = 0; k < seats[j][i].length; k++) {
                if (waiting_Queue >= counter) {
                    if (
                        seats[j] != null &&
                        seats[j][i] != null &&
                        seats[j][i][k] === notation
                    ) {
                        seats[j][i][k] = counter;
                        counter++;
                    }
                }
            }
        }
    }
    return { seats: seats, counter: counter };
}

function display_Plane_Seats(seats, col_Size, row_Size) {
    var string_Temp = "";
    for (var i = 0; i < col_Size; i++) {
        for (var j = 0; j < row_Size; j++) {
            if (seats[j] == null || seats[j][i] == null) {
                for (let x = 0; x < col_Size - 1; x++) string_Temp += " - ";
                continue;
            }
            for (k = 0; k < seats[j][i].length; k++) {
                string_Temp += seats[j][i][k] + " ";
            }
            string_Temp += " , ";
        }
        string_Temp += "\n";
    }
    return string_Temp;
}

module.exports = {
    getInput,
    display_Plane_Seats,
    asign_Seat_Number,
    assign_Seat_Notation,
};
