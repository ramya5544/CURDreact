import { useState } from "react";

export function UpdateAppointment({ create, setCreate }) {
  const [editselect, setEditselect] = useState(false);

  const [id, setId] = useState(0);

  const [edittomeet, setEdittomeet] = useState("");

  const [editdate, setEditdate] = useState("");

  const [edittime, setEdittime] = useState("");

  const [editpurpose, setEditpurpose] = useState("");

  function Update(id, edittomeet, editdate, edittime, editpurpose) {
    let Create = create.map((cr) => {
      if (cr.Id === id) {
        return {
          Id: id,
          ToMeet: edittomeet,
          Date: editdate,
          Time: edittime,
          Purpose: editpurpose,
        };
      } else {
        return cr;
      }
    });

    setCreate(Create);
    setEditselect(false);
  }

  function Editapp(editdata) {
    setId(editdata[0]);
    setEdittomeet(editdata[1]);
    setEditdate(editdata[2]);
    setEdittime(editdata[3]);
    setEditpurpose(editdata[4]);
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ToMeet</th>
            <th>Date</th>
            <th>Time</th>
            <th>Purpose of Meating</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {editselect === false ? (
            (create.length !== 0 ? (
              create.map((cr, index) => {
                return (
                  <tr key={index} id={index}>
                    <td>{cr.ToMeet}</td>
                    <td>{cr.Date}</td>
                    <td>{cr.Time}</td>
                    <td>{cr.Purpose}</td>
                    <td>
                      <button
                        className="btn btn-primary  m-2"
                        onClick={() => {
                          Editapp([
                            cr.Id,
                            cr.ToMeet,
                            cr.Date,
                            cr.Time,
                            cr.Purpose,
                          ]);
                          setEditselect(true);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="m-5">
                <td colSpan={5}>Appointment not available</td>
              </tr>
            ))
          ) : (
            create.map((cr, index) => {
              if (cr.Id === id) {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        placeholder="Name..."
                        value={edittomeet}
                        onChange={(e) => setEdittomeet(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={editdate}
                        onChange={(e) => setEditdate(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={edittime}
                        onChange={(e) => setEdittime(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Purpose..."
                        value={editpurpose}
                        onChange={(e) => setEditpurpose(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          Update(
                            cr.Id,
                            edittomeet,
                            editdate,
                            edittime,
                            editpurpose
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td>{cr.ToMeet}</td>
                    <td>{cr.Date}</td>
                    <td>{cr.Time}</td>
                    <td>{cr.Purpose}</td>
                    <td>
                      <button
                        className="btn btn-primary  m-2"
                        onClick={() => Editapp(cr.Id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              }
            })
          )}
        </tbody>
      </table>
    </div>
  );
}