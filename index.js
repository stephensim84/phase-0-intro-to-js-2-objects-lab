let employee = {
    name: "Isaac",
    address: "1427 26th ave"
}

function updateEmployeeWithKeyAndValue(employee, key , value){
    // employees.name = employee;
    // let newarray = {...employees, key : value};
    
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, text ){
employee[streetAddress] = text;
return employee
}


function deleteFromEmployeeByKey(employee, key){
    let clone = employee;

    delete clone [key];
    return clone 
} 

function deleteFromEmployeeByKey2(employee, key){
delete employee.name == key
return employee
}