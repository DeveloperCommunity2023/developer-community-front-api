import { useState } from "react";
import NavBar from "../components/NavBar";
import { Button, Form, Input, Radio, RadioChangeEvent, Select } from "antd";
import { studyCreate } from "../Modules/study.service";
import { useNavigate } from "react-router-dom";

// 스터디모임 가입 페이지
export function StudyRecruit() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [openValue, setOpenValue] = useState(1);
  const [regValue, setRegValue] = useState(1);

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    studyCreate(values) //axios 등록 요청
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("fail", err);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    // radio
    console.log("radio checked", e.target.value);
    setOpenValue(e.target.value);
  };

  return (
    <>
      <NavBar />

      <div className="col-md-8 mx-auto max-w-10x1 px-4 flex justify-content-center">
        <h4>
          <strong>스터디 모집하기</strong>
        </h4>
        <div style={{ color: "gray", fontSize: "14px" }}>
          스터디 모집을 위한 정보를 입력해주세요
        </div>

        {/* <div
          style={{
            display: "flex",
            width: "auto",
          }}
        > */}
        <div
          style={{
            border: "1px solid",
            borderColor: "#9F93B5",
            borderRadius: "10px",
          }}
        >
          <br />
          <Form
            name="myForm"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            // style={{ maxWidth: 600 }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              label="스터디 이름"
              name="studyName"
              rules={[
                { required: true, message: "스터디 이름을 입력해주세요!" },
              ]}
            >
              <Input placeholder="스터디 이름을 입력해주세요." />
            </Form.Item>

            <Form.Item
              label="스터디 설명"
              name="studyDesc"
              rules={[
                { required: true, message: "스터디 설명을 입력해주세요!" },
              ]}
            >
              <TextArea rows={2} placeholder="스터디 설명을 입력해주세요." />
            </Form.Item>
            <Form.Item
              label="모집 종류"
              name="recruitYn"
              rules={[{ required: true }]}
            >
              <Radio.Group
                onChange={onChange}
                defaultValue={openValue}
                value={openValue}
              >
                <Radio value={1}> 상시 모집 </Radio>
                <Radio value={0}> 기간 모집 </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="가입 종류"
              name="registerType"
              rules={[{ required: true }]}
            >
              <Radio.Group
                onChange={onChange}
                defaultValue={regValue}
                value={regValue}
              >
                <Radio value={1}> 자동 가입 </Radio>
                <Radio value={0}> 승인 가입 </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="모집 인원"
              name="studyCount"
              // rules={[{ required: true }]}
            >
              <Input placeholder="스터디 인원을 입력해주세요."></Input>
            </Form.Item>

            <Form.Item label="검색어 태그" name="tag">
              <div style={{ display: "inline-flex" }}>
                <Input style={{ marginRight: "10px" }} />
                <Button type="primary">등록</Button>
              </div>
            </Form.Item>

            <Form.Item label="가입 질문" name="question">
              <div style={{ display: "flex" }}>
                <Input
                  style={{ marginRight: "10px" }}
                  placeholder="가입 질문을 입력해주세요."
                ></Input>
                <Button type="primary">등록</Button>
              </div>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid",
                  marginRight: "20px",
                }}
                onClick={() => {
                  navigate("/study"); // 스터디 생성하기 페이지로 이동
                }}
              >
                취소
              </Button>

              <Button form="myForm" type="primary" htmlType="submit">
                등록
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
