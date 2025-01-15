import axios from "axios";
import React, { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setAll, updateAllVerified } from "../../userSlice";

const Verify = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const { encrypted, key, iv, id } = useSelector((state) => state.user);
  const doc = useSelector((state) => state.user.doc);
  console.log(key, iv);
  const verifyDoc = (docType) => {
    axios
      .post("http://localhost:5000/verifydoc", {
        doc: docType,
        encrypted,
        key,
        iv,
        id,
      })
      .then((res) => {
        console.log(res);
        setMsg(res.data.message);
        const { encrypted, key, iv } = res.data;
        setTimeout(() => setMsg(""), 2000);
        dispatch(setAll({ encrypted, key, iv }));
        dispatch(updateAllVerified(res.data.doc));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen p-12 relative">
      {msg && (
        <h4 className="px-4 rounded-full bg-green-400 py-2 text-black absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 mony gap-2 flex items-center justify-center">
          <IoMdAlert size={25} />
          {msg}
        </h4>
      )}
      <div className="border rounded-xl h-full text-white mony p-4">
        <h1 className="text-center text-[5rem]">Verify Documents</h1>
        <ul className="flex flex-col ml-20 gap-8 my-auto min-h-[60vh]">
          <li>
            Verify Aadhar{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isAadharVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("aadhar")}
              disabled={doc.isAadharVerified}
            >
              {doc.isAadharVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify PAN{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isPANVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("pan")}
              disabled={doc.isPANVerified}
            >
              {doc.isPANVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify Passport{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isPassportVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("passport")}
              disabled={doc.isPassportVerified}
            >
              {doc.isPassportVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify VoterID{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isVoterVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("voter")}
              disabled={doc.isVoterVerified}
            >
              {doc.isVoterVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify Driving License{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isDrivingLicenseVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("drivinglicense")}
              disabled={doc.isDrivingLicenseVerified}
            >
              {doc.isDrivingVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify Ration Card{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.isRationVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("ration")}
              disabled={doc.isRationVerified}
            >
              {doc.isRationVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
          <li>
            Verify Birth Certificate{" "}
            <button
              className={`bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400 ${
                doc.IsBirthCertificateVerified
                  ? "disabled bg-green-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => verifyDoc("birthcertificate")}
              disabled={doc.IsBirthCertificateVerified}
            >
              {doc.IsBirthCertificateVerified ? "VERIFIED" : "VERIFY"}
            </button>
          </li>
        </ul>
        <p className="text-5xl text-center tracking-widest">
          Get Verified Now and Unlock Trusted Access<code>!</code>
        </p>
      </div>
    </div>
  );
};

export default Verify;
