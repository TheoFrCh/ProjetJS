$(document).ready(function () {
    $.ajax({
        url: "https://ghibliapi.herokuapp.com/films",
        method: "GET",
        dataType: "json",

//Feed
    })

        .done(function (response) {//lorsque ma requête réussi 
            console.log(response) //affiche la response dans la console
            const selectFilm = document.getElementById("film-select")
            response.forEach(element => { //pour chaque element du tableau de mon api
                const option = document.createElement("option")
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
                option.innerHTML = element.title
                option.value = element.id

                carte.id=element.id
                carte.classList.add("carte")
                carte.append(titre, desc, directeur, producteur, date, duree)
                selectFilm.append(option)

                $("#feed").append(carte) //responselacer tout les éléments à l'interieur de mon id #feed par la balise h3 créée

            });
        })

        .fail(function (error) { // lorsque ma requête echoue
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

      //  .always(function () { //à chaque requête
      //      alert("Requête effectuée");
      //  })
//Carrousel
    $('#carrousel').slick({ //https://www.jqueryscript.net/slider/Fully-Responsive-Flexible-jQuery-Carousel-Plugin-slick.html
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }, {
            breakpoint: 870,
            settings: {
                slidesToShow: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true
            }
        }]
    });
//bouton drop down
    $(".dropbtn").on("click", function () {
        document.getElementById("myDropdown").classList.toggle("show");
    });

//Ajouter un commentaire
    function afficher() {
        const film = document.querySelector('#film-select').value;
        console.log(film);
        const carte = document.getElementById(film)
        const commentaire = document.querySelector('#coment').value; 
        const showCom = document.createElement('div'); 
        const contenu = document.createElement('p');
        contenu.textContent = "Commentaire : " + commentaire + " "; 
        showCom.appendChild(contenu);
        carte.appendChild(showCom) 
    }

    document.querySelector('#button').addEventListener('click', function(event) {
        event.preventDefault();
        afficher();
    })

})

