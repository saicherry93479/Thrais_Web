import { useEffect, useState } from "react";
import Header from "./Header";
import { COURSE_DATA } from "../CourseData";
import { useLocation } from "react-router-dom";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const CoursePage = () => {
  return (
    <div>
      <div className="fixed w-full top-0 z-40 bg-blue-100/50">
        <Header></Header>
      </div>
      <div className="h-[10vh]  w-full"></div>
      <div className="bg-[#e6f7ff] flex  items-center justify-center   h-[90vh] my-auto  overflow-hidden  px-4">
        <Course />
      </div>
    </div>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Course = () => {
  const query = useQuery();
  console.log(query.get("course"));
  const [course, setCourse] = useState<any>(
    COURSE_DATA.filter((course) => course.coursename === query.get("course"))[0]
  );

  useEffect(() => {
    if (!course) {
      setCourse(
        COURSE_DATA.filter((course) => course.coursename === "C Programming")[0]
      );
    }
  }, [course]);

  const [expandedModule, setExpandedModule] = useState(null);

  return (
    <div className="max-w-4xl w-full  lg:min-w-[700px]    mx-auto  bg-red-900  bg-white rounded-lg shadow-xl overflow-hidden mb-10">
      <div className="px-6 py-4 ">
        <div className="sticky top-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00a3ea] mb-4">
            {course?.coursename}
          </h2>
          {/* <div className="mb-6 hidden">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>
                {Math.round((completedModules / totalModules) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#00a3ea] h-2.5 rounded-full"
                style={{ width: `${(completedModules / totalModules) * 100}%` }}
              ></div>
            </div>
          </div> */}
        </div>
        <div className="space-y-4  h-[70vh] overflow-scroll ">
          {course?.modules.map((module: any, moduleIndex: any) => (
            <ModuleCard
              key={moduleIndex}
              module={module}
              isExpanded={expandedModule === moduleIndex}
              onToggle={() =>
                setExpandedModule(
                  expandedModule === moduleIndex ? null : moduleIndex
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ module, isExpanded, onToggle }: any) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-150 ease-in-out flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="md:text-lg font-medium text-gray-800">
          {module.name}
        </span>
        {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {isExpanded && (
        <div className="px-6 py-4 bg-white">
          <ul className="list-disc list-inside space-y-2">
            {module.topics.map((topic: any, topicIndex: any) => (
              <>
                <p className="text-[16px] underline underline-offset-4">
                  {" "}
                  {topic.name}
                </p>
                <ul
                  key={topicIndex}
                  className="text-gray-700 list-disc list-inside"
                >
                  {topic.subtopics.map((subtopic: any, lessonIndex: any) => (
                    <li key={lessonIndex} className="text-gray-700">
                      {subtopic}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
