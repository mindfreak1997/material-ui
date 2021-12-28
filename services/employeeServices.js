const KEYS={
    employees:'employees', 
    employeeId:'employeeId'
}

export const insertEmployees = (data) => {
    let employees=getAllEmployee()
    employees.push(data)
   localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}



export const getAllEmployee = () => {
    if(localStorage.getItem(KEYS.employees)==null)
    localStorage.setItem(KEYS.employees,JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees))
}

export function updateEmployee(data) {
    let employees = getAllEmployee();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
    let employees = getAllEmployee();
    employees = employees.filter(x => x.id != id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}