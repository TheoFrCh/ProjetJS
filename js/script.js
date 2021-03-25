$(document).ready(function(){
    $.ajax({
        url:"https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        method: "GET",
        dataType: "json",


})

.done(function(response){
    let data = JSON.stringify(response);
    $("div#res").append(data);
})

.fail(function(error){
    alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
})

.always(function(){
    alert("Requête effectuée");
})
})