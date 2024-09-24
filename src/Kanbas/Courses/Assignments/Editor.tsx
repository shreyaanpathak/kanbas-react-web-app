export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong><br /><br /></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={50} rows={10}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group">
                            <option>ASSIGNMENTS</option>
                            <option>IN CLASS</option>
                            <option>FUTURE</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade">
                            <option>Percentage</option>
                            <option>Letter</option>
                            <option>4.0 Scale</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>In-person</option>
                            <option>Presentation</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <br />Online Entry Options<br />
                        <input type="checkbox" id="wd-text-entry" /><label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" /><label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recordings" /><label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" id="wd-student-annotations" /><label htmlFor="wd-student-annotations">Student Annotations</label><br />
                        <input type="checkbox" id="wd-file-uploads" /><label htmlFor="wd-file-uploads">File Uploads</label><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign To</label>
                        <br /><input id="wd-assign-to" value="Everyone" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <br /><input type="date" id="wd-due-date" value="2024-05-13" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                        <br /><input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Until</label>
                        <br /><input type="date" id="wd-available-from" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <hr />
            <table width="100%">
                <tr>
                    <td align="right" valign="top">
                        <button id="wd-cancel">Cancel</button>&nbsp;
                        <button id="wd-save">Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
