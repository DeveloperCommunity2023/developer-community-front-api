import { createData } from "../Models/stydy.dto";
import instance from "../instance";

export async function getStudy() {
  const data = await (await instance.get(`api/v1/study/main`)).data;
  return data.data.studyList;
}

export async function studyCreate(createData: createData) {
  //글쓰기
  return await instance.post("api/v1/study/create", createData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
