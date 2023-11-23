import { Avatar, Button, Card, Col, Input, Row, Select } from "antd";
import NavBar from "../components/NavBar";
import Meta from "antd/es/card/Meta";
import { BsFillPeopleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { ProjectList } from "../Models/project.dto";
import { getProject } from "../Modules/project.service";

export function Project() {
    const {Meta} = Card;
    const [data, setData] = useState<ProjectList[]>([]);

    const init = () => {
        getProject().then((res)=> {
            setData(res);
        }).catch((err)=>console.log(err));
    }

    useEffect(()=>{
        init();
    }, []);

  return (
    <main >
        <div>
            <NavBar></NavBar>
        </div>
        <div style={{padding: "10px"}}>
            <div>
                <h4>
                    <strong>프로젝트</strong>
                </h4>
            </div>
            <div style={{display: "flex"}}>
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
                    title={x.projectName}
                    description={x.projectDesc}
                  />
                  <div>여기에 태그 넣고</div>
                  <div style={{ textAlign: "right" }}>
                    <BsFillPeopleFill></BsFillPeopleFill>
                    {x.projectCount}
                  </div>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
    </main>
  );
}
