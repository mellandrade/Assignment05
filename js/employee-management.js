/*eslint-env browser*/

//Global variables
var list = "";
var add;
var remove;
var show;
var employee_list = [{name: "Sally Smith", title: "VP Ops", ext: 3423},
                     {name: "Mark Martin", title: "Marketing", ext: 4567},
                     {name: "John Johnson", title: "Sales", ext: 3456},
                      {name: "Fred Franklin", title: "IT", ext: 6798},
                      {name: "Amanda Sayello", title: "CEO", ext: 1211}];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var displayEmployees = function () {
    "use strict";
    if (employee_list.length > 0) {
        employee_list.sort();
        list = employee_list.join("\n");
    }
};

var addEmployee = function () {
    "use strict";
    employee_list = $("employee_list");
    if (employee_list.value === "") {
        window.document.write("Please enter a value.");
    } else {
        employee_list.push(add.value);
        window.document.write("\n");
    }
};
window.addEventListener("load", function () {
    "use strict";
    $("add").addEventListener("click", addEmployee);
    displayEmployees();
});



