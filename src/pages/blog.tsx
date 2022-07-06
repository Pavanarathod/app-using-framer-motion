import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

type Props = {};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const divVarientes = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};
const blog = (props: Props) => {
  return (
    <Layout>
      <section className="bg-indigo-200 h-screen">
        <div className="container max-w-4xl mx-auto">
          <div className="py-20">
            <div className="w-52 h-52 bg-white">pavan</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default blog;
