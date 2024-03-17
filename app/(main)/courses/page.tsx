import { getCourses } from "@/db/queries";
import React from "react";
import List from "./list";

const CoursesPage = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-black text-neutral-700">Language Courses</h1>

      <List activeCourse={1} courses={courses} />
    </div>
  );
};

export default CoursesPage;
