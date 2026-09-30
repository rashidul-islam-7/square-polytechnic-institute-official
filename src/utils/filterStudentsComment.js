export const filterStudentsByDepartment = (studentComments, department) => {
  return studentComments.filter((student) => student.department === department);
};
