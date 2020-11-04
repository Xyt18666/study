enum Status {
    Message = 1, //默认从0开始，自定义为1
    spa,
    dbj,
}

function getd(status: any) {
    if (status === Status.Message) {
        return "Message";
    } else if (status === Status.spa) {
        return "spa";
    } else if (status === Status.dbj) {
        return "dbj";
    }
}

let res = getd(Status.Message); //或者直接写下标
console.log(res);
console.log(Status.Message); //1
console.log(Status[1]); //Message
