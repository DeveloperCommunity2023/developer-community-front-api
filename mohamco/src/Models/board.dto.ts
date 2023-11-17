export interface BoardDto {
  boardSeq: string;
  boardName: string;
  boardDesc: string;
  postList: PostList[];
}
export interface PostList {
  postSeq: string;
  title: string;
  userName: string;
  userSeq: string;
  createdDt: string;
  likeCount: number;
  viewCount: number;
}

export interface DataType {
  postSeq: number;
  title: string;
  userName: string;
  createdTs: Date;
  viewCount: number;
  likeCount: number;
}

export interface ColimnType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export interface Post{
  boardSeq: string,
  title: string,
  content: string,
  noticeYn: number,
  userSeq: number,
  userName: string
}