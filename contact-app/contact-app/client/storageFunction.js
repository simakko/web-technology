contactApp.localStorage = (function () {

    var key = "localStorageKey";

    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify([]));
    }

    function readLocalStorage() {
        var contacts = JSON.parse(localStorage.getItem(key));
        return contacts;
    }

    function addToLocalStorage(contacts) {
        localStorage.setItem(key, JSON.stringify(contacts));
    }
    return {
        readStorage: function () {
            return readLocalStorage();
        },
        addToStorage: function (contacts) {
            addToLocalStorage(contacts);
        }
    }

})();
