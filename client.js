console.log('Here are all the available people:', people);
$(readyNow);

let randomNum = 0;

function readyNow() {
    console.log('jq ready');
    addGuys();
    randomNum = randomNumber(1, 4);
    console.log(randomNum);
    $('#header').empty()
    switch (randomNum) {
        case 1:
            $('#header').append('<h1>Click On: Dane!</h1>');
            break;
        case 2:
            $('#header').append('<h1>Click On: Michael!</h1>');
            break;
        case 3:
            $('#header').append('<h1>Click On: Brandon!</h1>');
            break;
        case 4:
            $('#header').append('<h1>Click On: Zach!</h1>');
            break;
    }
    $('.photos').on('click', checkClick);
}
//append divs for each person in the people array

function addGuys() {
    let guyNum = 1;
    for (let guy of people) {
        $('#main').append(`
            <div data-guy-num="${guyNum}"><img class="photos" src="https://github.com/${guy.githubUsername}.png?size=250" alt="Profile image of ${guy.name}">
            </div>`);
        guyNum++;
    }

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkClick() {
    console.log('checking click')
    console.log($(this).closest('div').data('guyNum'));
    let photoNum = ($(this).closest('div').data('guyNum'));
    if (photoNum === randomNum) {
        alert('Hooray!')
    } else {
        alert('Booooo!')
    }
    readyNow();
}