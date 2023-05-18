"use client";
import { createProject } from "@/app/actions";
import { useState } from "react";

export default function () {
  const [showcreateForm, setShowCreateForm] = useState(false);

  return (
    <>
      <button
        className="bg-slate-200 m-l h-[32px] w-[32px]"
        onClick={() => setShowCreateForm(true)}
      >
        +
      </button>
      {showcreateForm && (
        <form action={createProject}>
          <input
            placeholder="Project title"
            className="w-full flex-1 p-[0.5rem] border-slate-400"
            type="text"
            name="title"
          />
        </form>
      )}
    </>
  );
}
