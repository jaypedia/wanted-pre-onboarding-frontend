import { useCheckAccount } from 'hooks/useCheckAccount';

export const SignIn = () => {
  const {
    isButtonDisabled,
    emailRef,
    passwordRef,
    emailInput,
    passwordInput,
    handleEmailChange,
    handlePasswordChange,
  } = useCheckAccount();

  return (
    <>
      <h1>로그인</h1>
      <div>
        <input
          data-testid="email-input"
          ref={emailRef}
          value={emailInput}
          onChange={handleEmailChange}
        />
        <input
          data-testid="password-input"
          ref={passwordRef}
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <button data-testid="signin-button" disabled={isButtonDisabled}>
          로그인하기
        </button>
      </div>
    </>
  );
};
