<!DOCTYPE html>
<html lang="en">

  <head>

    <?php include("include/head.php"); ?>

  </head>

  <body>

    <div class="body">

      <!-- Navigation -->
      <?php include("include/nav.php"); ?>

        <!-- Header -->
      <?php  ?>
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

        <!-- Diaporam photo -->
        <div class="diaporama">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/diapo_ecole_de_danse_ombres" alt="Premiere image">
              </div>
              <div class="carousel-item">
                <img src="img/diapo_galerie" alt="Deuxieme image">
              </div>
              <div class="carousel-item">
                <img src="img/diapo_reaction_coree" alt="Troisieme image">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <!-- Avis PLUS TARD-->

        <!-- Réseaux Sociaux -->
        <div class="">
            <div class="row">
              <p>Retrouvez moi sur instagram, ma chaîne <a href="#">Youtube</a> ainsi que ma page <a href="#">Facebook</a></p>
            </div>
            <div class="row">
              <div class="col-md-4"><a href="#">Logo facebook</a></div>
              <div class="col-md-4"><a href="#">Logo youtube</a></div>
              <div class="col-md-4"><a href="#">Logo instagram</a></div>
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
