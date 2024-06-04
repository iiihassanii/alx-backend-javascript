import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const ids = getListStudentIds(students);
  const start = 0;
  const sum = ids.reduce(
    (prev, current) => prev + current, start,
  );
  return sum;
}
