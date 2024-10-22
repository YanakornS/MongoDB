
const database = 'univesity';
/* const collectionprograms = "programs";
const collectionstudents = "students"; */

// เลือกฐานข้อมูล
use(database);

/* // สร้างคอลเลกชันใหม่
db.createCollection(collectionprograms);
db.createCollection(collectionstudents);
 */
/* 

db.programs.insertMany([
  {
    program_id: "SE",
    program_name: "Software Engineering",
    degree: "Bachelor of Engineering",
    faculty: "Faculty of Engineering",
    description: "This program focuses on software development methodologies.",
    duration_years: 4,
  },
  {
    program_id: "CS",
    program_name: "Computer Science",
    degree: "Bachelor of Science",
    faculty: "Faculty of Science",
    description: "This program covers core computer science concepts.",
    duration_years: 4,
  },
]); */
/* 
db.students.insertMany([
  {
   
    student_id: "SE1001",
    first_name: "James",
    last_name: "Doe",
    email: "james.doe@student.university.edu",
    enrollment_year: 2023,
    program_id: "SE",
  },
  {
    student_id: "CS1002",
    first_name: "Emily",
    last_name: "Smith",
    email: "emily.smith@student.university.edu",
    enrollment_year: 2022,
    program_id: "CS",
  },
]); */


db.programs.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "program_id",
      foreignField: "program_id",
      as: "student_list",
    },
  },
]);




