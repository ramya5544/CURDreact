import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import { Home } from "./Home";
import { useState } from "react";
 import { About } from "./About";
import { CreateAppointment } from "./CreateAppointment";
import { ReadAppointment } from "./ReadAppointment";
import { DeleteAppointment } from "./DeleteAppointment";
import { UpdateAppointment } from "./UpdateAppointment";
import Header from "./Header";
import Navbar from "./Navbar";
import Error from "./Error";
import Createid from "./CreateidSearch";

function App() {
  const [create, setCreate] = useState([
    {
      Id: 101,
      ToMeet: "RamyaArunkumar",
      Date: "2023-08-10",
      Time: "12:00",
      Purpose: "meeting To HR",
    },
    {
      Id: 102,
      ToMeet: "Vishvhin",
      Date: "2023-10-07",
      Time: "01:00",
      Purpose: "Parents Meeting",
    },
  ]);

  return (
    <div className="App container">
      <Header text="CRUD APPLICATION" />

      <Router>
        <Navbar
          Link={Link}
          text1="Home"
          text2="CreateAppointment"
          text3="Read-Appointment"
          text4="Update-Appointment"
          text5="Delete-Appointment"
        text6="About"
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/CreateAppointment/"
            element={
              <CreateAppointment create={create} setCreate={setCreate} />
            }
          />
          <Route
            path="/Create-Appointment/:ID"
            element={<Createid create={create} setCreate={setCreate} />}
          />

          <Route
            path="/Read-Appointment/"
            element={<ReadAppointment create={create} />}
          />
          <Route
            path="/Read-Appointment/:ID"
            element={<Createid create={create} />}
          />

          <Route
            path="/Update-Appointment/"
            element={
              <UpdateAppointment create={create} setCreate={setCreate} />
            }
          />

          <Route
            path="/Delete-Appointment/"
            element={
              <DeleteAppointment create={create} setCreate={setCreate} />
            }
          />

          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;