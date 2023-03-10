import React from 'react';

import {card }from '../assets'
import styles, {layout} from '../styles';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Find a better card deal <br className='sm:block hidden'/>
            in a few easy steps.
        </h2>

        <p className={` ${styles.paragraph} max-width-[470px] mt-5`}>
          Please  help me lord for I am learning all these to be outstanding. Whatever you need I will be ready to offer.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )
}

export default CardDeal
