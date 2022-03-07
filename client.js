console.log('Here are all the available people:', people);
$(readyNow);

let randomNum = 0;

function readyNow() {
    console.log('jq ready');
    addGuys();
    randomNum = randomNumber(1,4);
    console.log(randomNum);
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
    $('#main').on('click', '.photos', checkClick);
}
//append divs for each person in the people array

function addGuys() {
    let guyNum = 1;
    for (let guy of people){
        $('#main').append(`
            <div class="photos" data-guyNum="${guyNum}"><img src="https://github.com/${guy.githubUsername}.png?size=250" alt="Profile image of ${guy.name}">
            </div>`);
            guyNum++;
    }

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkClick (){
    console.log('checking click')
    console.log($(this).closest('div').data('guyNum'));
    
    // if ($(this).closest(div).data('guyNum'))
}
