import { Post } from "../Models/board.dto";
import instance from "../instance";

export async function getBoard(boardSeq: string) {
  const data = await (await instance.get(`api/v1/board/${boardSeq}`)).data;
  console.log("s", data);
  return data.data;
}

export async function boardWrite(post: Post) {                      //글쓰기
  const data = await (await instance.post(('api/v1/board/posts'), 
  post));
}