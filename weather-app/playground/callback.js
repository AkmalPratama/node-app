var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
console.log(1);
    setTimeout(() => {
        callback(user);
    }, 3000);
};
console.log(2);
getUser(31, (userObj) => {
    console.log(userObj);console.log(3);
});