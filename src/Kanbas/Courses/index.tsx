import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, editAssignment } from "./Assignments/reducer";
import * as coursesClient from "./client";
import { create } from "domain";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [ assignmentInfo, setAssignmentInfo] = useState({name: "", points: 0});
  const id = `${cid}_${new Date().getTime()}`;
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { ...assignmentInfo, course: cid };
    await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment({ ...assignmentInfo, course: cid }));
    setAssignmentInfo({name: "", points: 0});
  };

  const links = [
    { path: "Home", element: <Home /> },
    { path: "Modules", element: <Modules /> },
    { path: "Assignments", element: <Assignments /> },
    { path: "Assignments/:aid", element: <AssignmentEditor 
      assignmentInfo={assignmentInfo} 
      setAssignmentInfo={setAssignmentInfo} 
      addAssignmentInfo={createAssignmentForCourse}
      editAssignmentInfo={(id: any) => dispatch(editAssignment(id))} /> },
    { path: "People", element: <PeopleTable /> }
  ]
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            {links.map((link) => (
                <Route path={link.path} element={link.element}/>
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
