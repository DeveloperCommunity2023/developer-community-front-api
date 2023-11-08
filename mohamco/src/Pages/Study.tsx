import NavBar from "../components/NavBar";
import { BsFillPeopleFill } from "react-icons/bs";
import { Avatar, Card, Select, Input, Button } from "antd";

export function Study() {
  const { Meta } = Card;

  return (
    <>
      <NavBar></NavBar>

      <div>
        <div>
          <h4>스터디 모임</h4>
          <Select defaultValue={"최신순"} value={"최신순"} placeholder="최신순">
            <Select.Option value="최신순">최신순</Select.Option>
          </Select>
        </div>
        <div style={{ display: "inline-flex", justifyContent: "right" }}>
          <Select defaultValue={"전체"} value={"전체"} placeholder="전체">
            <Select.Option value="전체">전체</Select.Option>
          </Select>
          <Input />
          <Button type="primary">검색</Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{ width: 300 }}
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
            title="스터디 이름"
            description="스터디 설명"
          />
          <div>여기에 태그 넣고</div>
          <div style={{ textAlign: "right" }}>
            <BsFillPeopleFill></BsFillPeopleFill>
            100
          </div>
        </Card>
      </div>
    </>
  );
}
