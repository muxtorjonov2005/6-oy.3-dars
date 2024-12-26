import styles from './index.module.css';

function Car({ cars }) {
  if (!cars || cars.length === 0) return null;

  return (
    <div className={styles.carContainer}>
      {cars.map((car, index) => (
        <div key={index} className={styles.carItem}>
          <span className={styles.carDot}></span>
          {car}
        </div>
      ))}
    </div>
  );
}

export default Car;
