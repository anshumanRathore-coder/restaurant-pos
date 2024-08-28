import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const index = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/" />;

  return <Redirect href="/(auth)/welcome" />;
};

export default index;
