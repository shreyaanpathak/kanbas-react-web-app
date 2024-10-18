import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
export default function CoursesNavigation() {

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    { path: "Home", label: "Home", id: "wd-course-home-link" },
    { path: "Modules", label: "Modules", id: "wd-course-modules-link" },
    { path: "Piazza", label: "Piazza", id: "wd-course-piazza-link" },
    { path: "Zoom", label: "Zoom", id: "wd-course-zoom-link" },
    { path: "Assignments", label: "Assignments", id: "wd-course-assignments-link" },
    { path: "Quizzes", label: "Quizzes", id: "wd-course-quizzes-link" },
    { path: "People", label: "People", id: "wd-course-people-link" },
  ]
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Courses/${course?._id}/${link.path}`} id={`wd-course-${link.path}-link`}
          className={`list-group-item text-danger border border-0 ${pathname.includes(link.label) ? "active text-black" : "text-danger"}`}>{link.label}</Link>
      ))}
    </div>
);}
