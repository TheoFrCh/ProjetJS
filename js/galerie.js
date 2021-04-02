$(document).ready(function () {

    $(".dropbtn").on("click", function () {
        document.getElementById("myDropdown").classList.toggle("show");
    });


    let galerie = [
        "https://www.studioghibli.fr/wp-content/uploads/2009/07/pompoko-wallpaper-2.jpg",
        "https://www.studioghibli.fr/wp-content/uploads/2009/07/porco-rosso-wallpaper.jpg",
        "https://www.studioghibli.fr/wp-content/uploads/2009/07/princesse-mononoke-wallapaper.jpg",
        "https://www.studioghibli.fr/wp-content/uploads/2009/07/le-voyage-de-chihiro-wallpaper.jpg",
        "https://www.studioghibli.fr/wallpapers/totoro_wallpaper.jpg",
        "https://studioghiblimovies.com/wp-content/uploads/2020/03/D7K2JWwWkAAnpa82.jpg"
    ];
    console.log(galerie)
    function showImg() {
        galerie.forEach(element => {
            console.log(element)
            const divImg = document.createElement("div");
            const imageImg = document.createElement("img");
            imageImg.classList.add("triGalerie");
            imageImg.src = element
            $("#galerie").append(divImg, imageImg);
        })
    }
    showImg()

    $(".listButton").on("click", function () {
        document.getElementById("galerie").className = "column";
    })

    $(".gridButton").on("click", function () {
        document.getElementById("galerie").className = "grid";
    })

    function addImg() {
        const commentaire = document.querySelector('#addImage').value;
        const addedImg = document.createElement("img");
        addedImg.src = commentaire
        addedImg.classList.add("triGalerie");
        $("#galerie").append(addedImg)
    }
    document.querySelector('#sendImg').addEventListener('click', function (event) {
        event.preventDefault();
        addImg();
    })

})