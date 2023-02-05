import { useCheckAccount } from 'hooks/useCheckAccount';

export const SignUp = () => {
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
      <h1>회원가입</h1>
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
        <button data-testid="signup-button" disabled={isButtonDisabled}>
          회원가입하기
        </button>
      </div>
    </>
  );
};
