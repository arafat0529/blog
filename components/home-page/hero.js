import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Ara.png"
          alt="An image showing Ara"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ara</h1>

      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
