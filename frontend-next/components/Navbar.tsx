"use client";
import { UserContext } from "@/app/layout";
import React, { useContext, useEffect } from "react";
import { CircularLoginButton } from "./CircularLoginButton";
import GoogleAuth from "./GoogleAuth";

const Navbar = () => {
  const context = useContext(UserContext);
  if (!context) {
    // Handle the context error;
    console.log("Context not found!");
    return;
  }

  const { user, setUser } = context;

  return (
    <div className="h-14 w-full border-b-2 flex flex-col">
      <div className="h-full w-full flex flex-row">
        <div className="h-full w-full flex flex-row gap-2">
          <div className="h-full w-full flex justify-end p-2 pr-8">
            <img
              src="/assets/logo.jpg"
              alt="My display picture"
              className="border rounded-full"
            />
          </div>
          <div className="h-full w-full flex">
            <div className="h-full w-full flex flex-col justify-center font-Itim font-medium text-xl">
              McaupyBugs
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-row gap-8 justify-end pr-48">
          <div className="h-10 w-contain flex self-center place-items-center p-2 rounded-sm font-medium text-lg cursor-pointer justify-end">
            {!user && (
              <div>
                <GoogleAuth setUser={setUser}></GoogleAuth>
              </div>
            )}{" "}
            {user && (
              <div className="h-12 w-full">
                <CircularLoginButton
                  userData={user}
                  setUserState={setUser}
                ></CircularLoginButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
