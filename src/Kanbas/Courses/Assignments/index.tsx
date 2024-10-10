import { FaSearch, FaPlus, FaChevronCircleDown, FaEllipsisV } from 'react-icons/fa';
import React from 'react';
import { MdAssignment } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from '../Modules/ModuleControlButtons';
import GreenCheckmark from '../Modules/GreenCheckmark';
import { Link } from "react-router-dom";

export default function Assignments() {
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
                        <FaPlus /> Assignment
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
                        <ModuleControlButtons />
                        <div className="float-end fs-6 my-1 me-3">40% of Total</div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2" style={{ color: 'green' }} />
                                </div>
                                <div className="col">
                                    <div className="fs-6">
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            <strong className="text-black fs-5">A1</strong>
                                        </a><br />
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not Available Until</strong> May 6 at 12:00am | <br />
                                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <GreenCheckmark />
                                    <FaEllipsisV className="fs-6 my-2" />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2" style={{ color: 'green' }} />
                                </div>
                                <div className="col">
                                    <div className="fs-6">
                                        <a className="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <strong className="text-black fs-5">A2</strong>
                                        </a><br />
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not Available Until</strong> May 10 at 12:00am | <br /><strong>Due</strong> May 15 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <GreenCheckmark />
                                    <FaEllipsisV className="fs-6 my-2" />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2" style={{ color: 'green' }} />
                                </div>
                                <div className="col">
                                    <div className="fs-6">
                                        <a className="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123">
                                            <strong className="text-black fs-5">A3</strong>
                                        </a><br />
                                        <span className="text-danger">Multiple Modules</span> | <strong>Not Available Until</strong> May 20 at 12:00am | <br /><strong>Due</strong> May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <GreenCheckmark />
                                    <FaEllipsisV className="fs-6 my-2" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
