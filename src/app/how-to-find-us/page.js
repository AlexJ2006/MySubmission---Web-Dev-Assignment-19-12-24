import Image from "next/image";
export const metadata = {
    title: "CantorCollege.ac.uk | How to find us",
  };

export default function HowToFindUs(){
    return(
        <><div>
        <h1>Please find our contact information listed below</h1>
        <p>Feel free to get in touch if you have any queries.</p>
        <p>Please note: On results days or during graduation week, your wait time may be slightly longer than usual.</p>
        <h2>Campus Map:</h2>
      </div><></><div className="CampusMap">

{/* original image dimensions of 1000, 598 */}
        </div><Image
          src='/images/CampusMap.jpg'
          width={333}
          height={199}
          alt="Image of Campus Map"
          /><div></div></>
    )
  }