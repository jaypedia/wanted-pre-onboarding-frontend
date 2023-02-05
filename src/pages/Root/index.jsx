import { useMovePage } from 'hooks/useMovePage';

export const Root = () => {
  const [goSignIn, goSignUp] = useMovePage(['/signin', '/signup']);
  return (
    <>
      <h1>✅ Todo List ✅</h1>
      <button onClick={goSignIn}>로그인</button>
      <button onClick={goSignUp}>회원가입</button>
    </>
  );
};
