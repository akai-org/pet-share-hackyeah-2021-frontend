import type { NextPage } from "next";
import { Test } from "@components/Test";

const Home: NextPage = () => {
  return <Test testProp="Test Message" />;
};

export default Home;
