import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { Button, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import TextArea from "antd/es/input/TextArea";

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

export function BoardWrite() {

    const [size, setSize] = useState<SizeType>('large');
    const [value, setValue] = useState('');
 
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
                        { value: '자유게시판', label: '자유게시판' },
                        { value: '질문게시판', label: '질문게시판' },
                        { value: '모집게시판', label: '모집게시판' },
                        { value: '정보게시판', label: '정보게시판' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    <div style={{ margin: '10px 0' }} />
                    <TextArea placeholder="제목"
                    autoSize={{maxRows: 1}}></TextArea>
                    <div style={{ margin: '10px 0' }} />
                    <TextArea value={value} 
                    onChange={(e)=> setValue(e.target.value)} 
                    placeholder="내용을 입력해주세요." 
                    autoSize={{minRows: 20, maxRows: 100}}>
                    </TextArea>
                    <div style={{ margin: '10px 0' }} />
                    <div>
                        <Button style={{float: "right", background:"rgb(194,178,208)"}} type="primary" size={size}>
                            등록
                        </Button>
                    </div>
                </div>
            </div>        
        </div>
        
    
    )
    
}