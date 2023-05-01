import Image from "next/image";
import { Inter } from "next/font/google";
import Modal from "./components/Modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl mb-5">
        Create Custom Modal In NEXT JS with Tailwind CSS
      </h1>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2 text-center mr-5 "
      >
        Show Text Modal
      </button>
      <button
        onClick={() => setShowModal2(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font:medium text-sm rounded-lg px-5 py-2 text-center"
      >
        Show Movie Text2 Modal
      </button>
      <Modal onClose={() => setShowModal(false)} isVisible={showModal}>
        Hey, this is Bing! I'm here to help you. Ask me any type of question,
        like finding recipes with what's in your fridge, vegan restaurants in
        Cambridge, or drafting a story for curious kids. In groups, remember to
        mention me with @Bing I'm an AI preview, so I'm still learning.
        Sometimes I might say something weird. Don't get mad at me, I'm just
        trying to get better! If you want to start over, type newtopic. And if
        you want to give me feedback, just report a concern. How can I help you
        today?
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="gap-3 text-amber-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
    </div>
  );
}
