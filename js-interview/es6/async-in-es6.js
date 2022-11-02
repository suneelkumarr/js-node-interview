const delay = (seconds) => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000)
    })
}

console.log("Zero second wait")

delay(1).then(() => {
    console.log("One second wait")
})

delay(5).then(() => {
    console.log("Five second wait")
})

// const getPeopleInSpace = () =>
//     fetch('http://api.open-notify.org/astros.json')
//         .then(res => res.json());

// getPeopleInSpace().then(console.log)

const countToFive = async () => {
    console.log('zero seconds wait');
    await delay(2);
    console.log('Two seconds wait');
    await delay(5);
    console.log('Five seconds wait');
}

countToFive();

const githubRequest = async (loginName) => {
    try {
        var response = await fetch(`http://api.github.com/users/${loginName}/followers`);
        var json = await response.json();
        var followerList = json.map(user => login);
        console.log(followerList)
    } catch (error) {
        console.log("Data didn't load", error);
    }
}

githubRequest('pradeepkumar2');