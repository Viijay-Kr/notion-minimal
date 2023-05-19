import CreateTopic from "@/app/components/client/CreateTopic";
import prisma from "@/prisma";
import { NextApiRequest } from "next";
import { Suspense } from "react";
import Topics from "./Topics";
import Loading from "./loading";

const fetchProject = async (id: number) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return result;
};

export default async function (props: {
  params: { id: string };
  searchParams: {};
}) {
  const projectId = parseInt(props.params.id, 10);
  const project = await fetchProject(projectId);

  return (
    <main className="flex flex-col px-[1rem]">
      <h2 className="mt-[1rem] flex flex-col text-black pb-[0.5rem] border-b border-slate-200">
        {project.title}
        <span className="text-[12px] text-slate-400">
          created on{" "}
          {new Date(project.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </h2>
      <section className="flex mt-[1rem] flex-col">
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Async Server Component */}
          <Topics projectId={projectId} />
        </Suspense>
        <CreateTopic projectId={projectId} />
      </section>
    </main>
  );
}
