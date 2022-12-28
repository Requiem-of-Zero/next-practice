import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BiUserPlus } from "react-icons/bi";
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next CRUD with Redux/React Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl text-center font-bold py-10 md:text-5xl ">
          Employee Management
        </h1>
        {/* Employee Manager Container */}
        <div className="container mx-auto flex justify-between py-5 border-b">
          {/* Left Content */}
          <div className="left flex gap-3">
            <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23} />
              </span>
            </button>
          </div>

          {/* Collapsable Form */}

          {/* Table */}
        </div>
      </main>
    </div>
  );
};

export default Home;
