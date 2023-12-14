import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return <div>Hello, {user.email}</div>;
};

export default Dashboard;
