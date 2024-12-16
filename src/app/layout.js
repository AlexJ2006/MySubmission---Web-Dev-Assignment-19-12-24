import Navbar from "./Components/Navbar";
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
        <Navbar></Navbar>
        <script>
          alert("Accept Cookies");
          </script>
        </header>
        {children}
        </div>
        <footer>
        <div className="footer">
          <div className="footerText">
          <br></br>
          <p>Cantor College</p>
          <p>Main Street</p>
          <p>Sheffield</p>
          <p>SC4 2BB</p>
          <p>Tel:(01321) 2340 235</p>
          <p>Fax: (01321) 2340 236</p>
          <p>info@cantorcollege.ac.uk</p>
          <a href="https://www.google.com/maps/place/Cantor+College/@53.3768948,-1.4677752,569m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48798338bc5a1d13:0xad74824d1242efa8!8m2!3d53.3768948!4d-1.4677752!16s%2Fg%2F11rmxc6_kh?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Cantor College - Google Maps</a>
          </div>
          </div>
        </footer>
        <div className="Copyright">
          <p>&copy; alexjakeman2024</p>
          </div>
      </body>
    </html>
  );
}