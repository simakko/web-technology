contactApp.contactFunction = (function () {

    var checked = [];
    var contacts;
    var edit;

    function addNewContact() {
        if ($.trim($('#firstname').val()) == '' || $.trim($('#lastname').val()) == '' || $.trim($('#age').val()) == '' || $.trim($('#address').val()) == '' || $.trim($('#city').val()) == '') {
            alert("Fill in all fields");
        }
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        contacts = contactApp.localStorage.readStorage();
        var contact = createContact(firstname, lastname, age, address, city);

        if (edit == true) {
            contacts[checked[0]] = contact;
            edit = false;
            checked = [];
        }
        else {
            contacts.push(contact);
        }
        contactApp.localStorage.addToStorage(contacts);
        location.reload();
    }

    function createContact(firstname, lastname, age, address, city) { //returns object of given values
        return {
            firstname: firstname,
            lastname: lastname,
            age: age,
            address: address,
            city: city
        }
    }

    function editContact(contacts) {
        var checkboxes = document.getElementById('infoTable').querySelectorAll('.mdl-checkbox__input');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checked.push(i);
            }
        }
        if (checked.length > 1) {
            alert("Edit one contact at a time");
            checked = [];
        }
        else {
            edit = true;
            document.getElementById("firstname").classList.add("is-focused");
            $('#firstname').val(contacts[checked[0]].firstname);
            $('#lastname').val(contacts[checked[0]].lastname);
            $('#age').val(contacts[checked[0]].age);
            $('#address').val(contacts[checked[0]].address);
            $('#city').val(contacts[checked[0]].city);
        }
    }

    function deleteContact() {
        contacts = contactApp.localStorage.readStorage();
        var checkboxes = document.getElementById('infoTable').querySelectorAll('.mdl-checkbox__input');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                contacts.splice(i, 1);
            }
        }
        contactApp.localStorage.addToStorage(contacts);
        contactApp.showContacts.createTableWithContacts();
    }

    return {
        addContact: function () {
            addNewContact();
        },
        editContactInfo: function () {
            var contacts = contactApp.localStorage.readStorage();
            editContact(contacts);
        },
        deleteContactInfo: function () {
            deleteContact();
        }
    }

})(); //closure - private function


