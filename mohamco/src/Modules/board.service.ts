import instance from "../instance";

export async function getBoard(boardSeq:string) {
  const data = await((
    await instance.get(`api/v1/${boardSeq}`)
  )).data
  return data
}
