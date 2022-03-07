console.log('Here are all the available people:', people);
$(readyNow);

function readyNow() {
    console.log('jq ready');
    addGuys();
}
//append divs for each person in the people array

function addGuys() {
    let guyNum = 1;
    for (let guy of people){
        $('#main').append(`
            <div data-rdmNum="${guyNum}"><img src="https://github.com/${guy.githubUsername}.png?size=250" alt="Profile image of ${guy.name}">
            </div>`);
            guyNum++;
    }

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

