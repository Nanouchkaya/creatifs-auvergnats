import React from "react"

// Locals imports
import creatorslistStyles from "../assets/styles/creatorsList.module.scss"

const CreatorsList = () => (
  <div className={creatorslistStyles.container} id="creators">
    <h2 className={creatorslistStyles.title}>
      Découvrez nos créateurs de talent
    </h2>
    <p className={creatorslistStyles.paragraphe}>
      Ci-dessous, la liste des créateurs qui ont rejoins notre collectif. Ce
      sont ces créateurs que vous pourrez être amenés à découvrir lors de nos
      événements. Si vous êtes vous même un artisan du fait-main et que vous
      souhaitez nous rejoindre, il vous suffit de nous contacter grâce au
      formulaire dédié.
    </p>

    <div className={creatorslistStyles.categories}>
      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Papeterie</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://cynydd.etsy.com"
              className={creatorslistStyles.categoryLink}
            >
              Cynydd
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/shopdodu"
              className={creatorslistStyles.categoryLink}
            >
              Clër
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://sakuem.etsy.com"
              className={creatorslistStyles.categoryLink}
            >
              Sakuem
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/PuntaNera"
              className={creatorslistStyles.categoryLink}
            >
              Punta Nera
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/Lesateliersgeraldine"
              className={creatorslistStyles.categoryLink}
            >
              Les ateliers de Géraldine
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Décoration</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://cynydd.etsy.com"
              className={creatorslistStyles.categoryLink}
            >
              Cynydd
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/surlabranche"
              className={creatorslistStyles.categoryLink}
            >
              Sur la branche
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Maroquinerie</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://artcaroline.etsy.com"
              className={creatorslistStyles.categoryLink}
            >
              Art’Caroline
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Univers enfants</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://artcaroline.etsy.com"
              className={creatorslistStyles.categoryLink}
            >
              Art’Caroline
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/LesMomesdesDomes"
              className={creatorslistStyles.categoryLink}
            >
              Les Mômes des Dômes
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/shopdodu"
              className={creatorslistStyles.categoryLink}
            >
              Clër
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/MolimoCreations"
              className={creatorslistStyles.categoryLink}
            >
              MolimôCréations
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.chipoumi.fr"
              className={creatorslistStyles.categoryLink}
            >
              Chipoumi
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.facebook.com/aliceetcharlotte/"
              className={creatorslistStyles.categoryLink}
            >
              Alice & Charlotte
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Vêtements adulte</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/TIPHAINEunique"
              className={creatorslistStyles.categoryLink}
            >
              Tiphaine’Unique
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Tricot</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/Filteplait"
              className={creatorslistStyles.categoryLink}
            >
              Filteplait
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Objets uniques</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="http://www.microcos.fr"
              className={creatorslistStyles.categoryLink}
            >
              Microcos
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Bijoux</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="www.etsy.com/shop/mejicreation"
              className={creatorslistStyles.categoryLink}
            >
              Meji
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="www.etsy.com/shop/cecileis"
              className={creatorslistStyles.categoryLink}
            >
              Cécile Is
            </a>
          </li>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/WeemCreations"
              className={creatorslistStyles.categoryLink}
            >
              Weem Creations
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Céramique</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/CapiLAtelier"
              className={creatorslistStyles.categoryLink}
            >
              Capi l’atelier
            </a>
          </li>
        </ul>
      </div>

      <div className={creatorslistStyles.category}>
        <h3 className={creatorslistStyles.categoryName}>Bougies</h3>
        <ul className={creatorslistStyles.categoryList}>
          <li className={creatorslistStyles.categoryCreator}>
            <a
              href="https://www.etsy.com/fr/shop/WeemCreations"
              className={creatorslistStyles.categoryLink}
            >
              Weem Creations
            </a>
          </li>
        </ul>
      </div>
    </div>

    <a
      href="https://docs.google.com/forms/d/1-2tqw4zxiisUO8HJ-OTVs766axd4dRdXIgA-0W6KWBI"
      className={creatorslistStyles.link}
    >
      ~ Rejoindre le collectif ~
    </a>
  </div>
)

export default CreatorsList
