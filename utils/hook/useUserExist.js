const { useRouter } = require("next/router");
const { useEffect } = require("react");
const { useSelector } = require("react-redux");

const useUserExist = () => {
  const token = useSelector((state) => state.user.token);
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  return token;
};

export default useUserExist;
