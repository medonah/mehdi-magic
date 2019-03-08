<!DOCTYPE html>
<html lang="en">

  <head>

    <?php include("include/head.php"); ?>
      <script type="text/javascript" src="js/histoire.js"></script>

  </head>

  <body>

    <div class="body">

      <!-- Navigation -->
      <?php include("include/nav.php"); ?>

        <!-- Header -->
      <?php  ?>
      <?php include("include/header.php"); ?>

      <section class="biographie">

        <!-- BIOGRAPHIE -->
        <div class="histoire-mehdi">
            <h1 class="titre-biographie">Une histoire...</h1>

            <!-- UNE PETITE HISTOIRE -->
            <p class="description-biographie">
              Artiste passionné de magie depuis mes 17 ans. J’ai découvert cet art lors du marché de Noël de Tours 2011. Depuis je la pratique avec passion. Également passionné d’astrophysique, je tâcherai de vous émerveiller avec ma magie agrémentée d’histoires portant sur l’univers et ses mystères avec un humour justement dosé.
            </p>

            <!-- PHOTOS -->
            <div class="bloc-photo-histoire">
                <div class="column" id="histoireColumn1">
                    <div id="histoireLine1">
                        <img src="img/cartes.jpg" alt="tours de carte"/>
                    </div>
                    <div id="histoireLine2">
                        <img src="img/mini_profil.jpg" alt="profil"/>
                    </div>
                </div>
                <div class="column" id="histoireColumn2">
                    <img src="img/balles.jpg" alt="tours de balles"/>
                </div>
                <div class="column" id="histoireColumn3">
                    <img src="img/concours.jpg" alt="concours"/>
                </div>
            </div>

            <!-- CONCOURS -->
            <p class="concours">Prix spécial du jury au concours Yves D’Anglier 2018 du  (Groupe Régional des Magiciens de la Touraine)</p>

            <!-- ADHERENT FFAP -->
            <p class="membre-ffap">Membre de la FFAP (Fédération Française des Artistes Prestidigitateurs) depuis 2016</p>

        </div>
      </section>

      <!-- Footer -->
      <?php include("include/footer.php"); ?>

      <!-- Bootstrap core JavaScript -->
      <?php include("include/script.php"); ?>

    </div>

  </body>

</html>
