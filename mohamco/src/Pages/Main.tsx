import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { getBoard } from "../Modules/board.service";
import { BoardDto } from "../Models/board.dto";
import { Avatar, Col, List, Row } from "antd";

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

      <Row>
        {dataList.map((x) => (
          <Col span={12}>
            <div style={{ marginTop: "30px" }}>
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
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
}
