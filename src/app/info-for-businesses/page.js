import Image from "next/image";
export const metadata = {
    title: "CantorCollege.ac.uk | Business Information",
  };

export default function Businesses(){
    return(
      <div>
      <h1>Information for businesses</h1>
      <h2>Partner with Cantor College: </h2>
        <h2>Unlock Expertise, Innovation, and Growth</h2>
      <p>At Cantor College, we believe in the power of collaboration between education and industry.
      Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise,
      innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive
      in an increasingly digital world.
      </p>
          <li><b>Custom Training and Development Programs - </b> Empower your workforce with skills that matter. 
                Our faculty can develop custom training programs that address your business's specific needs,
                whether in advanced computing technologies, creative design, or the latest in tech innovation.
                We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.
          </li>
          <br></br>
          <li>
              <b>Research and Development Partnerships - </b> Leverage the talent and creativity of our students and faculty by 
              partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies,
              innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.
          </li>
          <br></br> 
          <li>
              <b>Design and Technology Consultancy - </b> Our experienced professionals and top-tier students can provide consultancy 
              services to help you with a variety of projects, from web development and software engineering to product design
              and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.
          </li>
          <br></br>
          <li>
              <b>Internships and Graduate Recruitment - </b> Gain access to a pool of highly skilled and motivated students ready to        
              contribute to your business. Our internship and recruitment services can connect you with top talent in computing,
              design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience.
          </li>
          <br></br>
          <li>
              <b>Event Hosting and Sponsorship - </b> Cantor College hosts a range of events throughout the year, including hackathons,     
              design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their
              organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.
          </li>

      <h3>Why choose to partner with Cantor college?</h3>
      <ul>
          <li>
              <b>Cutting-Edge Expertise:</b> Our programs are at the forefront of industry trends, 
              ensuring that our services reflect the latest advancements in technology and design.
          </li>
          <li>
              <b>Tailored Solutions: </b> We understand that every business is unique. 
              Our services are customized to meet your specific objectives and challenges.
          </li>
          <li>
              <b>Future-Ready Talent: </b> Our students are trained to excel in the modern workplace,     
              equipped with both theoretical knowledge and practical skills.
          </li>
      </ul>
      <div className='Images'>
                <Image
                    src="/images/BusinessGroup.jpeg"
                    width={250}
                    height={188}
                    alt="Image of a group of people around a table"/>
            </div>
            <div className='LectureHallForHire'>
                <Image
                    src="/images/Cantor Lecture Theatre 3.jpg"
                    width={250}
                    height={167}
                    alt="Empty Lecture Theatre" />
            </div>
      <h4>Get in touch</h4>
      <h5>Ready to explore how Cantor College can help your business grow?</h5>
      <p>
          Contact our business Services team today to discuss your needs and learn more about our offerings.
          We look forward to working with you to achieve your business goals.
      </p>
  </div>
    )
  }