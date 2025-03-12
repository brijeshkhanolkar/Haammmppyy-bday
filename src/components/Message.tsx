import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
         Happy birthday again, i really want to make your 17th birthday unforgettable also i want to have permanent memories of mine with the efforts i give for you see we have spent nearly 2 month together but it feel like 2 years like we know each other to much and its feels so good i can't express in words you know my love language is touch kya matlab mujhe bas chhune ka bahana chaheye but ya beyond all our crazy stuffs we did there is a lovely cozy place to be together and just be happy and this is a part of that cozy place so ya happy birthday to you abhi wait for 4 am tab milega gift 2 heheheheheh
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
