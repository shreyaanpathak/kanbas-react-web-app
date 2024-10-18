import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const links = [
    { path: "Home", element: <Home /> },
    { path: "Modules", element: <Modules /> },
    { path: "Assignments", element: <Assignments /> },
    { path: "Assignments/:aid", element: <AssignmentEditor /> },
    { path: "People", element: <PeopleTable /> },
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
