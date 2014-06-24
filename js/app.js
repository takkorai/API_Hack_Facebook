


$(document).ready( function() {



    for(var pl in allGolfers){
        $(".players").append('<li class="' + pl + '">'+allGolfers[pl].golfer+'</li>');
        $(".players_picture").append('<li class="' + pl + ' '+pl+'_default_picture player_default_picture hidden">&nbsp;</li>');
        var CurrentPlayersImageClass= $("."+pl+"_default_picture");
        CurrentPlayersImageClass.css('background-image', 'url(' + allGolfers[pl].image + ')');
    };

     $(".players").on("mouseover", "li", function(){

        var hoveredPlayer = $(this).attr("class");
        console.log(hoveredPlayer);
        $(".players_picture").find('.'+hoveredPlayer+'').removeClass("hidden")
        
     });
     $(".players").on("mouseout", "li", function(){
        var hoveredPlayer = $(this).attr("class");
        console.log(hoveredPlayer);
        $(".players_picture").find('.'+hoveredPlayer+'').addClass("hidden")
        
     });


     

     $(".players").on("click", "li", function(){
        var selectedPlayer = $(this).attr("class");
        console.log(selectedPlayer);
     });



});




    function Players (golfer, ranking, image){
    this.golfer = golfer;
    this.ranking = ranking;
    this.image = image;
    };

    var allGolfers = {
    AdamScott: new Players("Adam Scott",1, "img/adam_scott.jpg"),
    HenrikStenson: new Players("Henrik Stenson",2, "img/HenrikStenson.jpg"),
    BubbaWatson: new Players("Bubba Watson ",3, "img/BubbaWatson.jpg"),
    TigerWoods: new Players("Tiger Woods",4, "img/TigerWoods.jpg"),
    MattKuchar: new Players("Matt Kuchar",5, "img/MattKuchar.jpg"),
    RoryMcIlroy: new Players("Rory McIlroy",6, "img/RoryMcIlroy.jpg"),
    JasonDay: new Players("Jason Day",7, "img/JasonDay.jpg"),
    SergioGarcia: new Players("Sergio Garcia",8, "img/SergioGarcia.jpg"),
    JordanSpieth: new Players("Jordan Spieth",9, "img/JordanSpieth.jpg"),
    JustinRose: new Players("Justin Rose",10, "img/JustinRose.jpg")
    };