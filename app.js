$(document).ready(init);

let counter = 0;


function init() {
    console.log(`jQ`);
    $('#js-generate-btn').on('click', newDiv);
    $('.container').on('click', '.js-delete', deleteDiv);
}


function newDiv() {
    $('.container').append(`
    <div class="js-div-initial">
    <p class="">${counter}</p>

    <button class="js-make-yellow">Yellow</button>
    <button class="js-delete">Delete</button>
    </div>
    
    `)
    counter++;
}

function deleteDiv() {
    $(this).parent().remove();
}