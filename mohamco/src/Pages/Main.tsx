import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { getBoard } from "../Modules/board.service";
import { BoardDto } from "../Models/board.dto";

export function Main() {

  const[data, setData] = useState<BoardDto>();
  const[data2, setData2] = useState<BoardDto>();
  const[data3, setData3] = useState<BoardDto>();
  const[data4, setData4] = useState<BoardDto>();

  const boardData = ['B001','B002','B003','B004']
  const boardSaveData = [setData, setData2, setData3, setData4];

  useEffect(() => {
    init();
  },[])

  const init = () => {
    for(let i=0; i<boardData.length; i++) {
      getBoard(boardData[i]).then((res) => {
        boardSaveData[i](res.data);
      })
    }
  }

  // const test = data?.postList?.map((x, idx) => {
  //   <div>
  //     <ul className="px-2 py-1/3 divide-y divide-gray-500/30 dark:divide-gray-500/70 list-unstyled">
  //       <li><div className="mb-2 flex">{x.title}</div></li>
  //     </ul>
  //   </div>
  // });




  return (
      <main>
        <Navbar></Navbar>

        {/* 자유 게시판 */}
        <div className="d-flex justify-content-center my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row">
          <div className="w-25 mx-5">
            <div className="border-bottom p-2 bg-light rounded">
                <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100 text-decoration-none">
                  {data?.boardName}
                </a>
            </div>
            <ul className="list-unstyled">
              {data?.postList.map((x, idx) => (
                <li key={idx}>{x.title}</li>
              ))}
            </ul>
          </div>


          {/* 질문 게시판 */}
          <div className="w-25 mx-5">
            <div className="border-bottom p-2 bg-light rounded">
              <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100 text-decoration-none">
                {data2?.boardName}
              </a>
            </div>
            <ul className="list-unstyled">
              {data2?.postList.map((x, idx) => (
                <li key={idx}>{x.title}</li>
              ))}
            </ul>
          </div>
        </div>


        {/* 모집 게시판 */}
        <div className="d-flex justify-content-center my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row">
          <div className="w-25 mx-5">
            <div className="border-bottom p-2 bg-light rounded">
                <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100 text-decoration-none">
                  {data3?.boardName}
                </a>
            </div>
            <ul className="list-unstyled">
              {data3?.postList.map((x, idx) => (
                <li key={idx}>{x.title}</li>
              ))}
            </ul>
          </div>

          {/* 정보 게시판 */}
          <div className="w-25 mx-5">
            <div className="border-bottom p-2 bg-light rounded">
              <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100 text-decoration-none">
                {data4?.boardName}
              </a>
            </div>
            <ul className="list-unstyled">
              {data4?.postList.map((x, idx) => (
                <li key={idx}>{x.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>


  )


}