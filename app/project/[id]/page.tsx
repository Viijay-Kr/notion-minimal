import CreateTopic from "@/app/components/client/CreateTopic";
import prisma from "@/prisma";
import { NextApiRequest } from "next";

const fetchProject = async (id: number) => {
  const result = prisma.project.findUniqueOrThrow({
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
  const project = await fetchProject(parseInt(props.params.id, 10));

  return (
    <main className="flex flex-col px-[1rem]">
      <h2 className="mt-[1rem] flex flex-col text-black pb-[1rem] border-b border-slate-500">
        {project.title}
        <span>
          created on{" "}
          {new Date(project.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </h2>
      <section className="flex mt-[1rem] flex-row justify-between">
        <h2>Topics</h2>
        <CreateTopic />
      </section>
    </main>
  );
}
