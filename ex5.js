let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];
  
  function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    // Bước 1: Tìm chỉ số của sinh viên với ID được cung cấp trong mảng studentsArray.
    const indexToUpdate = studentsArray.findIndex(student => student.id === idToUpdate);
  
    if (indexToUpdate !== -1) {
      // Bước 2: Nếu sinh viên có ID được tìm thấy, tạo một bản sao của mảng ban đầu bằng cách sử dụng toán tử spread.
      const updatedStudentsArray = [...studentsArray];
      // Bước 3: Cập nhật điểm của sinh viên tại chỉ số tìm được trong mảng sao chép.
      updatedStudentsArray[indexToUpdate].grade = newGrade;
      return updatedStudentsArray;
    } else {
      // Bước 4: Nếu sinh viên có ID không được tìm thấy, in một thông báo và trả về mảng ban đầu không thay đổi.
      console.log("Student with ID " + idToUpdate + " not found.");
      return studentsArray;
    }
  }
  
  // Mảng sinh viên ban đầu
  console.log("Mảng sinh viên ban đầu:");
  console.log(students);
  
  // Cập nhật điểm của sinh viên có ID là 2 thành "A"
  let updatedStudents = updateStudentGrade(students, 2, "A");
  
  // Mảng sinh viên sau khi được cập nhật
  console.log("\nMảng sinh viên sau khi được cập nhật:");
  console.log(updatedStudents);
  