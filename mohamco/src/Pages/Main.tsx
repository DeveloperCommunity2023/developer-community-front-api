import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { getBoard } from "../Modules/board.service";
import { BoardDto } from "../Models/board.dto";
import { Avatar, Col, List, Row } from "antd";
import { FaRegCommentDots } from "react-icons/fa";

export function Main() {
  const [data, setData] = useState<BoardDto>();
  const [data2, setData2] = useState<BoardDto>();
  const [data3, setData3] = useState<BoardDto>();
  const [data4, setData4] = useState<BoardDto>();

  const boardData = ["B001", "B002", "B003", "B004"];
  const dataList = [data, data2, data3, data4];
  const boardSaveData = [setData, setData2, setData3, setData4];

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    for (let i = 0; i < boardData.length; i++) {
      getBoard(boardData[i]).then((res) => {
        boardSaveData[i](res);
      });
    }
  };

  return (
    <main>
      <Navbar></Navbar>

      <div
        className="col-md-8 mx-auto max-w-10x1 px-4 flex justify-content-center"
      >
        <Row gutter={16}>
          {dataList.map((x, idx) => (
            // <div>
            <Col span={12} key={idx} style={{marginBottom:'30px'}}>
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#EAE4F5",
                  borderRadius: "10px",
                  width: "400px",
                }}
              >
                <h4>
                  <strong>{x?.boardName}</strong>
                </h4>
              </div>
              <List
                itemLayout="horizontal"
                style={{ width: "400px" }}
                dataSource={x?.postList.filter((item, idx) => idx < 6)}
                size="small"
                pagination={false}
                renderItem={(item, index) => (
                  <List.Item key={item.postSeq}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                          size={"small"}
                        />
                      }
                      title={
                        <a
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            textDecoration: "none",
                          }}
                          href="https://ant.design"
                        >
                          {item.userName}
                          <span
                            style={{
                              float: "right",
                            }}
                          >
                            <FaRegCommentDots />
                            <div style={{ marginLeft: "2px" }}>
                              {" "}
                              {item.commentCount}
                            </div>
                          </span>
                        </a>
                      }
                      description={
                        <div
                          style={{
                            fontWeight: "500",
                            color: "#707070",
                          }}
                        >
                          {item.title}
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>
            // </div>
          ))}
        </Row>
      </div>
    </main>
  );
}
