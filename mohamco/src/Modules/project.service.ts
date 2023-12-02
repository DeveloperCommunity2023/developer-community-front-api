import instance from "../instance";

export async function getProject() {
    const data = await (await instance.get(`api/v1/project/main`)).data;
    return data.data.projectList;
}