import { FaPlus } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";
import { addAssignment } from "./reducer";
import * as assignmentClient from "./client";
import { useDispatch } from "react-redux";

export default function AssignmentEditor({ assignmentInfo, setAssignmentInfo, addAssignmentInfo, editAssignmentInfo }:
    { assignmentInfo: any; setAssignmentInfo: (info: any) => void; addAssignmentInfo: () => void; editAssignmentInfo: (id: any) => any; }) {
    const { cid, aid } = useParams();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const assignment = assignments.find((assignment) => assignment._id === aid);
    const saveAssignment = async () => {
        const newAssignment = { ...assignmentInfo, course: cid };
        await assignmentClient.updateAssignment(newAssignment);
        dispatch(editAssignmentInfo(assignmentInfo));
      };
    
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" className="form-control" placeholder={assignment?.title} onChange={(e) => setAssignmentInfo({_id: aid, title: e.target.value, points: assignmentInfo.points})}/><br />
            <textarea id="wd-description" className="form-control" rows={10}>
                The assignment is available online.
            </textarea>
            <br />
            <div className="row">
                <div className="col text-end my-1">Points</div>
                <div className="col"><input id="wd-points" className="form-control" onChange={(e) => setAssignmentInfo({_id: aid, title: assignmentInfo.title, points: e.target.value})} /></div>
            </div><br />
            <div className="row">
                <div className="col text-end my-1">Assignment Group</div>
                <div className="col">
                    <select id="wd-assignment-group" className="form-select">
                        <option>ASSIGNMENTS</option>
                        <option>IN CLASS</option>
                        <option>FUTURE</option>
                    </select>
                </div>
            </div><br />
            <div className="row">
                <div className="col text-end my-1">Display Grade as</div>
                <div className="col">
                    <select id="wd-display-grade" className="form-select">
                        <option>Percentage</option>
                        <option>Letter</option>
                        <option>4.0 Scale</option>
                    </select>
                </div>
            </div><br />
            <div className="row">
                <div className="col text-end my-1">Submission Type</div>
                <div className="col"><div className="border rounded p-3">
                    <div className="row px-2">
                        <select id="wd-submission-type" className="form-select">
                            <option>Online</option>
                            <option>In-person</option>
                            <option>Presentation</option>
                        </select>
                    </div>
                    <br />
                    <h6><strong>Online Entry Options</strong></h6><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-student-annotations" />
                        <label className="form-check-label" htmlFor="wd-student-annotations">Student Annotations</label>
                    </div><br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-file-uploads" />
                        <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                    </div><br />
                </div></div>
            </div><br />

            <div className="row">
                <div className="col text-end my-1">Assign</div>
                <div className="col">
                    <div className="border rounded p-3">
                        <label htmlFor="wd-assign-to"><strong>Assign To</strong></label><br />
                        <input id="wd-assign-to" className="form-control my-2" value="Everyone" /><br />
                        <label htmlFor="wd-due-date"><strong>Due</strong></label><br />
                        <input id="wd-due-date" className="form-control my-2" type="date" value="2024-10-09" /><br />
                        <div className="row">
                            <div className="col my-1"><strong>Available From</strong></div>
                            <div className="col my-1"><strong>Until</strong></div>
                        </div>
                        <div className="row">
                            <div className="col"><input id="wd-available-from" className="form-control" type="date" value="2024-10-02" /></div>
                            <div className="col"><input id="wd-available-until" className="form-control" type="date" value="2024-10-16" /></div>
                        </div>
                    </div>

                </div>
            </div><br /><hr />
            <div className="row">
                <div className="text-end">
                    <button id="wd-add-assignment-group" className="btn btn-secondary me-2"><a className="text-white text-decoration-none" href={`#/Kanbas/Courses/${cid}/Assignments`}>Cancel</a>
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger"><a className="text-white text-decoration-none" href={`#/Kanbas/Courses/${cid}/Assignments`} 
                    onClick={() => pathname.includes("temp") ? addAssignmentInfo() : saveAssignment()}>Save</a>
                    </button>
                </div>
            </div>
        </div>
    );
}


