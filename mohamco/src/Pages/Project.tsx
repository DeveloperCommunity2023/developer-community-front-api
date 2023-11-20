import { Button, Input, Row, Select } from "antd";
import NavBar from "../components/NavBar";

export function Project() {

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
            
        </Row>
    </main>
  );
}
