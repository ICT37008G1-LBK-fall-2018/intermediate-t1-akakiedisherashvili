var students = [
    {
        FirstName: 'name 1',
        LastName: 'lname 1',
        PersonalNumber: '00000000000',
        Grade: 84
    },
    {
        FirstName: 'name 2',
        LastName: 'lname 2',
        PersonalNumber: '00000000001',
        Grade: 30
    },
    {
        FirstName: 'name 3',
        LastName: 'lname 3',
        PersonalNumber: '00000000002',
        Grade: 55
    },
    {
        FirstName: 'name 4',
        LastName: 'lname 4',
        PersonalNumber: '00000000003',
        Grade: 70
    },
    {
        FirstName: 'name 5',
        LastName: 'lname 5',
        PersonalNumber: '00000000004',
        Grade: 92
    },
    {
        FirstName: 'name 6',
        LastName: 'lname 6',
        PersonalNumber: '00000000005',
        Grade: 88
    },
    {
        FirstName: 'name 7',
        LastName: 'lname 7',
        PersonalNumber: '00000000006',
        Grade: 99
    },
    {
        FirstName: 'name 8',
        LastName: 'lname 8',
        PersonalNumber: '00000000007',
        Grade: 65
    }

	]
    function studentsfunction(student){
    	for (var i = 0; i < students.length; i++) {
		    var node = document.createElement("li");
		    var textnode = document.createTextNode(students[i].FirstName);
		    node.appendChild(textnode);
		    document.getElementById("list").appendChild(node);

		    var node = document.createElement("li");
		    var textnode = document.createTextNode(students[i].LastName);
		    node.appendChild(textnode);
		    document.getElementById("list").appendChild(node);

		     var node = document.createElement("li");
		    var textnode = document.createTextNode(students[i].PersonalNumber);
		    node.appendChild(textnode);
		    document.getElementById("list").appendChild(node);

		    var node = document.createElement("li");
		    var textnode = document.createTextNode(students[i].Grade);
		    node.appendChild(textnode);
		    node.style.borderBottom = '1px solid gray';
		    document.getElementById("list").appendChild(node);

		}	
    }
    studentsfunction()