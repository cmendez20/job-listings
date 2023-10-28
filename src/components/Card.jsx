import styles from './Card.module.css';
import classnames from 'classnames';

const Card = ({ job, handleFilter }) => {
  console.log('card props:', job);
  return (
    <div
      className={
        job.featured
          ? classnames(styles.container, styles.featured)
          : styles.container
      }
    >
      <img src={job.logo} alt={`${job.company} logo`} className={styles.logo} />
      <div className={styles.jobContainer}>
        <div className={styles.companyDetails}>
          <p className={styles.company}>{job.company}</p>
          <div className={styles.pills}>
            {job.new && (
              <span className={classnames(styles.pill, styles.pillNew)}>
                New!
              </span>
            )}
            {job.featured && (
              <span className={classnames(styles.pill, styles.pillFeat)}>
                Featured
              </span>
            )}
          </div>
        </div>
        <p className={styles.role}>{job.position}</p>
        <div className={styles.details}>
          <p className={styles.detail}>{job.postedAt}</p>
          <span className={styles.dot}></span>
          <p className={styles.detail}>{job.contract}</p>
          <span className={styles.dot}></span>
          <p className={styles.detail}>{job.location}</p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.skills}>
        {[job.role, job.level, ...job.languages, ...job.tools].map(el => (
          <button className={styles.tablet} onClick={e => handleFilter(e)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Card };
