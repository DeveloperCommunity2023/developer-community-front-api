import "../styles/NavBar.css";

const NavBar = () => {
  const menus = [
    "자유게시판",
    "질문게시판",
    "모집게시판",
    "정보게시판",
    "스터디",
    "프로젝트",
  ];
  const menu_link = ["#", "#", "#", "#", "#", "#"]; //메뉴 링크

  function menuClick() {
    //메뉴 클릭 이벤트
    console.log("test");
  }

  function loginBtnClick() {
    //로그인 버튼 클릭 이벤트
  }

  function signUpBtnClick() {
    //회원가입 버튼 클릭 이벤트
  }

  const menuList = menus.map((menu) => (
    <li>
      <a href="#" onClick={menuClick} className="nav-link px-3">
        <span className="menu">{menu}</span>
      </a>
    </li>
  ));

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <nav className="mx-auto max-w-10x1 px-4 flex w-full d-flex justify-content-center">
        <div className="col-md-3 mb-2 mb-md-0 align-self-center">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none justify-content-center"
          >
            <span className="logo mx-4">모함코</span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {menuList}
        </ul>

        <div className="col-md-3 text-end mx-4">
          <button
            type="button"
            onClick={loginBtnClick}
            className="loginbtn btn btn-outline-secondary me-2"
          >
            로그인
          </button>
          <button
            type="button"
            onClick={signUpBtnClick}
            className="signupbtn btn btn-primary"
          >
            회원가입
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
