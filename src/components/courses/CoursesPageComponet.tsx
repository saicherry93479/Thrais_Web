import Courses from "../home/Courses";

const CoursesPageComponent = () => {
  const items = [
    "Mapping the individual skillset with industry requirements",
    "Provide technical Internships (Both on core and Software)",
    "Guidance on Higher Education (After Engineering)",
    "Assistance on Employment (Both on core and Software)",
    "Tutoring to Engineering subjects as per the individual requirement",
    "Arranging interaction with the High packaged job holders",
    "Extending the Yoga and Meditation Classes by the certified Yoga trainers from Ministry of AYUSH",
  ];
  const courses = [
    {
      title: "Expert Training",
      items: ["C Programming", "Python Programming", "Data Structures", "JAVA"],
    },
    {
      title: "Front End",
      items: ["HTML", "CSS", "JavaScript", "PHP", "Angular"],
    },
    {
      title: "Data Analytics",
      items: ["Power BI", "Tableau", "Altrex"],
    },
    {
      title: "Automation",
      items: ["Manual Testing", "Automation: Selenium, C#"],
    },
    {
      title: "Tools and Services",
      items: ["Workato & Salesforce", "Mulesoft", "Dell Bhoom"],
    },
  ];

  return (
    <div className="container max-w-[65rem] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-left underline underline-offset-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
            key={index}
            className="bg-white min-h-48 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-bold mb-6 text-left underline underline-offset-8">
          Extended Services
        </h1>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
          className="bg-white min-h-48 rounded-lg p-6"
        >
          <ul className="list-disc list-inside space-y-2">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Courses></Courses>
    </div>
  );
};

export default CoursesPageComponent;
