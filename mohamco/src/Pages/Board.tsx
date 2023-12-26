import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Button, Input, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getBoard } from "../Modules/board.service";
import { BoardDto, ColumnType } from "../Models/board.dto";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import "../styles/Board.css";

export function Board() {
  const [board, setBoard] = useState<BoardDto>();
  const [data, setData] = useState();

  let date = new Date(2023, 11, 12);

  const { boardSeq } = useParams(); // 게시판 종류 param 으로 받아옴

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getBoard(boardSeq!).then((res) => {
      // 게시판 조회 api
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

        <div style={{ display: "flex", position: "absolute", right: "13%" }}>
          <Select
            defaultValue={"latest"}
            style={{ width: 120 }}
            options={[
              { value: "latest", label: "최신순" },
              { value: "view", label: "조회수순" },
              { value: "like", label: "좋아요수순" },
            ]}
          ></Select>
        </div>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          rowKey="postSeq"
          pagination={{
            pageSize: 10,
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
          <Button
            type="primary"
            style={{ backgroundColor: "#8f7dad" }}
            size="large"
            onClick={() => {
              navigate("/board/write"); // 게시판 글쓰기 페이지로 이동
            }}
          >
            <HiOutlinePencilSquare size={20} style={{ paddingBottom: "3px" }} />
            글쓰기
          </Button>
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
            style={{ marginLeft: "10px" }}
          >
            <Select.Option value="게시글+댓글">게시글+댓글</Select.Option>
          </Select>
          <Input
            style={{
              width: "fit-content",
              marginLeft: "10px",
            }}
            placeholder="검색어를 입력해주세요"
          />

          <Button
            type="primary"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              marginLeft: "-5px",
              backgroundColor: "#8f7dad",
            }}
          >
            검색
          </Button>
        </div>
      </div>
    </>
  );
}
