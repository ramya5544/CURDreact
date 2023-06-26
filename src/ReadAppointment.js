export function ReadAppointment({ create }) {
 
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ToMeet</th>
              <th>Date</th>
              <th>Time</th>
              <th>Purpose of Meating</th>
            </tr>
          </thead>
          <tbody>
            {create.length > 0 ? (
              create.map((cr, index) => {
                return (
                  <tr key={index}>
                    <td>{cr.ToMeet}</td>
                    <td>{cr.Date}</td>
                    <td>{cr.Time}</td>
                    <td>{cr.Purpose}</td>
                  </tr>
                );
              })
            ) : (
              <tr className="m-5">
                <td colSpan={5}>Appointment not available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }