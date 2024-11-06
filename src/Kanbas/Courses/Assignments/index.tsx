import { FaSearch, FaPlus, FaChevronCircleDown, FaEllipsisV, FaTrash } from 'react-icons/fa';
import React , {useState} from 'react';
import { MdAssignment } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlButtons from './AssignmentControlButtons';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { Link, useLocation, useParams } from "react-router-dom";
import { courses, assignments } from "../../Database";
import { useSelector, useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer';
import DeleteDialog from './DeleteDialog';

export default function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const assignments_list = assignments.filter((a: any) => a.course === cid);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const dispatch = useDispatch();
    return (
        <div id="wd-assignments" className="container">
            <div className="row mb-3">
                <div className="col-md-4">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-search-assignment"
                            className="form-control border-start-0"
                            placeholder="Search for Assignments"
                        />
                    </div>
                </div>
                <div className="col-md-8 text-end">
                    <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                        <FaPlus /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger">
                    <a className="text-decoration-none text-white" href={`#/Kanbas/Courses/${cid}/Assignments/temp`}><FaPlus /> Assignment</a>
                    </button>
                </div>
            </div>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <FaChevronCircleDown />
                        &nbsp;&nbsp;Assignments
                        <FaEllipsisV className="float-end fs-6 my-2" />
                        <AssignmentControlButtons />
                        <div className="float-end fs-6 my-1 me-3">40% of Total</div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments_list.map((assignment: any) => (
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <MdAssignment className="me-2" style={{ color: 'green' }} />
                                    </div>
                                    <div className="col">
                                        <div className="fs-6">
                                            <a className="wd-assignment-link text-decoration-none" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                <strong className="text-black fs-5">{assignment.title}</strong>
                                            </a><br />
                                            <span className="text-danger">Multiple Modules</span> | <strong>Not Available Until</strong> May 6 at 12:00 AM | <br />
                                            <strong>Due</strong> May 13 at 11:59 PM | 100 pts
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <FaTrash className="text-danger me-2 mb-1" onClick={() => dispatch(deleteAssignment(assignment._id))}/>
                                        <GreenCheckmark />
                                        <FaEllipsisV className="fs-6 my-2" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}