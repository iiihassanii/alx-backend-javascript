export default function getStudentsByLocation(students, city) {
  const result = students.filter((students) => students.location === city);
  return result;
}
