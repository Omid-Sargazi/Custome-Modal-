import Image from "next/image";
import { Inter } from "next/font/google";
import Modal from "./components/Modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState(false);
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
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font:medium text-sm rounded-lg px-5 py-2 text-center">
        Show Movie Text2 Modal
      </button>
      <Modal onClose={() => setShowModal(false)} isVisible={showModal}>
        Modal
      </Modal>
    </div>
  );
}
