import prisma from "@/prisma";

const fetchTasks = async (topicId: number) => {
  const result = prisma.task.findMany({
    where: {
      topicId,
    },
  });
  return result;
};

export default async function Tasks(props: { topicId: number }) {
  const tasks = await fetchTasks(props.topicId);
  return (
    <ul className="ml-[1rem] flex flex-col gap-[0.5rem]">
      {tasks.map((tasks) => (
        <li key={tasks.id}>
          <div className="flex gap-[1rem]">
            <h3>{tasks.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}
