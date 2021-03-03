import styles from "./Arrows.module.scss";

const Arrows = () => {

  return (
    <a href="#fotos" className={`${styles.arrowAnim} noSelect`}>
      <div className={`${styles.arrowSliding} no Select`}>
        <div className={styles.arrow}>arrow</div>
      </div>
      <div className={`${styles.arrowSliding} ${styles.delay1} noSelect`}>
        <div className={styles.arrow}>arrow</div>
      </div>
      <div className={`${styles.arrowSliding} ${styles.delay2} noSelect`}>
        <div className={styles.arrow}>arrow</div>
      </div>
    </a>
  );
};

export default Arrows;
