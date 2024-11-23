import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const unenroll = async (enrollment: any) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollment.course}/${enrollment.user}`);
    return response.data;
};
export const enroll = async (enrollment: any) => {
    const { data } = await axios.post(`${ENROLLMENTS_API}/${enrollment.course}/${enrollment.user}`);
    return data;
}
export const getUnenrollments = async (uid: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/${uid}`);
    return data;
}

export const getAllEnrollments = async () => {
    const { data } = await axios.get(ENROLLMENTS_API);
    return data;
}