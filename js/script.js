$(document).ready(function () {
    $.ajax({
        url: "https://ghibliapi.herokuapp.com/films",
        method: "GET",
        dataType: "json",


    })

        .done(function (response) {//lorsque ma requête réussi 
            console.log(response) //affiche la response dans la console
            response.forEach(element => { //pour chaque element du tableau de mon api
                const carte = document.createElement("div")
                const titre = document.createElement("h3") //crée une variable titre qui sera un élément h3 dans le document
                const desc = document.createElement("p")
                const directeur = document.createElement("p")
                const producteur = document.createElement("p")
                const date = document.createElement("p")
                const duree = document.createElement("p")
                const note = document.createElement("p")

                titre.innerHTML = element.title //mon titre, avec la variable innerHTML va prendre pour valeur l'élément "title" de mon api
                desc.innerHTML = "Description : " + element.description
                directeur.innerHTML = "Directeur" + element.director
                producteur.innerHTML = "producteur" + element.producer
                date.innerHTML = "Date de sortie :" + element.release_date
                duree.innerHTML = "Durée : " + element.running_time
                note.innerHTML = "Score Rotten tomatoes : " + element.rt_score

                carte.classList.add("carte")
                carte.append(titre, desc, directeur, producteur, date, duree)

                $("#feed").append(carte) //replacer tout les éléments à l'interieur de mon id #feed par la balise h3 créée

            });
        })

        .fail(function (error) { // lorsque ma requête echoue
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        .always(function () { //à chaque requête
            alert("Requête effectuée");
        })

    $('#carrousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
})

