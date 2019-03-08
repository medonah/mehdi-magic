/***************************************
********* FICHIER JS *******************
***************************************/
$(function(){
    
    /*********************************
    ** Initialisation des variables **
    *********************************/

    $('#menu-mehdi-histoire').addClass('actif');
    
    // Cache la photo de profil si le navigateur prend plus d'espace qu'il ne le faut
    if($('nav').height()>100){
        // On cache la photo de profil car elle prend trop de place
        $('.nav-img-profil').hide();
        // On diminue la hauteu des blocs du navigateur
        $('.logo-mehdi').css("height",51);
        $('.menu-mehdi').css("height",51);
        $('header').css('padding-top',120);
    } else {
        // On affiche la photo de profil car on aime bien la tête de Mehdi quand même ^^
        $('.nav-img-profil').show();
    }
    
    // Evenement lorsque l'écran change de taille
	$(window).resize(function after(){
        if($('nav').height()>100){
            // On cache la photo de profil car elle prend trop de place
            $('.nav-img-profil').hide();
            // On diminue la hauteu des blocs du navigateur
            $('.logo-mehdi').css("height",51);
            $('.menu-mehdi').css("height",51);
            // On adapte le header
            $('header').css('padding-top',120);
        } else {
            // On affiche la photo de profil car on aime bien la tête de Mehdi quand même ^^
            $('.nav-img-profil').show();
            // On diminue la hauteu des blocs du navigateur
            $('.logo-mehdi').css("height",100);
            $('.menu-mehdi').css("height",100);
            $('header').css('padding-top',120);
        }
    });
    
});