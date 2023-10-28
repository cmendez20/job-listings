import styles from './Filter.module.css';

const Filter = ({ filterValues, handleClearFilter }) => {
  return (
    <section className={styles.container}>
      <div className={styles.filterTablets}>
        {filterValues.map(val => (
          <span>{val}</span>
        ))}
      </div>
      <button className={styles.button} onClick={handleClearFilter}>
        Clear
      </button>
    </section>
  );
};

export { Filter };
