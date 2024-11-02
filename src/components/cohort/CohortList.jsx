import CohortRow from "./CohortRow";
import "bootstrap/dist/css/bootstrap.min.css";

function CohortList({ allCohorts, setAllCohorts }) {
  const handleDelete = (cohortId) => {
    setAllCohorts(allCohorts.filter((cohort) => cohort.cohortId !== cohortId));
  };

  return (
    <div className="container">
      <h3 className="mb-4">COHORT LIST</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">STACK NAME</th>
            <th className="text-center">SIZE</th>
            <th className="text-center">VENUE ID</th>
            <th className="text-center">START DATE</th>
            <th className="text-center">DURATION (weeks)</th>
            <th className="text-center">SPOC</th>
            <th className="text-center">INSTRUCTOR</th>
            <th colSpan={3} className="text-center">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {allCohorts.map((cohort) => (
            <CohortRow
              key={cohort.cohortId}
              cohort={cohort}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CohortList;
