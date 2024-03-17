"use client";

import { useTransition } from "react";

import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { redirect } from "next/navigation";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourse?: typeof userProgress.$inferSelect.activeCourseId;
};

const List = ({ activeCourse, courses }: Props) => {
  const [pending, startTransition] = useTransition();

  const onClick = (courseId: number) => {
    if (pending) {
      return;
    }

    if (activeCourse === courseId) {
      redirect("/learn");
    }

    startTransition(() => {
      upsertUserProgress(courseId).catch(() =>
        toast.error("Something went wrong")
      );
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          active={course.id === activeCourse}
          title={course.title}
          imageSrc={course.imageSrc}
          disabled={pending}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default List;
