import { useNavigate, useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div>
      <h2>{error.status}</h2>
      <h4>{error.statusText || error.message}</h4>
      <h6>에러가 발생했어요!</h6>
      <button onClick={() => navigate(-1)}>이전 페이지로 가기</button>
    </div>
  );
};
