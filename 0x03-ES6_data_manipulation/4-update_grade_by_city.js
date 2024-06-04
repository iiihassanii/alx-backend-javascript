export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students.filter((student) => student.location === city);

  return updatedStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return matchingGrade
      ? { ...student, grade: matchingGrade.grade }
      : { ...student, grade: 'N/A' };
  });
}
