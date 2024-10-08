
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob';
}
