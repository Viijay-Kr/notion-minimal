import prisma from "@/prisma";
import CreateProject from "./components/client/CreateProject";

const fetchProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

export default async function () {
  const projects = await fetchProjects();
  return (
    <>
      <div className="flex py-[0.5rem] items-center flex-row flex-wrap border-b justify-between">
        <h2 className="font-semibold  border-slate-500">Projects</h2>
        <CreateProject />
      </div>
      <ul className="mt-[1rem]">
        {projects.map((p) => (
          <a href={`/project/${p.id}`}>
            <li
              className="p-[0.5rem] mt-[0.25rem] bg-slate-200 text-lg"
              key={p.id}
            >
              {p.title}
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}
