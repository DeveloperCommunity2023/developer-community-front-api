
const Board = () => {

    const boardName = "test";

return(
    <div className="mx-auto max-w-10x1 px-2 flex w-full justify-content-center">
        <div className="flex">
            <p>{boardName}</p> {/*게시판 이름*/}
        </div>
        <div className="mx-auto max-w-10x1 px-4 flex w-full d-flex justify-content-center-content-center">
            <div className="" style={{"backgroundColor": "black"}}>
                <p className="">test1</p>
            </div>
            
            {/* 정렬선택 부분 */}
        </div>
        <div className="justify-content-center">
            <p>test2</p>
             {/* 게시글 리스트 */}
        </div>
    </div>
);

}

export default Board;