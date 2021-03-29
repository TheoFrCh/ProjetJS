$(document).ready(function () {
    $.ajax({
        url: "https://ghibliapi.herokuapp.com/films",
        method: "GET",
        dataType: "json",


    })

        .done(function (response) {//lorsque ma requête réussi 
            console.log(response) //affiche la response dans la console
            response.forEach(element => { //pour chaque element du tableau de mon api
                const title = document.createElement("h3") //crée une variable titre qui sera un élément h3 dans le document
                title.innerHTML = element.title //mon titre, avec la variable innerHTML va prendre pour valeur l'élément "title" de mon api 
                //title.style.color = "green"; //je colore mon titre en vert
                $("#feed").append(title) //replacer tout les éléments à l'interieur de mon id #feed par la balise h3 créée
            });
        })

        .fail(function (error) { // lorsque ma requête echoue
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function () { //à chaque requête
            alert("Requête effectuée");
        })
})

