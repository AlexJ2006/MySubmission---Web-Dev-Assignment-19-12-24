import mysql from 'mysql2/promise';

// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

  const fetchCourse = async () => {
    try {
      const query = "select * from CourseList"; 
      const [rows] = await connection.execute(query); 
      return rows;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
  };

  export {fetchCourse}
  


// FULL METHOD FOR CATCHING ERRORS

//   const fetchStaff = async () => {
//     try {
//       const query = "select * from staff"; 
//       const [rows] = await connection.execute(query); 
//       return rows;
//     } catch (error) {
//       console.error("Database Error:", error); 
//       throw new Error("Failed to fetch data.");
//     }
//   };