import React from "react";

export default function loading() {
  return (
    <div className="grid container m-auto py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className=" h-80  w-full rounded p-3 bg-gray-100 animate-pulse"></div>
    </div>
  );
}
