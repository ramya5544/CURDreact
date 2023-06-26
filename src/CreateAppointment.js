import { useEffect, useState } from "react";


export function CreateAppointment({ create, setCreate }) {
const [tomeet, setTomeet] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [purpose, setPurpose] = useState("");

  const [default1, setDefault] = useState(false);
 useEffect(() => {
    setTomeet("");
    setDate("");
    setTime("");
    setPurpose("");
  }, [default1]);

  function CreateApp(tomeet, date, time, purpose) {

    if (tomeet === "" || date === "" || time === "" || purpose === "") {
      alert("Fill all informations");
    } else {
      setCreate([
        ...create,
        {
          Id: create.length + 1,
          ToMeet: tomeet,
          Date: date,
          Time: time,
          Purpose: purpose,
        },
      ]);

     
      default1 ? setDefault(false) : setDefault(true);
    }
  }

  
  return (
    <div className="table-responsive">
      <table className="table ">
        <thead>
          <tr>
            <th>ToMeet</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose of Meeting</th>
            <th>Create</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={tomeet}
                placeholder="Name ..."
                onChange={(e) => {
                  e.preventDefault();
                  setTomeet(e.target.value);
                  
                }}
              />
            </td>
            <td>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  e.preventDefault();
                  setDate(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="time"
                value={time}
                onChange={(e) => {
                  e.preventDefault();
                  setTime(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                value={purpose}
                placeholder="Purpose..."
                onChange={(e) => {
                  e.preventDefault();
                  setPurpose(e.target.value);
                }}
              />
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => {
                  CreateApp(tomeet, date, time, purpose);
                }}
              >
                Create
              </button>
            </td>
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
                  <td></td>
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