  /**
     * @TODO
     * lengkapi fungsi employees agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */

const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
  
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    
    employees.push(newEmployee);
    return newEmployee;
  }
  
  addEmployee('Budi', 'budi@dicoding.com', 2022);
  addEmployee('Siti', 'siti@dicoding.com', 2023);
  
  console.log(employees);