import { fetchCourse } from "@/app/lib/db";
export const metadata = {
    title: "CantorCollege.ac.uk | Course List",
  };
var index 
const Course = async () => {
  const Course = await fetchCourse();

  return (
    <div>
      <h1>Course List</h1>
      <ol key={{index}}>
            {/* Loop over the staff and display them here: */}
          {Course.map((course, index) => (
            <div>
              <div className="CourseList">
            <><li key={index}>
              <p>
                <b>Course Title - </b>{course.CourseTitle}<br></br>
              <br></br>
                <b>Course Type - </b>{course.CourseType}<br></br>
              <br></br>
              <b>Course Summary - </b>{course.CourseSummary}<br></br>
              <br></br>
              <b>Award Name/Type - </b>{course.CourseAwardName}<br></br>
              <br></br>
              <b>UCAS Code - </b>{course.UcasCode}<br></br>
              <br></br>
              <b>Ucas Points - </b>{course.UcasPoints}<br></br>
              <br></br>
              <b>Year Of Entry - </b>{course.YearOfEntry}<br></br>
              <br></br>
              <b>Mode Of Attendance - </b>{course.ModeOfAttendance}<br></br>
              <br></br>
              <b>Length Of Study - </b>{course.StudyLength}<br></br>
              <br></br>
              <b>Foundation Year - </b>{course.HasFoundationYear}<br></br>
              <br></br>
              <b>Course Subject - </b>{course.CourseSubject}<br></br>
              <br></br>
              <b>No longer Recruiting - </b>{course.NoLongerRecruiting}<br></br>
            </p>
            </li></>
            <br></br>
            </div>
          </div>
          ))}
        </ol>
        <br></br>
    </div>
  );
};
export default Course;