import React from "react";
import Layout from "../components/Layout";

type Props = {};

const portfolio = (props: Props) => {
  return (
    <Layout>
      <section className="h-screen bg-green-200">
        <div className="container max-w-4xl mx-auto">
          <div className="py-20 grid grid-cols-3">
            <div className="w-52 h-52 bg-white">pavan</div>
            <div className="w-52 h-52 bg-white">pavan</div>
            <div className="w-52 h-52 bg-white">pavan</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default portfolio;
