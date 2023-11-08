import React from "react";
import Navbar from "../components/NavBar";
import { Button, Input, Select, Slider, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

export function Board() {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "번호",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "제목",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "작성자",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "작성일",
      key: "tags",
      dataIndex: "tags",
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "조회수",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
        </Space>
      ),
    },
    {
      title: "좋아요수",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <Navbar></Navbar>

      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div>
          <strong>임시 게시판</strong>
        </div>
        <div>임시 게시판설명~~</div>
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
        <div>
          <Button />
        </div>

        <span>
          <Select />
          <Select />
          <Input />
        </span>
      </div>
    </>
  );
}
