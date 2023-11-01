import styles from './Filter.module.css';

const Filter = ({ filterValues, handleFilterTab, handleClearFilter }) => {
  return (
    <section className={styles.container}>
      <div className={styles.filters}>
        {filterValues.map(val => (
          <div className={styles.filterTablets} key={val}>
            <span className={styles.filterTablet}>{val}</span>
            <button
              onClick={() => handleFilterTab(val)}
              className={styles.filterTabletClose}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleClearFilter}>
        Clear
      </button>
    </section>
  );
};

export { Filter };
