import data from './data.json';
import { useState } from 'react';
import { Card } from './components/Card';
import { Filter } from './components/Filter';

function App() {
  const [filterValues, setFilterValues] = useState([]);
  const [jobListings, setJobListings] = useState(data);

  const addToFilter = e => {
    if (filterValues?.includes(e.target.textContent)) return;

    setFilterValues(prevFilterValues => [
      ...prevFilterValues,
      e.target.textContent,
    ]);
  };

  const removeFilterTablet = filterTab => {
    setFilterValues(prevFilterValues =>
      prevFilterValues.filter(val => val !== filterTab)
    );
  };

  const handleClearFilter = () => {
    setFilterValues([]);
  };

  return (
    <>
      <div className="background"></div>
      <div className="container">
        {filterValues.length > 0 && (
          <Filter
            filterValues={filterValues}
            handleFilterTab={removeFilterTablet}
            handleClearFilter={handleClearFilter}
          />
        )}
        {filterValues.length < 1
          ? jobListings.map(job => (
              <Card job={job} key={job.id} handleFilter={addToFilter} />
            ))
          : jobListings
              .filter(job =>
                filterValues.every(filterVal =>
                  [
                    job.level,
                    job.role,
                    ...job.languages,
                    ...job.tools,
                  ].includes(filterVal)
                )
              )
              .map(job => (
                <Card job={job} key={job.id} handleFilter={addToFilter} />
              ))}
      </div>
    </>
  );
}

// if no filter values, then show jobListings, else, show

export default App;
