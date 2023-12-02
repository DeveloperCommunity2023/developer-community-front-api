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
import { StudyDto, StudyList } from "../Models/stydy.dto";
import { useNavigate } from "react-router-dom";

export function Study() {
  const { Meta } = Card;
  const [data, setData] = useState<StudyDto>();

  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getStudy().then((res) => {
      setData(res);
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="col-md-8 mx-auto max-w-10x1 px-4 flex justify-content-center">
        <h4>
          <strong>스터디 모임</strong>
        </h4>
        <div
          style={{
            display: "flex",
          }}
        >
          <Select
            defaultValue={"latest"}
            style={{ width: 120 }}
            options={[
              { value: "latest", label: "최신순" },
              { value: "deadline", label: "기간임박순" },
              { value: "name", label: "이름순" },
            ]}
          ></Select>

          <div style={{ display: "flex", position: "absolute", right: "20%" }}>
            <Select
              defaultValue={"all"}
              style={{ width: 80 }}
              options={[
                { value: "all", label: "전체" },
                { value: "studyName", label: "이름" },
                { value: "tag", label: "태그" },
              ]}
            ></Select>
            <Input style={{ marginLeft: "10px" }} />
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
        <Row>
          {data?.studyList &&
            data.studyList.map((x, idx) => (
              <Col span={8} key={idx}>
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
                        style={{
                          height: 150,
                          // borderRadius: 0
                        }}
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
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Pagination
            defaultCurrent={1}
            total={data?.count}
            defaultPageSize={9}
          />
          <Button
            style={{
              position: "absolute",
              right: "20%",
              backgroundColor: "#8f7dad",
            }}
            type="primary"
            onClick={() => {
              navigate("/study/create"); // 스터디 생성하기 페이지로 이동
            }}
          >
            생성하기
          </Button>
        </div>
      </div>
    </>
  );
}
