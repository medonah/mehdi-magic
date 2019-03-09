/***************************************
********* FICHIER JS *******************
***************************************/
$(function(){
    
    /*********************************
    ** Initialisation des variables **
    *********************************/
    
    $('#menu-mehdi-galerie').addClass('actif');

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
    var indexGalerieDiapo = 0;
    var indexCoreeDiapo = 0;
    
    // Tableau de la taille des photos
    var heightPhotoGalerie = [];
    var heightPhotoCoree = [];
    
    // Taille maximal de la photo
    var maxHeigthPhotoGalerie = 0;
    var maxHeigthPhotoCoree = 0;
    
    // Défilement de diaporama
    var isDefileGalerie = true;
    var isDefileCoree = true;
    
    // Initialise le tableau de la taille des photos et la taille Max Galerie
    for(var i = 0 ; i < $('.diaporama-galerie img').length ; i++){
        heightPhotoGalerie[i] = $($('.diaporama-galerie img')[i]).height();
        if(heightPhotoGalerie[i]>maxHeigthPhotoGalerie){
            maxHeigthPhotoGalerie = heightPhotoGalerie[i];
        }
    }
    
    // Initialise le tableau de la taille des photos et la taille Max Coree
    for(var i = 0 ; i < $('.diaporama-coree img').length ; i++){
        heightPhotoCoree[i] = $($('.diaporama-coree img')[i]).height();
        if(heightPhotoCoree[i]>maxHeigthPhotoCoree){
            maxHeigthPhotoCoree = heightPhotoCoree[i];
        }
    }
    
    // Initialise la taille de la marge intérieur haut de la photo Galerie
    var arrayPaddingTopPhotoGalerie = [];
    for(var i = 0 ; i < $('.diaporama-galerie img').length ; i++){
        arrayPaddingTopPhotoGalerie[i] = (maxHeigthPhotoGalerie - heightPhotoGalerie[i])/2 +5;
    }
    
    // Initialise la taille de la marge intérieur haut de la photo Coree
    var arrayPaddingTopPhotoCoree = [];
    for(var i = 0 ; i < $('.diaporama-coree img').length ; i++){
        arrayPaddingTopPhotoCoree[i] = (maxHeigthPhotoCoree - heightPhotoCoree[i])/2 +5;
    }
    
    // Cache les deux dernières photos Galerie
	$($('.diaporama-galerie img')[1]).hide();
	$($('.diaporama-galerie img')[2]).hide();
    $($('.diaporama-galerie img')[3]).hide();
    $($('.diaporama-galerie img')[4]).hide();
    
    // Cache les deux dernières photos Coree
	$($('.diaporama-coree img')[1]).hide();
	$($('.diaporama-coree img')[2]).hide();
    
    // Dimensionne la hauteur du diaporama Galerie
	$('.diaporama-galerie').height(maxHeigthPhotoGalerie+20);
    
    // Dimensionne la hauteur du diaporama Coree
	$('.diaporama-coree').height(maxHeigthPhotoCoree+20);
    
    // Dimensionne la marge intérieur du repose image Galerie
	$('.repose-image-galerie').css("padding-top", arrayPaddingTopPhotoGalerie[0]);
    
    // Dimensionne la marge intérieur du repose image Coree
	$('.repose-image-coree').css("padding-top", arrayPaddingTopPhotoCoree[0]);
    
    var animationDiaporamaGalerie = setInterval(function(){
        indexGalerieDiapo = suivanteGalerie(indexGalerieDiapo,arrayPaddingTopPhotoGalerie);
    },5000);
    
    var animationDiaporamaCoree = setInterval(function(){
        indexCoreeDiapo = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
    },5000);
    
    // Fonction qui permet de passer d'une ancienne photo à la nouvelle Galerie
    function passagePhotoGalerie(oldPhoto, newPhoto, newPaddingTop){
        $($('.diaporama-galerie img')[oldPhoto]).fadeOut(1100,function suivante(paddingTopGalerie){
            $('.repose-image-galerie').css("padding-top", newPaddingTop);
            $($('.diaporama-galerie img')[newPhoto]).fadeIn(1100);
        });
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la nouvelle Coree
    function passagePhotoCoree(oldPhoto, newPhoto, newPaddingTop){
        $($('.diaporama-coree img')[oldPhoto]).fadeOut(1100,function suivante(paddingTopCoree){
            $('.repose-image-coree').css("padding-top", newPaddingTop);
            $($('.diaporama-coree img')[newPhoto]).fadeIn(1100);
        });
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la suivante Galerie
    function suivanteGalerie(oldPhoto,arrayPaddingTop){
        if(oldPhoto === arrayPaddingTop.length-1){
            passagePhotoGalerie(oldPhoto, 0, arrayPaddingTop[0]);
            return 0;
        } else {
            passagePhotoGalerie(oldPhoto, oldPhoto+1, arrayPaddingTop[oldPhoto+1]);
            return oldPhoto+1;
        }
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la suivante Coree
    function suivanteCoree(oldPhoto,arrayPaddingTop){
        if(oldPhoto === arrayPaddingTop.length-1){
            passagePhotoCoree(oldPhoto, 0, arrayPaddingTop[0]);
            return 0;
        } else {
            passagePhotoCoree(oldPhoto, oldPhoto+1, arrayPaddingTop[oldPhoto+1]);
            return oldPhoto+1;
        }
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la précédente Galerie
    function precedenteGalerie(oldPhoto,arrayPaddingTop){
        if(oldPhoto === 0){
            passagePhotoGalerie(oldPhoto, arrayPaddingTop.length-1, arrayPaddingTop[arrayPaddingTop.length-1]);
            return arrayPaddingTop.length-1;
        } else {
            passagePhotoGalerie(oldPhoto, oldPhoto-1, arrayPaddingTop[oldPhoto-1]);
            return oldPhoto-1;
        }
    }
    
    // Fonction qui permet de passer d'une ancienne photo à la précédente Coree
    function precedenteCoree(oldPhoto,arrayPaddingTop){
        if(oldPhoto === 0){
            passagePhotoCoree(oldPhoto, arrayPaddingTop.length-1, arrayPaddingTop[arrayPaddingTop.length-1]);
            return arrayPaddingTop.length-1;
        } else {
            passagePhotoCoree(oldPhoto, oldPhoto-1, arrayPaddingTop[oldPhoto-1]);
            return oldPhoto-1;
        }
    }
    
    // Fonction qui permet de faire défiler les photos à l'infini Galerie
    function defilementGalerie(indexPhoto, arrayPaddingTopPhoto){
        setTimeout(suivanteGalerie(indexPhoto,arrayPaddingTopPhoto),5000);
        defilementGalerie(indexPhoto,arrayPaddingTopPhoto);
    }
    
    // Fonction qui permet de faire défiler les photos à l'infini Coree
    function defilementCoree(indexPhoto, arrayPaddingTopPhoto){
        setTimeout(suivanteCoree(indexPhoto,arrayPaddingTopPhoto),5000);
        defilementCoree(indexPhoto,arrayPaddingTopPhoto);
    }
    
    // Evenement pour passer la photo suivante
	$('#galerie-photo-suivant').click(function(){
        if(isDefileGalerie){
            clearInterval(animationDiaporamaGalerie);
        }
		indexGalerieDiapo = suivanteGalerie(indexGalerieDiapo,arrayPaddingTopPhotoGalerie);
        if(isDefileGalerie){
            animationDiaporamaGalerie = setInterval(function(){
                indexGalerieDiapo = suivanteGalerie(indexGalerieDiapo,arrayPaddingTopPhotoGalerie);
            },5000);
        }
	});
    
    // Evenement pour passer la photo suivante
	$('#coree-photo-suivant').click(function(){
        if(isDefileCoree){
            clearInterval(animationDiaporamaCoree);
        }
		indexCoreeDiapo = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
        if(isDefileCoree){
            animationDiaporamaCoree = setInterval(function(){
                indexCoreeDiapo = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
            },5000);
        }
	});
    
    // Evenement pour faire une pause sur l'écran
    $('#galerie-photo-pause').click(function(){
        if(isDefileGalerie){
            clearInterval(animationDiaporamaGalerie);
            isDefileGalerie = false;
            $('#galerie-photo-pause').removeClass('.glyphicon-pause');
            $('#galerie-photo-pause').addClass('.glyphicon-play');
        } else {
            animationDiaporamaGalerie = setInterval(function(){
                indexGalerieDiapo = suivanteGalerie(indexGalerieDiapo,arrayPaddingTopPhotoGalerie);
            },5000);
            isDefileGalerie = true;
            $('#galerie-photo-pause').removeClass('.glyphicon-play');
            $('#galerie-photo-pause').addClass('.glyphicon-pause');
        }
    });
    
    // Evenement pour faire une pause sur l'écran
    $('#coree-photo-pause').click(function(){
        if(isDefileCoree){
            clearInterval(animationDiaporamaCoree);
            isDefileCoree = false;
            $('#coree-photo-pause').removeClass('.glyphicon-pause');
            $('#coree-photo-pause').addClass('.glyphicon-play');
        } else {
            animationDiaporamaCoree = setInterval(function(){
                indexCoreeDiapo = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
            },5000);
            isDefileCoree = true;
            $('#coree-photo-pause').removeClass('.glyphicon-play');
            $('#coree-photo-pause').addClass('.glyphicon-pause');
        }
    });

    // Evenement pour passer la photo precedente
	$('#coree-photo-precedent').click(function(){
        if(isDefileCoree){
            clearInterval(animationDiaporamaCoree);
        }
		indexCoreeDiapo = precedenteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
        if(isDefileCoree){
            animationDiaporamaCoree = setInterval(function(){
                index = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
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
        
        clearInterval(animationDiaporamaGalerie);
        clearInterval(animationDiaporamaCoree);
        maxHeigthPhotoGalerie = 0;
        maxHeigthPhotoCoree = 0;
        for(var i = 0 ; i < arrayPaddingTopPhotoGalerie.length-1 ; i++){
            $($('.diaporama-galerie img')[i]).show();
            heightPhotoGalerie[i] = $($('.diaporama-galerie img')[i]).height();
            if(heightPhotoGalerie[i]>maxHeigthPhotoGalerie){
                maxHeigthPhotoGalerie = heightPhotoGalerie[i];
            }
        }
        for(var i = 0 ; i < arrayPaddingTopPhotoCoree.length-1 ; i++){
            $($('.diaporama-coree img')[i]).show();
            heightPhotoCoree[i] = $($('.diaporama-coree img')[i]).height();
            if(heightPhotoCoree[i]>maxHeigthPhotoCoree){
                maxHeigthPhotoCoree = heightPhotoCoree[i];
            }
        }
        for(var i = 0 ; i < $('.diaporama-galerie img').length ; i++){
            arrayPaddingTopPhotoGalerie[i] = (maxHeigthPhotoGalerie - heightPhotoGalerie[i])/2 +5;
        }
        for(var i = 0 ; i < $('.diaporama-coree img').length ; i++){
            arrayPaddingTopPhotoCoree[i] = (maxHeigthPhotoCoree - heightPhotoCoree[i])/2 +5;
        }
		$('.diaporama-galerie').height(maxHeigthPhotoGalerie+20);
        $('.diaporama-coree').height(maxHeigthPhotoCoree+20);
        $('.repose-image-galerie').css("padding-top", arrayPaddingTopPhotoGalerie[indexGalerieDiapo]);
        $('.repose-image-coree').css("padding-top", arrayPaddingTopPhotoCoree[indexCoreeDiapo]);
        for(var i = 0 ; i < arrayPaddingTopPhotoGalerie.length ; i++){
            if(i != indexGalerieDiapo){
                $($('.diaporama-galerie img')[i]).hide();
            }
        }
        for(var i = 0 ; i < arrayPaddingTopPhotoCoree.length ; i++){
            if(i != indexCoreeDiapo){
                $($('.diaporama-coree img')[i]).hide();
            }
        }
        animationDiaporamaGalerie = setInterval(function(){
            indexGalerieDiapo = suivanteGalerie(indexGalerieDiapo,arrayPaddingTopPhotoGalerie);
        },5000);
        animationDiaporamaCoree = setInterval(function(){
            indexCoreeDiapo = suivanteCoree(indexCoreeDiapo,arrayPaddingTopPhotoCoree);
        },5000);
	});
    
});