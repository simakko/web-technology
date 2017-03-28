contactApp.showContacts = (function () {
    var table;
    var row;
    var tableFirstname;
    var tableLastname;
    var tableAge;
    var tableAddress;

    function googleMaps (address, city) {
        var mapsUrl = "http://maps.google.com/maps/place/";
        return '<a target="_blank" href="' + mapsUrl + address + ",+" + city + '">' + address + ", " + city + '</a>';

    }

    return {
        createTableWithContacts: function () {
            var i = 0;
            var contacts = contactApp.localStorage.readStorage();
            table = document.getElementById("tbody");
            table.innerHTML = "";
            contacts.forEach(function (contact) { //contacts objects own foreach

                    row = table.insertRow(table.rows.length);
                    var checkBox = '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" for="row[' + i + ']">' +
                        '<input type="checkbox" value="' + i + '" id="row[' + i + ']" class="mdl-checkbox__input" />';
                    row.insertCell(0).innerHTML = checkBox;
                    tableFirstname = row.insertCell(1);
                    tableLastname = row.insertCell(2);
                    tableAge = row.insertCell(3);
                    tableAddress = row.insertCell(4);

                    tableFirstname.innerText = contact.firstname;
                    tableLastname.innerText = contact.lastname;
                    tableAge.innerText = contact.age;
                    tableAddress.innerHTML = googleMaps(contact.address, contact.city);

                    i++;
                }
            );
        }
    }
})();


