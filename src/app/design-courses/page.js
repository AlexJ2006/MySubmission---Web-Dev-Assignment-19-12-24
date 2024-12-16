import Image from "next/image";
export const metadata = {
    title: " CantorCollege.ac.uk | Design Courses",
  };

export default function DesignCourses(){
    return(
        <div>
            <h1>Design Courses</h1>
            <p> The College is an internationally connected creative community of diverse disciplines housed under one roof.
                We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
            </p>
            <div className='GalleryImage'>
                <Image
                    src="/images/ArtGallery.jpeg"
                    width={250}
                    height={188}
                    alt="Paintings on a wall" />
            </div>
            <p>
                The College's art and design courses don't just train you, they promote alternative ways of thinking,
                making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path.
                You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches
                that both perceive and create opportunities for better lives.
                You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops.
                At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients,
                cultural institutions, businesses and organisations.
            </p>
        </div>
    )
  }