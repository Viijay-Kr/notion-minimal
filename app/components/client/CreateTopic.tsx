"use client";
import { createTopic } from "@/app/actions";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function CreateTopic({ projectId }: { projectId: number }) {
  const [showcreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="mt-[2rem]">
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        <button
          className="bg-slate-100  h-[24px] w-[24px] rounded-sm hover:bg-slate-300"
          onClick={() => setShowCreateForm(true)}
        >
          +
        </button>
        <span>Add Topic</span>
      </div>
      {showcreateForm && (
        <form action={createTopic} className="basis-[100%] mt-[0.5rem]">
          <CreateInput />
          <input type="hidden" value={projectId} name="projectId" />
        </form>
      )}
    </div>
  );
}

function CreateInput() {
  const { pending } = useFormStatus();

  return (
    <>
      <input
        placeholder="Topic title"
        className="w-3/4 flex-1 p-[0.5rem] rounded-md border-2 border-slate-400"
        type="text"
        name="title"
      />
    </>
  );
}
