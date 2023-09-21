import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { getBoard } from "../Modules/board.service";

export function Main() {
    const[data, setData] = useState();

    useEffect(() => {
      getBoard('B001').then((res) => {
        setData(res);
        console.log('data',res);
      })
    },[])


    const list = ["test1sdfgsdfgsdff","test2sdfgsdfgsdfg","test3asdfasdfa","test4asdfsdf"];
    const test = list.map((x,idx) => (
      <div>
        <ul className="px-2 py-1/3 divide-y divide-gray-500/30 dark:divide-gray-500/70 list-unstyled">
          <li><div className="mb-2 flex">{x}</div></li>
        </ul>
      </div>
    ));

    return (
        <main>
          <Navbar></Navbar>

          <div className="d-flex justify-content-center my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row">
            <div className="w-25 mx-5">
              <div className="border-bottom p-2 bg-light rounded">
                  <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100">
                    asd
                  </a>
              </div>
              {test}
            </div>
            <div className="w-25 mx-5">
              <div className="border-bottom p-2 bg-light rounded">
                <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100">
                  asd
                </a>
              </div>
              {test}
            </div>
          </div>

          <div className="d-flex justify-content-center my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row">
            <div className="w-25 mx-5">
              <div className="border-bottom p-2 bg-light rounded">
                  <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100">
                    asd
                  </a>
              </div>
              {test}
            </div>
            <div className="w-25 mx-5">
              <div className="border-bottom p-2 bg-light rounded">
                <a className="relative mb-2 text-gray-900 no-underline dark:text-gray-100">
                  asd
                </a>
              </div>
              {test}
            </div>
          </div>
        </main>


    )


}