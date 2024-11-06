import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addEnrollment, deleteEnrollment } from './reducer';



export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const [enrolling, setEnrolling] = useState(true);

  const enrolled = courses.filter((course) =>
    enrollments.some((enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );
  const enrolledCourseIds = new Set(enrolled.map((course) => course._id));
  const isCourseEnrolled = (courseId: any) => enrolledCourseIds.has(courseId);

  const dispatch = useDispatch();
  const handleEnroll = (event: any, courseId: any) => {
    event.preventDefault();
    const enrollment = { user: currentUser._id, course: courseId };
    dispatch(addEnrollment(enrollment));
  };

  const handleUnenroll = (event: any, courseId: any) => {
    event.preventDefault();
    dispatch(deleteEnrollment({ userId: currentUser._id, courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {isStudent && <button className="btn btn-primary float-end" id="wd-enrollments-button" onClick={() => setEnrolling(!enrolling)}>
          Enrollments
        </button>}</h1> <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
      </h5>
      <br />
      <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(enrolling ? enrolled : courses)
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src={`/images/${course.img}`} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>
                      {isStudent && isCourseEnrolled(course._id) ? (
                        <button
                          className="btn btn-danger float-end me-2"
                          onClick={(event) => handleUnenroll(event, course._id)}
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end me-2"
                          onClick={(event) => handleEnroll(event, course._id)}
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      )}

                      {isFaculty && (<><button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button><button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                          Update
                        </button></>)}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
