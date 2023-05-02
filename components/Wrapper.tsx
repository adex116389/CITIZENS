import Head from "next/head";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Progress from "./Progress";

interface WrapperProps {
  children: React.ReactNode;
  page: string;
  title?: string;
  subTitle?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  page,
  title,
  subTitle,
}) => {
  const isPhone = useMediaQuery(`(max-width: 480px)`);

  return (
    <>
      <Head>
        <title>ОnIinе Ваnking | Сitizеns</title>
      </Head>
      <Header />
      <div
        className="wrapper"
        style={{
          backgroundColor: `white`,
        }}
      >
        {/* <div className="greenSlash" >
        <div className="whiteBck"></div>
      </div> */}

        <div
          className="container"
          style={{ margin: isPhone ? "0 1rem" : "3rem auto" }}
        >
          <div className="content">
            <Progress current={page} title={title} subTitle={subTitle} />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
