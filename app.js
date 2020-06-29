$(document).ready(init);

const counter = 0;


function init() {
    console.log(`jQ`);
    $('#js-generate-btn').on('click', newDiv);
}


function newDiv() {
    $('.container').append(`
    <div class="js-div-initial">
    <p class="">${counter}</p>
    </div>
    
    `)
}