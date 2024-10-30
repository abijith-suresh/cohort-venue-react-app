import CohortRow from "./CohortRow";
import "bootstrap/dist/css/bootstrap.min.css";

function CohortList({ allCohorts, setAllCohorts }) {
  const handleEdit = (cohortId) => {
    // Implement editing logic
  };

  const handleDelete = (cohortId) => {
    setAllCohorts(allCohorts.filter((cohort) => cohort.cohortId !== cohortId));
  };

  return (
    <>
      <h3 className="mb-4">COHORT LIST</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>STACK NAME</th>
            <th>SIZE</th>
            <th>VENUE ID</th>
            <th>START DATE</th>
            <th>DURATION (weeks)</th>
            <th>SPOC</th>
            <th>INSTRUCTOR</th>
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CohortList;
