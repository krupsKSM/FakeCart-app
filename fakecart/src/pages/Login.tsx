import LoginFormDynamic from '../components/login/LoginFormDynamic';
// import LoginFormStatic from '../components/login/LoginFormStatic';

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* <LoginFormStatic /> */}
      <LoginFormDynamic />
    </main>
  );
};

export default Login;
