import Image from "next/image";
export const metadata = {
    title: "CantorCollege.ac.uk | Computing Courses",
  };

export default function ComputingCourses(){
    return(
        <><><div>
            <h1>Computing Courses</h1>
            <p> The College offers a range of courses to suit applicants with varying backgrounds and educational abilities.
                At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks,
                Software Engineering and Cyber Security with Forensics amongst others.
                The College teaches undergraduate and postgraduate courses in a wide range of specialisms,
                including computer science, software development, information systems, networking and software engineering.
                It is at the heart of a passionate computing community, including student societies devoted to games development,
                digital forensics and programming.
            </p>
            {/* original image dimensions 899, 600. */}
        </div><div className='ComputerLabImage'>
                <Image
                    src="/images/ComputerLab.jpg"
                    width={225}
                    height={157}
                    alt="Image Of Computer Lab" />

            </div></><p>
                The courses are British Computer Society accredited and are highly relevant to modern industry.
                They are designed to prepare students for professional occupations in Computing and related fields.
                Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
            </p></>
            
        )
    }