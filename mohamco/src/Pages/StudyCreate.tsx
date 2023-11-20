import { useState } from "react";
import NavBar from "../components/NavBar";
import { Button, Form, Input, Radio, Select } from "antd";
import { studyCreate } from "../Modules/study.service";

export function StudyCreate() {
  const [form] = Form.useForm();

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

  return (
    <>
      <NavBar />

      <div>
        <div style={{ paddingLeft: "25%" }}>
          <h4>
            <strong>스터디 생성하기</strong>
          </h4>
          <text style={{ color: "gray", fontSize: "14px" }}>
            스터디 생성을 위한 정보를 입력해주세요
          </text>
        </div>

        <div
          style={{
            display: "flex",
            paddingLeft: "25%",
            width: "auto",
          }}
        >
          <div
            style={{
              border: "1px solid",
              paddingRight: "30%",
              borderColor: "#9F93B5",
              borderRadius: "10px",
            }}
          >
            <br />
            <Form
              name="myForm"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
              <Form.Item name="studySeq" hidden={true}></Form.Item>
              <Form.Item
                label="스터디 이름"
                name="studyName"
                rules={[
                  { required: true, message: "스터디 이름을 입력해주세요!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="스터디 설명"
                name="studyDesc"
                rules={[
                  { required: true, message: "스터디 설명을 입력해주세요!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="공개 설정"
                name="openYn"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="0"> 공개 </Radio>
                  <Radio value="1"> 비공개 </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="가입 종류"
                name="registerType"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="0"> 자동 가입 </Radio>
                  <Radio value="1"> 승인 가입 </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="스터디 인원"
                name="studyCount"
                // rules={[{ required: true }]}
              >
                <Select defaultValue={5} value={5} placeholder="5">
                  <Select.Option value="5">5</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="검색어 태그" name="tag">
                <div style={{ display: "inline-flex" }}>
                  <Input style={{ marginRight: "10px" }} />
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
      </div>
    </>
  );
}
