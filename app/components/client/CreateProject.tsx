"use client";
import { createProject } from "@/app/actions";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function () {
  const [showcreateForm, setShowCreateForm] = useState(false);

  return (
    <>
      <button
        className="bg-slate-200 ml-auto h-[32px] w-[32px]"
        onClick={() => setShowCreateForm(true)}
      >
        +
      </button>
      {showcreateForm && (
        <form action={createProject} className="basis-[100%] mt-[0.5rem]">
          <CreateInput />
        </form>
      )}
    </>
  );
}

function CreateInput() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <>
      <input
        placeholder="Project title"
        className="w-full flex-1 p-[0.5rem] border-slate-400"
        type="text"
        name="title"
      />
      <input
        type="submit"
        className="mt-[0.5rem] p-[0.5rem] bg-slate-300"
        value={`${pending ? "..." : "Create"}`}
        disabled={!!pending}
      />
    </>
  );
}
