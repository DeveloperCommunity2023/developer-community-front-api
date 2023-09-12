
import "../styles/NavBar.css";

const NavBar = () => {

  const menus = ["자유게시판", "질문게시판", "모집게시판", "정보게시판", "스터디", "프로젝트"];
  const menuList = menus.map((menu) => (<li><a href="#" className="nav-link px-2">{menu}</a></li>))

return(
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">      
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none justify-content-center">
          <span className="logo">모함코</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {menuList}
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">로그인</button>
        <button type="button" className="btn btn-primary">회원가입</button>
      </div>
</header>
);
}

export default NavBar;