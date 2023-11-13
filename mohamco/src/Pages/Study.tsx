import NavBar from "../components/NavBar";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  Avatar,
  Card,
  Select,
  Input,
  Button,
  Row,
  Col,
  Pagination,
} from "antd";
import { useEffect, useState } from "react";
import { getStudy } from "../Modules/study.service";
import { StudyList } from "../Models/stydy,dto";

export function Study() {
  const { Meta } = Card;
  const [data, setData] = useState<StudyList[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getStudy().then((res) => {
      setData(res);
    });
  };

  console.log("res", data);
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h4>
          <strong>스터디 모임</strong>
        </h4>
        <div
          style={{
            display: "flex",
          }}
        >
          <Select defaultValue={"최신순"} value={"최신순"} placeholder="최신순">
            <Select.Option value="최신순">최신순</Select.Option>
          </Select>

          <div style={{ display: "flex", position: "absolute", right: 100 }}>
            <Select defaultValue={"전체"} value={"전체"} placeholder="전체">
              <Select.Option value="전체">전체</Select.Option>
            </Select>
            <Input />
            <Button type="primary">검색</Button>
          </div>
        </div>
      </div>
      <Row>
        {data &&
          data.map((x, idx) => (
            <Col span={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta
                    avatar={
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                    }
                    title={x.studyName}
                    description={x.studyDesc}
                  />
                  <div>여기에 태그 넣고</div>
                  <div style={{ textAlign: "right" }}>
                    <BsFillPeopleFill></BsFillPeopleFill>
                    {x.studyCount}
                  </div>
                </Card>
              </div>
            </Col>
          ))}
      </Row>

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}
      >
        <Pagination defaultCurrent={1} />
        <Button style={{ position: "absolute", right: 50 }} type="primary">
          생성하기
        </Button>
      </div>
    </>
  );
}
