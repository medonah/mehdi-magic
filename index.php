<!DOCTYPE html>
<html lang="fr">

  <head>

    <?php include("include/head.php"); ?>
    <script type="text/javascript" src="js/accueil.js"></script>

  </head>

  <body>

    <div class="body">

      <!-- Navigation -->
      <?php include("include/nav.php"); ?>

        <!-- Header -->
      <?php include("include/header.php"); ?>

      <!-- ACCEUIL -->

      <!-- Photo principal -->
      <section>
        <div>
            <img src="img/ecole_de_danse_ombres.jpg" alt="ecole-de-danse-ombre-2017" class="photo-presentation"/>
        </div>
      </section>

      
      <section>

        <!-- Premier Paragraphe -->

        <div class="bienvenue-description">
          <h1 class="titre-accueil">Bonjour et bienvenue dans mon univers !</h1>
          <div class="description-paragraphe">
            <p>
              Vous trouverez dans ce site toutes les informations que vous recherchez afin de passer un moment inoubliable 
              remplis d’humour et de magie bien sûr. Cela sera avec joie que je vous accompagnerai dans toutes vos démarches 
              afin que je puisse me joindre à vous pour votre ou vos évènements. N’hésitez pas à me joindre pour toutes 
              questions complémentaires à partir de l’onglet <a href="contact.php" class="lien-page">Contact</a>.<br/>
            </p>

            <p>Réveillons ensemble l’enfant qui sommeil en chacun de nous pour passer le meilleur des moments de votre vie !</p>

            <p>Bonne visite,</p>

            <p>Magicalement</p>

            Quelques <a href="galerie.php">photos</a> pour vous mettre l’eau à la bouche…
          </div>
        </div>

        <div class="widget-diapo">
        <div class="diaporama">
          <div class="repose-image" id="photos">
            <img src="img/diapo_ecole_de_danse_ombres.jpg" alt="école de danse ombres" class="img_paysage"/>
            <img src="img/diapo_galerie.jpg" alt="E.LECLERC d'Amboise" class="img_paysage"/>
            <img src="img/diapo_reaction_coree.jpg" alt="Surpris" class="img_portrait"/>
          </div>
        </div>
        <div class="diaporama-bouton">
            <span id="accueil-photo-precedent" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
            <span id="accueil-photo-pause" class="glyphicon glyphicon-pause" aria-hidden="true"></span>
            <span id="accueil-photo-play" class="glyphicon glyphicon-play" aria-hidden="true"></span>
            <span id="accueil-photo-suivant" class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
        </div>
        
      </div>
          

        <!-- Avis PLUS TARD-->

        <!-- Réseaux Sociaux -->
        <div class="accueil-reseaux-sociaux">
            <div class="row">
              <p>Retrouvez moi sur instagram, ma chaîne <a href="https://lc.cx/gg9o">Youtube</a> ainsi que ma page <a href="https://www.facebook.com/mehdi.magicien.hypnotiseur/">Facebook</a></p>
            </div>
            <div class="row">
              <div class="col-md-4"><a href="https://www.facebook.com/mehdi.magicien.hypnotiseur/"><img src="img/facebook.png" alt="facebook"/></a></div>
              <div class="col-md-4 youtube"><a href="https://lc.cx/gg9o"><img src="img/youtube.png" alt="youtube" /></a></div>
              <div class="col-md-4"><a href="#"><img src="img/instagram.png" alt="instagram"/></a></div>
            </div>
        </div>

      </section>

      <!-- Footer -->
      <?php include("include/footer.php"); ?>

      <!-- Bootstrap core JavaScript -->
      <?php include("include/script.php"); ?>

    </div>

  </body>

</html>
