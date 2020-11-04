var Status;
(function (Status) {
    Status[Status["Message"] = 1] = "Message";
    Status[Status["spa"] = 2] = "spa";
    Status[Status["dbj"] = 3] = "dbj";
})(Status || (Status = {}));
function getd(status) {
    if (status === Status.Message) {
        return "Message";
    }
    else if (status === Status.spa) {
        return "spa";
    }
    else if (status === Status.dbj) {
        return "dbj";
    }
}
var res = getd(Status.Message); //或者直接写下标
console.log(res);
console.log(Status.Message); //1
console.log(Status[1]); //Message
