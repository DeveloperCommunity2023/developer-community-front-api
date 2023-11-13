import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { Button, Input, Select, Slider, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getBoard } from "../Modules/board.service";
import { BoardDto, DataType } from "../Models/board.dto";

export function Board() {
  const [board, setBoard] = useState<BoardDto>();
  let date = new Date(2023, 11, 12);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getBoard("B001").then((res) => {
      setBoard(res);
      console.log("d", res);
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "번호",
      dataIndex: "postSeq",
      key: "postSeq",
    },
    {
      title: "제목",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "작성자",
      key: "userName",
      dataIndex: "userName",
    },
    {
      title: "작성일",
      key: "createdTs",
      dataIndex: "createdTs",
    },
    {
      title: "조회수",
      key: "viewCount",
      dataIndex: "viewCount",
    },
    {
      title: "좋아요수",
      key: "likeCount",
      dataIndex: "likeCount",
    },
  ];

  const data: DataType[] = [
    {
      postSeq: 1,
      userName: "John Brown",
      title: "테스트1",
      createdTs: date,
      viewCount: 1,
      likeCount: 1,
    },
    {
      postSeq: 2,
      userName: "John Brown",
      title: "테스트2",
      createdTs: date,
      viewCount: 2,
      likeCount: 1,
    },
    {
      postSeq: 3,
      userName: "John Brown",
      title: "테스트3",
      createdTs: date,
      viewCount: 3,
      likeCount: 3,
    },
  ];
  return (
    <>
      <Navbar></Navbar>

      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div>
          <h4>
            <strong>{board && board.boardName}</strong>
          </h4>
        </div>
        <div>{board && board.boardDesc}</div>
        <br />

        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={{
            position: ["bottomCenter"],
            // showSizeChanger: true,
            // pageSizeOptions: ["10", "20", "50", "100", "200"],
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button type="primary">글쓰기</Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Select
            defaultValue={"전체기간"}
            value={"전체기간"}
            placeholder="전체기간"
          >
            <Select.Option value="전체기간">전체기간</Select.Option>
          </Select>
          <Select
            defaultValue={"게시글+댓글"}
            value={"게시글+댓글"}
            placeholder="게시글+댓글"
          >
            <Select.Option value="게시글+댓글">게시글+댓글</Select.Option>
          </Select>
          <Input
            style={{
              width: "fit-content",
            }}
            placeholder="검색어를 입력해주세요"
          />
          <Button type="primary"></Button>
        </div>
      </div>
    </>
  );
}
