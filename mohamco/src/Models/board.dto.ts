export interface BoardDto {
  boardSeq: string,
  boardName: string,
  boardDesc: string,
  postList: PostList,
}
export interface PostList {
  postSeq: string,
  title: string,
  userName: string,
  userSeq: string,
  createdDt: string,
  likeCount: number,
  viewCount: number
}