$(document).ready(function() {
    // Insert your JQuery code for the game

    $("section").prepend("<button class=rules >Rules</button>");
    $(".rules").addClass("buttonRules");

    $("section").prepend("<div id=displayRules></div>");
    $("#displayRules").append("<p>");
    $("p").css({fontSize: "1.4em"}).text("Pour gagner une partie de puissance 4, il suffit d'être le premier à aligner 4 jetons de sa couleur horizontalement, verticalement et diagonalement. Si lors d'une partie, tous les jetons sont joués sans qu'il y est d'alignement de jetons, la partie est déclaré nulle.")

    $("#displayRules").addClass("animista").hide();
    
    $(".rules").click(function(){
        $("#displayRules").slideToggle();

        // $("#displayRules").animate({
        //   opacity: '0.5',
        //   fontSize: '125%'
        // }, "slow");
        // $("#displayRules").animate({
        //   opacity: '1',
        //   fontSize: '100%'
        // }, "fast");
    })

    const p4 = new Game("#game",7,6);
})




















//     var tab_game = [
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0]
//     ];  // ce tableau represente la grille de jeu (6 de hauteur, 7 de largeur), il vous sera très utile pour identifier le nombre de jeton aligner !

//     const $tab = $("#puissance4");

//     var player_turn = 1; // permet de determiner a quelle joueur c'est le tour (joueur1 = 1, joueur2 = 2)

//     // exemple d'utilisation :

//     $("td").click(function() {

//         let row_id = $(this).attr('data-id'); // récupere l'index de la case cliker (td)
//         let col_id = $(this).parent().attr('data-id'); // récupere l'index de la colonne correspondant a la case clicker (tr)


//         if (player_turn === 1) {  // player 1 turn

//             tab_game[col_id][row_id] = 1; // on definis un jeton pour le player 1 dans notre tableau représentant notre grille de jeu

//             player_turn = 2; // Comme le player 1 viens de jouer on definis player_turn à 2 pour indiquez que c'est au player 2 de jouer

//             // for (let i = 0; i < rows_id.length; i++) {
//             // row_id[i] = col_id.fill(0);
//             // }

//             $(this).children().attr('src', 'img/soleil.png'); // on affiche visuellement sur la grille de jeu le jeton correspondant au player 1
//         }
//         else { // player 2 turn

//             tab_game[col_id][row_id] = 2; // on definis un jeton pour le player 2 dans notre tableau représentant notre grille de jeu

//             player_turn = 1; // Comme le player 2 viens de jouer on definis player_turn à 1 pour indiquez que c'est au player 1 de jouer

//             $(this).children().attr('src', 'img/lune.png');
//         }

//     });

//     $("#restartGame").click(function(){

//         $("td").children().attr("src", "img/trou_noir.jpg");
//         player_turn = 1;
//     })

//     // ATTENTION ! Dans l'exemple ci-dessus on insere directement le jeton sur l'élement de la colonne clicker ->
//     // au puissance4 on veut que le jeton descende au plus bas de la colonne clicker en fonction de si il y a des jeton en dessous ou pas ->
//     // qui plus est si vous tester vous verrez que l'on peut placer un jeton sur un autre jeton, encore une fois ceci n'est qu'un exemple pour vous aider a démarrer !

//     // Cette exemple est codé en 'procédural', le faire en orienté objet avec une class Game serait peut etre plus adapter ;-)

// });










// 3. Développement du jeu, celui-ci devras au minimum implémenter un design original ainsi que le code JQuery permettant de : 

// - Placer des 'jetons' au click sur une colonne (les jeton descende au plus bas possible de celle-ci, en fonction de si il y as des jeton en dessous ou non)

// - Indiquez visuellement quel joueur doit jouer (système de tour par tour)

// - Reperer/indiquez l'allignement de 4 jetons d'une même couleur (vertical, horizontal, diagonal), et indiquez visuellement le coup/joueur gagnant

// - Restart la partie (à l'aide d'un button, pas de f5...)


// 4. Développement (bonus) : 

// - Ajouter de l'animation (placement de jetons, focus colonne au passage souris, victory screen, musique, etc...)

// - Pouvoir annuler le dernier coup joué (et uniquement le dernier coup !)

// - Pouvoir jouer contre une IA (même si elle est un peu débile ça passe)
