


$(document).ready( function() {



    for(var pl in allGolfers){
        $(".players").append('<li class="' + pl + '">'+allGolfers[pl].golfer+'</li>');
    }


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
    AdamScott: new Players("Adam Scott",1, "images/flyingtrapeze.jpg"),
    HenrikStenson: new Players("Henrik Stenson",2, "images/hoop.png"),
    BubbaWatson: new Players("Bubba Watson ",3, "images/germanwheel.jpg"),
    TigerWoods: new Players("Tiger Woods",4, "images/handbalancing.jpg"),
    MattKuchar: new Players("Matt Kuchar",5, "images/firejuggling.png"),
    RoryMcIlroy: new Players("Rory McIlroy",6, "images/firejuggling.png"),
    JasonDay: new Players("Jason Day",7, "images/firejuggling.png"),
    SergioGarcia: new Players("Sergio Garcia",8, "images/firejuggling.png"),
    JordanSpieth: new Players("Jordan Spieth",9, "images/firejuggling.png"),
    JustinRose: new Players("Justin Rose",10, "images/firejuggling.png"),
    };