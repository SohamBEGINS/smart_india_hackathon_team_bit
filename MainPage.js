function toggleSidebar() {
    console.log('function called');
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
