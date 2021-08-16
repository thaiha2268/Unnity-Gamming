$(window).ready(function(){
    let collectionCard = $('.collection__list');
    let listCards = $('.card');

    listCards.click(function(e){
        $(this).toggleClass('active');
    })
});