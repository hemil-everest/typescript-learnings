var score = 33;
score = 44;
var hemil = { name: "hemil", id: 1 };
hemil = { userName: "h", id: 2 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        console.log(id + 1);
    }
}
// array
var data = [1, 2, 3];
var data2 = [1, 2, 3, "4"];
var data3 = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "aisle";
