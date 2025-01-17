"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aceternity-ui/aurora-background";
import { Link } from "gatsby";

export function AuroraBackgroundView() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Custom Web Solutions for Growing Businesses
        </div>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-2/3 self-center">
          Revolutionize the way you work with custom web applications designed
          to solve your unique business challenges. From workflow automation to
          data management we build powerful, scalable solutions that enhance
          efficiency and drive growth.
        </p>
        <Link
          to="/contact"
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          Book Consultation
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
