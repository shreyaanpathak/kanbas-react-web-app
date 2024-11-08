import {createSlice} from '@reduxjs/toolkit';
import {assignments} from '../../Database';
import { editModule } from '../Modules/reducer';
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment : any = {
              _id: new Date().getTime().toString(),
              title: assignment.title,
              points: assignment.points,
              course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
          },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
              (a: any) => a._id !== assignmentId);
        },
        editAssignment: (state, { payload: assignment }) => {
            console.log(assignment);
            state.assignments = state.assignments.map((a: any) =>
              a._id === assignment._id ? {...a, title: assignment.title } : a
            ) as any;
        }
    }
});
export const { addAssignment, deleteAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;