const addUsers = (users)=> {
    localStorage.setItem('users', JSON.stringify(users))
}

const addUser = (user)=> {
    let users = JSON.parse(localStorage.getItem('users'));
    localStorage.setItem('users', JSON.stringify([...users, user]));
}

const logInUser = (logInInfo)=> {
    let users = JSON.parse(localStorage.getItem('users'));
    // console.log(typeof users);
    const user = users.find(user => user.email === logInInfo.email);
    if (user) {
        if (user.password===logInInfo.password) {
            return user;
        }
        else {
            return undefined;
        }
    }
    else {
        return undefined;
    }
}

export {addUser, addUsers, logInUser};