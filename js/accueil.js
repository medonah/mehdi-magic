/***************************************
********* FICHIER JS *******************
***************************************/
$(function(){
    
    /*********************************
    ** Initialisation des variables **
    *********************************/

    $('#menu-mehdi-accueil').addClass('actif');
    
    $('#accueil-photo-play').hide();
    
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
    
    // Index de la photo
    var indexAccueilDiapo = 0;
    
    // Tableau de la taille des photos
    var heightPhotoAccueil = [];
    
    // Taille maximal de la photo
    var maxHeigthPhotoAccueil = 0;
    
    // Défilement de diaporama
    var isDefile = true;
    
    // Initialise le tableau de la taille des photos et la taille Max
    for(var i = 0 ; i < $('#photos img').length ; i++){
        heightPhotoAccueil[i] = $($('#photos img')[i]).height();
        if(heightPhotoAccueil[i]>maxHeigthPhotoAccueil){
            maxHeigthPhotoAccueil = heightPhotoAccueil[i];
        }
    }
    
    // Initialise la taille de la marge intérieur haut de la photo
    var arrayPaddingTopPhoto = [];
    for(var i = 0 ; i < $('#photos img').length ; i++){
        arrayPaddingTopPhoto[i] = (maxHeigthPhotoAccueil - heightPhotoAccueil[i])/2 +5;
    }
    
    // Cache les deux dernières photos
	$($('#photos img')[1]).hide();
	$($('#photos img')[2]).hide();

    // Dimensionne la hauteur du diaporama
	$('.diaporama').height(maxHeigthPhotoAccueil+20);
    
    // Dimensionne la marge intérieur du repose image
	$('.repose-image').css("padding-top", arrayPaddingTopPhoto[0]);

    // Evenement pour passer la photo suivante
	$('#accueil-photo-suivant').click(function(){
        if(isDefile){
            clearInterval(animationDiaporama);
        }
		indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
        if(isDefile){
            animationDiaporama = setInterval(function(){
                indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
            },5000);
        }
	});
    
    
    var animationDiaporama = setInterval(function(){
        indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
    },5000);
    
    $('#accueil-photo-pause').click(function(){
        if(isDefile){
            clearInterval(animationDiaporama);
            isDefile = false;
            $('#accueil-photo-pause').hide();
            $('#accueil-photo-play').show();
        }
    });
    
    $('#accueil-photo-play').click(function(){
        if(!isDefile){
            animationDiaporama = setInterval(function(){
                indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
            },5000);
            isDefile = true;
            $('#accueil-photo-pause').show();
            $('#accueil-photo-play').hide();
        }
    });

    // Evenement pour passer la photo precedente
	$('#accueil-photo-precedent').click(function(){
        if(isDefile){
            clearInterval(animationDiaporama);
        }
		indexAccueilDiapo = precedente(indexAccueilDiapo,arrayPaddingTopPhoto);
        if(isDefile){
            animationDiaporama = setInterval(function(){
                indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
            },5000);
        }
	});

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
        clearInterval(animationDiaporama);
        maxHeigthPhotoAccueil = 0;
        for(var i = 0 ; i < arrayPaddingTopPhoto.length-1 ; i++){
            $($('#photos img')[i]).show();
            heightPhotoAccueil[i] = $($('#photos img')[i]).height();
            if(heightPhotoAccueil[i]>maxHeigthPhotoAccueil){
                maxHeigthPhotoAccueil = heightPhotoAccueil[i];
            }
        }
        for(var i = 0 ; i < $('#photos img').length ; i++){
            arrayPaddingTopPhoto[i] = (maxHeigthPhotoAccueil - heightPhotoAccueil[i])/2 +5;
        }
		$('.diaporama').height(maxHeigthPhotoAccueil+20);
        $('.repose-image').css("padding-top", arrayPaddingTopPhoto[indexAccueilDiapo]);
        for(var i = 0 ; i < arrayPaddingTopPhoto.length ; i++){
            if(i != indexAccueilDiapo){
                $($('#photos img')[i]).hide();
            }
        }
        animationDiaporama = setInterval(function(){
            indexAccueilDiapo = suivante(indexAccueilDiapo,arrayPaddingTopPhoto);
        },5000);
	});
    
    // Fonction qui permet de passer d'une ancienne photo à la nouvelle
    function passagePhoto(oldPhoto, newPhoto, newPaddingTop){
        $($('#photos img')[oldPhoto]).fadeOut(1100,function suivante(paddingTopGalerie){
            $('.repose-image').css("padding-top", newPaddingTop);
            $($('#photos img')[newPhoto]).fadeIn(1100);
        });
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la suivante
    function suivante(oldPhoto,arrayPaddingTop){
        if(oldPhoto === arrayPaddingTop.length-1){
            passagePhoto(oldPhoto, 0, arrayPaddingTop[0]);
            return 0;
        } else {
            passagePhoto(oldPhoto, oldPhoto+1, arrayPaddingTop[oldPhoto+1]);
            return oldPhoto+1;
        }
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la précédente
    function precedente(oldPhoto,arrayPaddingTop){
        if(oldPhoto === 0){
            passagePhoto(oldPhoto, arrayPaddingTop.length-1, arrayPaddingTop[arrayPaddingTop.length-1]);
            return arrayPaddingTop.length-1;
        } else {
            passagePhoto(oldPhoto, oldPhoto-1, arrayPaddingTop[oldPhoto-1]);
            return oldPhoto-1;
        }
    }
    
    // Fonction qui permet de faire défiler les photos à l'infini
    function defilement(indexPhoto, arrayPaddingTopPhoto){
        setTimeout(suivante(indexPhoto,arrayPaddingTopPhoto),5000);
        defilement(indexPhoto,arrayPaddingTopPhoto);
    }

});