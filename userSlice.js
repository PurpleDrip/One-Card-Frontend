import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  id: localStorage.getItem("id") || "",
  userName: localStorage.getItem("userName") || "",
  encrypted: localStorage.getItem("encrypted") || "",
  iv: localStorage.getItem("iv") || "",
  key: localStorage.getItem("key") || "",
  viewedOnce: false,
  doc: {
    isAadharVerified: localStorage.getItem("isAadharVerified") === "true",
    isPANVerified: localStorage.getItem("isPANVerified") === "true",
    isPassportVerified: localStorage.getItem("isPassportVerified") === "true",
    isVoterVerified: localStorage.getItem("isVoterVerified") === "true",
    isDrivingLicenseVerified:
      localStorage.getItem("isDrivingLicenseVerified") === "true",
    isRationVerified: localStorage.getItem("isRationVerified") === "true",
    IsBirthCertificateVerified:
      localStorage.getItem("IsBirthCertificateVerified") === "true",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
      localStorage.setItem("id", action.payload);
    },
    setuserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    setEncrypted: (state, action) => {
      state.encrypted = action.payload;
      localStorage.setItem("encrypted", state.encrypted);
    },
    setIv: (state, action) => {
      state.iv = action.payload;
      localStorage.setItem("iv", state.iv);
    },
    setKey: (state, action) => {
      state.key = action.payload;
      localStorage.setItem("key", state.key);
    },
    setAll: (state, action) => {
      const { encrypted, key, iv } = action.payload;
      console.log(encrypted, key, iv);
      state.encrypted = encrypted;
      state.iv = iv;
      state.key = key;
      localStorage.setItem("encrypted", state.encrypted);
      localStorage.setItem("iv", state.iv);
      localStorage.setItem("key", state.key);
    },
    logout: (state) => {
      (state.encrypted = ""), (state.key = ""), (state.iv = "");
      localStorage.clear();
    },
    setViewed: (state) => {
      state.viewedOnce = true;
    },
    setIsAadharVerified: (state, action) => {
      state.doc.isAadharVerified = action.payload;
      localStorage.setItem("isAadharVerified", state.doc.isAadharVerified);
    },
    setIsPANVerified: (state, action) => {
      state.doc.isPANVerified = action.payload;
      localStorage.setItem("isPANVerified", state.doc.isPANVerified);
    },
    setIsPassportVerified: (state, action) => {
      state.doc.isPassportVerified = action.payload;
      localStorage.setItem("isPassportVerified", state.doc.isPassportVerified);
    },
    setIsVoterVerified: (state, action) => {
      state.doc.isVoterVerified = action.payload;
      localStorage.setItem("isVoterVerified", state.doc.isVoterVerified);
    },
    setIsDrivingLicenseVerified: (state, action) => {
      state.doc.isDrivingLicenseVerified = action.payload;
      localStorage.setItem(
        "isDrivingLicenseVerified",
        state.doc.isDrivingLicenseVerified
      );
    },
    setIsRationVerified: (state, action) => {
      state.doc.isRationVerified = action.payload;
      localStorage.setItem("isRationVerified", state.doc.isRationVerified);
    },
    setIsBirthCertificateVerified: (state, action) => {
      state.doc.IsBirthCertificateVerified = action.payload;
      localStorage.setItem(
        "IsBirthCertificateVerified",
        state.doc.IsBirthCertificateVerified
      );
    },
    updateAllVerified: (state, action) => {
      const {
        isAadharVerified,
        isPANVerified,
        isPassportVerified,
        isVoterVerified,
        isDrivingLicenseVerified,
        isRationVerified,
        IsBirthCertificateVerified,
      } = action.payload;
      state.doc.isAadharVerified = isAadharVerified;
      state.doc.isPANVerified = isPANVerified;
      state.doc.isPassportVerified = isPassportVerified;
      state.doc.isVoterVerified = isVoterVerified;
      state.doc.isDrivingLicenseVerified = isDrivingLicenseVerified;
      state.doc.isRationVerified = isRationVerified;
      state.doc.IsBirthCertificateVerified = IsBirthCertificateVerified;
      localStorage.setItem("isAadharVerified", state.doc.isAadharVerified);
      localStorage.setItem("isPANVerified", state.doc.isPANVerified);
      localStorage.setItem("isPassportVerified", state.doc.isPassportVerified);
      localStorage.setItem("isVoterVerified", state.doc.isVoterVerified);
      localStorage.setItem(
        "isDrivingLicenseVerified",
        state.doc.isDrivingLicenseVerified
      );
      localStorage.setItem("isRationVerified", state.doc.isRationVerified);
      localStorage.setItem(
        "IsBirthCertificateVerified",
        state.IsBirthCertificateVerified
      );
    },
  },
});

export const {
  setID,
  setuserName,
  setEncrypted,
  setIv,
  setKey,
  setAll,
  logout,
  setViewed,
  setIsAadharVerified,
  setIsPANVerified,
  setIsPassportVerified,
  setIsVoterVerified,
  setIsDrivingLicenseVerified,
  setIsRationVerified,
  setIsBirthCertificateVerified,
  updateAllVerified,
} = userSlice.actions;

export default userSlice.reducer;
