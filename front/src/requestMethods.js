import axios from "axios";


const BASE_URL ="http://localhost:8005/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDRmZGViODAwN2ViMTdiNTM5ODgyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTkyMTMxMCwiZXhwIjoxNjgwMTgwNTEwfQ.U2bwKpayT-_E2beRMLqPySTU9a7_vU4tMkA8S6_5gGM";

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});