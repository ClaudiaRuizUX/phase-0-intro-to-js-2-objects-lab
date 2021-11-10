 
let employee = {
    name: "John",
    age: "30",
    streetAddress: "place"
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    let copy = {...employee};
    copy[key]=value;
    return copy;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let copy = Object.assign({}, employee)
    delete copy[key]
    return copy
}
function destructivelyDeleteEmployeeByKey(employee, key, value) {
    delete employee[key].value
    return employee
}
