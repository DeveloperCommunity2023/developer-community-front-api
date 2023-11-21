import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Button, Input, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getBoard } from "../Modules/board.service";
import { BoardDto, ColumnType } from "../Models/board.dto";

export function Board() {
  const [board, setBoard] = useState<BoardDto>();
  const [data, setData] = useState();

  let date = new Date(2023, 11, 12);

  const { boardSeq } = useParams();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getBoard(boardSeq!).then((res) => {
      setBoard(res);
      setData(res.postList);
    });
  };

  const columns: ColumnsType<ColumnType> = [
    // 테이블 헤더
    {
      title: "번호",
      dataIndex: "postSeq",
      key: "postSeq",
      align: "center",
      width: "5%",
    },
    {
      title: "제목",
      key: "title",
      dataIndex: "title",
      align: "center",
      width: "25%",
    },
    {
      title: "작성자",
      key: "userName",
      dataIndex: "userName",
      align: "center",
      width: "10%",
    },
    {
      title: "작성일",
      key: "createdTs",
      dataIndex: "createdTs",
      align: "center",
      width: "10%",
    },
    {
      title: "조회수",
      key: "viewCount",
      dataIndex: "viewCount",
      align: "center",
      width: "5%",
    },
    {
      title: "좋아요수",
      key: "likeCount",
      dataIndex: "likeCount",
      align: "center",
      width: "5%",
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
          rowKey="postSeq"
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
