$(document).ready(init);

let counter = 1;

function init() {
    console.log(`jQ`);
    $('#js-generate-btn').on('click', newDiv);
    $('.container').on('click', '.js-delete', deleteDiv);
    $('.container').on('click', '.js-make-yellow', makeYellow);
}

function newDiv() {
    $('.container').append(`
    <div class="js-div-initial border">
    <p class="h2">${counter}</p>

    <button class="js-make-yellow">Yellow</button>
    <button class="js-delete">Delete</button>
    </div>
    `)
    counter++;
}

function deleteDiv() {
    $(this).parent().remove();
}

function makeYellow() {
    $(this).parent().addClass('yellow');
}