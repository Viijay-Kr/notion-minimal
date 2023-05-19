import CreateTask from "@/app/components/client/CreateTask";
import prisma from "@/prisma";
import { Suspense } from "react";
import Tasks from "./Tasks";
import Loading from "./loading";

const fetchTopics = async (projectId: number) => {
  const result = prisma.topic.findMany({
    where: {
      projectId,
    },
  });
  return result;
};
export default async function Topics(props: { projectId: number }) {
  const topics = await fetchTopics(props.projectId);
  return (
    <section>
      <ul className="flex flex-col gap-[1rem]">
        {topics.map((topic) => (
          <li key={topic.id}>
            <div className="flex flex-col gap-[1rem]">
              <h3>{topic.title}</h3>
              <Suspense fallback={<Loading />}>
                {/* @ts-expect-error Async Server Component */}
                <Tasks topicId={topic.id} />
              </Suspense>
            </div>
            <div className="ml-[1rem]">
              <CreateTask topicId={topic.id} projectId={props.projectId} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
