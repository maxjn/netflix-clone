import getCurrentUser from "@/actions/getCurrentUser";
import AuthForm from "@/components/forms/AuthForm";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Auth = async () => {
  const currentUser = await getCurrentUser();

  //if user is logged in
  if (currentUser) {
    return redirect("/");
  }

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        {/* Nav */}
        <nav className="px-12 py-5">
          <Image
            src={"/images/logo.png"}
            alt="Netflix"
            height={50}
            width={100}
            className="w-auto"
            priority={true}
          />
        </nav>
        {/* Form */}
        <AuthForm />
      </div>
    </main>
  );
};

export default Auth;
