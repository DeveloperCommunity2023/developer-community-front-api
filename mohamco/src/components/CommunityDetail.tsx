import test from "../src_assets/test.jpg";
import test2 from "../src_assets/test2.jpg";
import styles from "../styles/Header.module.css";
import detailStyles from "../styles/CommunityDetail.module.css";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "../styles/NavBar.css";
import Meta from "antd/es/card/Meta";

const CommunityDetail = () => {


    return (
        <div className={styles.mainheader} style={{width: "100%"}}>
                <div className={styles.header}>
                    <img src={test} ></img>
                </div>
                    <div className={detailStyles.name}>
                        <Row style={{justifyContent: "start"}}>
                            <Col style={{textAlign: "left", placeSelf: "center", flex: "auto", display: "flex", placeItems: "center"}}>
                                <h4 style={{margin: "12px", fontWeight: "bold"}}>프로젝트 모임 이름</h4>
                                <div className={detailStyles.rectangle}>
                                    <p style={{margin: "0px"}}>모집마감</p> {/*모집상태*/}
                                </div>
                            </Col>
                            
                            <Col style={{textAlign: "right", placeSelf: "center"}}>
                                <button
                                type="button"
                                className="signupbtn btn btn-primary"
                                style={{margin: "12px"}}
                                >
                                    가입하기
                                </button>
                            </Col>
                        </Row>
                        <hr style={{margin: 0}}></hr>
                        <Row>
                            <Card
                            className={detailStyles.infoCard}
                            actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                            >
                                <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title="Card title"
                                description="This is the description"
                                />
                            </Card>
                        </Row>
                    </div>


            </div>
    );
}

export default CommunityDetail;