import instance from "../instance";

export async function getStudy() {
  const data = await (await instance.get(`api/v1/study/main`)).data;
  return data;
}
