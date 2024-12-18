import { fetchCourse } from "@/app/lib/db";
export const metadata = {
    title: "CantorCollege.ac.uk | Course List",
  };
var index 
const Course = async () => {
  const Course = await fetchCourse();

  return (
    <div className='Course-List-Container'>
      <h2>Course List</h2>
      <ol key={{index}}>
            {/* Loop over the staff and display them here: */}
          {Course.map((course, index) => (
            <><li key={index}>
              <p><b>Course Title:</b></p>{course.CourseTitle}
              <p><b>Course Type:</b></p>{course.CourseType}
              <p><b>Course Summary:</b></p>{course.CourseSummary}
              <p><b>Award Name/Type:</b></p>{course.AwardName}
              <p><b>UCAS Code:</b></p>{course.UcasCode}<br></br>
              <p><b>Ucas Points:</b></p>course.UcasPoints&rbrace;
              <p><b>Year Of Entry:</b></p>{course.YearOfEntry}
              <p><b>Mode Of Attendance:</b></p>{course.ModeOfAttendance}
              <p><b>Length Of Study:</b></p>{course.StudyLength}
              <p><b>Foundation Year:</b></p>{course.HasFoundationYear}
              <p><b>Course Subject</b></p>{course.CourseSubject}
              <p><b>No longer Recruiting</b></p>{course.NoLongerRecruiting}<br></br>

            </li><br></br></>
          ))}
        </ol>
    </div>
  );
};
export default Course;

// NEED TO IMPORT THE IMAGES AT THE TOP OF THE PAGE.
// NEED TO THEN USE THE IMAGE TAG TO USE THE IMAGE.



























// 'use client'
// import React, {useEffect} from "react";
// export default function CourseList(){
//     useEffect(() => {
//         console.info("ready");
//         fetch('./Components/JSON/course-list.json')
//         .then((res) => res.json())
//         .then(console.log)
//         .then(data => {
//             console.dir(data);
//             data.forEach(item => {
//                 const row = document.createElement("tr");
//                 const CourseTitleCell = document.createElement("td");
//                 const CourseTypeCell = document.createElement("td");
//                 const CourseSummaryCell = document.createElement("td");
//                 const CourseAwardNameCell = document.createElement("td");
//                 const UcasCodeCell = document.createElement("td");
//                 const UcasPointsCell = document.createElement("td");
//                 const YearOfEntry = document.createElement("td");
//                 const ModeOfAttendance = document.createElement("td");
//                 const StudyLength = document.createElement("td");
//                 const HasFoundationYear = document.createElement("td");
//                 const CourseSubject = document.createElement("t");
//                 const NoLongerRecruiting = document.createElement("tr");
//                 CourseTitleCell.textContent = item.CourseTitle;
//                 CourseTypeCell.textContent = item.CourseType;
//                 CourseSummaryCell.textContent = item.CourseSummary;
//                 CourseAwardNameCell.textContent = item.CourseAwardName;
//                 UcasCodeCell.textContent = item.UcasCode;
//                 UcasPointsCell.textContent = item.UcasPoints;
//                 YearOfEntry.textContent = item.YearOfEntry;
//                 ModeOfAttendance.textContent = item.ModeOfAttendance;
//                 StudyLength.textContent = item.StudyLength;
//                 HasFoundationYear.textContent = item.HasFoundationYear;
//                 CourseSubject.textContent = item.CourseSubject;
//                 NoLongerRecruiting.textContent = item.NoLongerRecruiting;
//                 row.appendChild(TitleCell);
//                 row.appendChild(TypeCell);
//                 row.appendChild(SummaryCell);
//                 row.appendChild(AwardNameCell);
//                 row.appendChild(UcasCode);
//                 row.appendChild(UcasPoints);
//                 row.appendChild(EntryYear);
//                 row.appendChild(AttendanceMode);
//                 row.appendChild(StudyLength);
//                 row.appendChild(HasFoundationYear);
//                 row.appendChild(CourseSubject);
//                 row.appendChild(NoLongerRecruiting);
//                 CourseTable.appendChild(row);

//                 return(
//                     CourseList()
//                 )
//             });
            
//         })
//     })
// }

// () => {
//     console.info("ready");
// }



        









