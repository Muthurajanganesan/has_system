document.addEventListener('DOMContentLoaded', function () {
    var searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('click', function () {
            var list = document.getElementById('hospitalList');
            if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
            } else {
                list.classList.add('hidden');
            }
        });
    }
});

function openHospital(hospitalName) {
    var doctorBox = document.getElementById('doctorBox');
    var hName = document.getElementById('hospitalName');

    hName.innerText = hospitalName;
    doctorBox.classList.remove('hidden');

    document.getElementById('hospitalList').classList.add('hidden');
    document.getElementById('searchBar').value = hospitalName;
}

function book() {
    alert('Appointment booked successfully!');
}
