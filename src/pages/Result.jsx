import React, { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const navigate = useNavigate();
  const { encrypted, key, iv, userName } = useSelector((state) => state.user);
  console.log(key);

  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="h-screen p-12 relative">
      <div className="border rounded-3xl h-full p-2 px-8">
        <h1 className="text-center text-white text-[5rem] mony">
          {userName}'s 1-CARD
        </h1>
        {copySuccess && (
          <h4 className="px-4 rounded-full bg-green-400 py-2 text-black absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 mony gap-2 flex items-center justify-center">
            <IoMdAlert size={25} />
            Copied to clipboard!
          </h4>
        )}
        <h1 className="mb-4 text-gray-400 flex gap-8 items-center">
          <span className="text-2xl text-white mony ">Encrypted Data - </span>
          <code className="max-w-2/5 truncate">{encrypted}</code>
          <button
            onClick={() => handleCopy(encrypted)}
            className="bg-white px-4 py-2 rounded-md border hover:text-white"
          >
            <MdContentCopy color="black" />
          </button>
        </h1>
        <h1 className="mb-4 text-gray-400 flex gap-8 items-center">
          <span className="text-2xl text-white mony">KEY - </span>
          <code className="">{key}</code>
          <button
            onClick={() => handleCopy(key)}
            className="bg-white px-4 py-2 rounded-md border hover:text-white"
          >
            <MdContentCopy color="black" />
          </button>
        </h1>
        <h1 className="text-gray-400 flex gap-8 items-center">
          <span className="text-2xl text-white mony">IV - </span>
          <code className="">{iv}</code>
          <button
            onClick={() => handleCopy(iv)}
            className="bg-white px-4 py-2 rounded-md border hover:text-white"
          >
            <MdContentCopy color="black" />
          </button>
        </h1>
        <div className="text-white mb-8 mt-4 ml-12">
          <h1 className="text-4xl ml-12 mb-4">
            How 1CARD works <span className="text-red-500">?</span>
          </h1>
          <ol className="text-gray-400 mony">
            <li className="my-4">
              <h1 className="text-2xl text-gray-200 mb-2">
                Share Your Verification Details
              </h1>
              <ul className="mx-8">
                <li>
                  Encrypted Data: This contains your personal information (e.g.,
                  whether you have Aadhar, PAN, etc.), but it’s encrypted and
                  cannot be read directly.
                </li>
                <li>
                  Key: This is a secure cryptographic key required to decrypt
                  your encrypted data.
                </li>
                <li>
                  IV (Initialization Vector): This ensures that the encrypted
                  data can only be decrypted correctly when used with the key.
                </li>
              </ul>
            </li>
            <li className="my-8">
              <h1 className="text-2xl text-gray-200 mb-2">
                Platform Verifies Your Identity
              </h1>
              <ul className="mx-8">
                <li>
                  Decryption Process: The platform uses the encrypted data, key,
                  and IV with a decryption algorithm (e.g., AES-256) to securely
                  decode the data. This process reveals limited and essential
                  information, such as: Whether your Aadhar or PAN is provided.
                  If your documents are verified.
                </li>
                <li>
                  Validation: The platform verifies that the decrypted data
                  matches the expected format and confirms your identity without
                  accessing sensitive details like actual Aadhar or PAN numbers.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <button
          className="bg-white px-8 py-2 mony rounded flex items-center justify-between gap-4 mx-auto border"
          onClick={() => navigate("/home")}
        >
          <FaRegArrowAltCircleLeft size={20} />
          Back to HOME
        </button>
      </div>
    </div>
  );
};

export default Result;
