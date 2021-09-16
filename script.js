
let users = [];
while (true) {
    let str = prompt('Введите запрос: ',);
    let strArr = str.split(' ');
    
    if (strArr[0]=='add,') {
        users.push(strArr[1])
    }
    else if (strArr[0]=='del,'&&users.includes(strArr[1])) {
        console.log(strArr[1]);
        let index = users.indexOf(strArr[1]);
        users.splice(index, 1)
    }else if(strArr[0]=='stop'){
        break;
    }
    
    
    console.log(users);
}

console.log(users);