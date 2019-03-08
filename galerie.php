<!DOCTYPE html>
<html lang="en">

  <head>

    <?php include("include/head.php"); ?>
      <script type="text/javascript" src="js/galerie.js"></script>

  </head>

  <body>

    <div class="body">

      <!-- Navigation -->
      <?php include("include/nav.php"); ?>

        <!-- Header -->
      <?php  ?>
      <?php include("include/header.php"); ?>

      <!-- Accueil -->


      <section>

        <!-- E.LECLERC D'AMBOISE -->
        
        <div class="bloc-photo">
          <h1 class="titre-galerie">Magie de Noël : E.LECLERC d'Amboise</h1>
          <!-- Echantillon de photos -->
        <div class="widget-diapo-galerie">
            <div class="diaporama-galerie">
                <div class="repose-image-galerie">
                    <img src="img/diapo_leclerc_1.jpg" alt="galerie1" class="img_paysage"/>
                    <img src="img/diapo_leclerc_2.jpg" alt="galerie2" class="img_paysage"/>
                    <img src="img/diapo_leclerc_3.jpg" alt="galerie3" class="img_paysage"/>
                    <img src="img/diapo_leclerc_4.jpg" alt="galerie4" class="img_portrait"/>
                    <img src="img/diapo_leclerc_5.jpg" alt="galerie5" class="img_paysage"/>
                </div>
            </div>
            <div class="diaporama-bouton-galerie">
                <span id="galerie-photo-precedent" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                <span id="galerie-photo-pause" class="glyphicon glyphicon-pause" aria-hidden="true"></span>
                <span id="galerie-photo-suivant" class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
            </div>
        </div>

            <div class="description-photo">
          <!-- Description -->
          <p class="experience">
            Prestation réalisé au <span class="reference">E.Leclerc d’Amboise</span>, une commune proche de Tours, à l’occasion de <span class="occasion">Noël le 15 décembre 2018</span>
          </p>
          <p class="lien-video">Une vidéo montage de cette journée est disponible sur ma page Facebook : Cliquez <a href="https://www.facebook.com/mehdi.magicien.hypnotiseur/videos/212180339669456/">ici</a> pour la visualiser</p>
        </div>
            </div>

        <!-- PRESTATION SUR SCENE -->
        
        <div class="bloc-photo">
          <h1 class="titre-galerie">Prestation sur scène</h1>
          <!-- Echantillon de photos -->
        <div class="bloc-photo-spectacle">
            <div class="row1">
                <img src="img/diapo-spectacle1.jpg" alt="spectacle1"/>
            </div>
            <div class="row2">
                <div class="column-galerie" id="histoireColumn1-spectacle">
                    <img src="img/diapo-spectacle2.jpg" alt="spectacle2"/>
                </div>
                <div class="column-galerie" id="histoireColumn2-spectacle">
                    <div class="line1-galerie">
                        <img src="img/diapo-spectacle3.jpg" alt="spectacle3"/>
                    </div>
                    <div class="line2-galerie">
                        <img src="img/diapo-spectacle4.jpg" alt="spectacle4"/>
                    </div>
                    <div class="line3-galerie">
                        <img src="img/diapo-spectacle5.jpg" alt="spectacle5"/>
                    </div>
                </div>
            </div>
        </div>

          <!-- Description -->
            <div class="description-photo">
          <p class="experience">
            Spectacle réalisé en juin 2017 pour le spectacle de<br/> <span class="reference">l’École de Danse Ombre</span>.
            
          </p>
            <p class="auteur-photo">Photo prise par : <span class="nom-auteur-photo">@aeroflystudio</span></p>
        </div>

        <div class="bloc-photo">
          <h1 class="titre-galerie">Prestation dans un café en Corée du Sud</h1>
          <!-- Echantillon de photos -->
            <div class="widget-diapo-galerie">
            <div class="diaporama-coree">
                <div class="repose-image-coree">
                    <img src="img/diapo_coree1.jpg" alt="coree1" class="img_portrait"/>
                    <img src="img/diapo_coree2.jpg" alt="coree2" class="img_portrait"/>
                </div>
            </div>
            <div class="diaporama-bouton-coree">
                <span id="coree-photo-precedent" class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                <span id="coree-photo-pause" class="glyphicon glyphicon-pause" aria-hidden="true"></span>
                <span id="coree-photo-suivant" class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
            </div>
        </div>
            </div>
            <div class="description-photo">
          <!-- Description -->
          <p class="auteur-photo">Photo prise par : <span class="nom-auteur-photo">@aeroflystudio</span></p>
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
