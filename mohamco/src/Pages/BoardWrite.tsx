import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { Button, Modal, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { boardWrite } from "../Modules/board.service";

const baseUrl = "http://localhost:8081";
const config = {"Content-Type": 'application/json'};


export function BoardWrite() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [size, setSize] = useState<SizeType>('large');
    
    const [post, setPost] =useState({
        boardSeq: '', 
        title: '', 
        content: '',
        noticeYn: 0,
        userSeq: 125,        //후에 userSeq, userName 넣어놔야함
        userName: '박모래'
    });
    

    const handleChange = (value: string) => {   //게시판 선택
        setPost({...post, boardSeq: value});
      };

    const postButtonClick = () => {             //등록 버튼 클릭
        if(post.boardSeq == ''){
            setModal1Open(true)
            setModalMessage('게시판을 선택해주세요.');
        }else if (post.title == ''){
            setModal1Open(true)
            setModalMessage('제목을 입력해주세요.');
        }else if(post.content == ''){
            setModal1Open(true)
            setModalMessage('내용을 입력해주세요.');
        }else{
            boardWrite(post)                //axios 등록 요청
            .then(res=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            });
        }  
    }
 
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="col-md-8 mx-auto max-w-10x1 px-4 flex justify-content-center" style={{maxWidth:"45%", minWidth: "300px"}}>
                <div className="writebody">
                    <text>글쓰기</text>
                    <hr></hr>
                    <div style={{ margin: '10px 0' }} />
                    <Select
                        defaultValue="글쓰기 들어온 루트 게시판"
                        style={{ width: 230 }}
                        onChange={handleChange}
                        options={[
                        { value: 'B001', label: '자유게시판' },
                        { value: 'B002', label: '질문게시판' },
                        { value: 'B003', label: '모집게시판' },
                        { value: 'B004', label: '정보게시판' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <div style={{ margin: '10px 0' }} />
                    <TextArea onChange={(e)=> {
                        setPost({
                            ...post,
                            title: e.target.value})}} placeholder="제목"
                    autoSize={{maxRows: 1}}></TextArea>
                    <div style={{ margin: '10px 0' }} />
                    <TextArea 
                    onChange={(e)=> {
                        setPost({
                        ...post,
                        content: e.target.value})}}
                    placeholder="내용을 입력해주세요." 
                    autoSize={{minRows: 20, maxRows: 100}}>
                    </TextArea>
                    <div style={{ margin: '10px 0' }} />
                    <div>
                        <Button onClick={postButtonClick} style={{float: "right", background:"rgb(194,178,208)"}} type="primary" size={size}>
                            등록
                        </Button>
                        <Modal
                            title="알림"
                            style={{ top: 20 }}
                            open={modal1Open}
                            onOk={() => setModal1Open(false)}
                            onCancel={() => setModal1Open(false)}
                        >
                        <p>{modalMessage}</p>
                        </Modal>
                    </div>
                </div>
            </div>        
        </div>
        
    
    )
    
}