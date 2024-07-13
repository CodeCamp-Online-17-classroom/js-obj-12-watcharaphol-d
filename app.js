const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function findEmployee(obj, name) {
    if (obj.hasOwnProperty(name.toLowerCase())) {
        alert(`${name.toUpperCase()}\n-----------\n\tSalary: ${(obj[name].salary).toLocaleString()} THB.\n\tAddress: ${obj[name].address.district}, ${obj[name].address.province}`);
    } else alert(`Employee Not Found!`);
};

let searchName = prompt("Enter employee name:");
findEmployee(employees, searchName);