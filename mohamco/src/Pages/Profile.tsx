import NavBar from "../components/NavBar";

export function Profile() {
  return (
    <>
      <NavBar />

      <nav className="mx-auto max-w-10x1 px-4 flex w-full">
        <div className="col-md-3 mb-2 mb-md-0 align-self-center">
          <div>내 계정</div>
          <div>프로필 설정</div>
          <div>계정 설정</div>
        </div>
      </nav>
    </>
  );
}
