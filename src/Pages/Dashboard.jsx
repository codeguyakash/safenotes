import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Notes from "../components/Notes";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://note-application-be.onrender.com/note/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setNotes(res.data.reverse()));
  }, [token]);

  const CreateNotes = () => {
    navigate("/createnote");
  };

  console.log(notes);
  return (
    <>
      <DashboardNav />
      <div className="cir" onClick={CreateNotes}>
        <div className="plus">Add +</div>
      </div>
      <div>
        {notes.map((note) => (
          <Notes item={note} key={note._id} />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
