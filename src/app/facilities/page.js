import Image from "next/image";
export const metadata = {
    title: " CantorCollege.ac.uk | Facilities",
  };

export default function Facilities(){
    return(
        <div>
            <h1>Cantor College</h1>
            <p> The College is located in the attractive and pleasantly refurbished Building.
                The building houses computing laboratories, and lecture/tutorial rooms.
                It has its own catering facilities and student work areas. There is also a car park to the back of the building.
                Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.
            </p>
            <div className='Cantor Atrium'>
                <Image
                    src="/images/Cantor atrium 3.jpg"
                    width={250}
                    height={167}
                    alt="Cantor College Atrium" />
            </div>
            <h2>Our Facilities include:</h2>
            <ul>
                <li>Wi-fi technology</li>
                <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li>Specialist faculty facilities</li>
                <li>A double height lecture theatre at first and second floor level</li>
                <li>Dramatic three-storey glass open atrium</li>
                <li>Meeting rooms</li>
                <li>Office accommodation</li>
                <li>Specialist IT facilities</li>
                <li>Reception desk area</li>
                <li>Catering outlet</li>
                <li>Parking for disabled badge holders</li>
                <li>Cycle racks</li>
                <li>Gallery</li>
            </ul>
        </div>
    )
  }