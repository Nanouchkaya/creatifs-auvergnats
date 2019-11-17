import React from "react"

// Locals imports
import creatorslistStyles from "../assets/styles/creatorsList.module.scss"

const CreatorsList = ({ sal }) => (
  <div
    className={creatorslistStyles.container}
    data-sal={sal[0]}
    data-sal-delay={sal[1]}
    data-sal-easing={sal[2]}
    id="creators"
  >
    <h1 className={creatorslistStyles.title}>
      Découvrez nos créateurs de talent
    </h1>
    <p className={creatorslistStyles.paragraphe}>
      Ci-dessous, la liste des créateurs qui ont rejoins notre collectif. Ce
      sont ces créateurs que vous pourrez être amenés à découvrir lors de nos
      événements. Si vous êtes vous même un artisan du fait-main et que vous
      souhaitez nous rejoindre, il vous suffit de nous contacter grâce au
      formulaire plus bas.
    </p>
  </div>
)

export default CreatorsList
