import data from './data.json';
import { useState } from 'react';
import { Card } from './components/Card';
import { Filter } from './components/Filter';

function App() {
  const [filterValues, setFilterValues] = useState([]);

  const addToFilter = e => {
    setFilterValues(prevFilterValues => [
      ...prevFilterValues,
      e.target.textContent,
    ]);
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
            handleClearFilter={handleClearFilter}
          />
        )}
        {data.map(job => (
          <Card job={job} key={job.id} handleFilter={addToFilter} />
        ))}
      </div>
    </>
  );
}

export default App;
