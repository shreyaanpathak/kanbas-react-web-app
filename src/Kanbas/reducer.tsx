import { createSlice } from '@reduxjs/toolkit';
import { enroll } from './client';

const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        setEnrollments(state, action: any){
            state.enrollments = action.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment : any = {
              user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
          },
          deleteEnrollment: (state, { payload: { user, course } }) => {
            console.log(user, course)
            state.enrollments = state.enrollments.filter(
                (enrollment: any) => !(enrollment.user === user && enrollment.course === course)
            );
            console.log(state.enrollments);
        }
        
    }
});
export const { addEnrollment, deleteEnrollment, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;