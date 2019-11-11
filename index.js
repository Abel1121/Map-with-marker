const initMap = () => {
    // use the mapbox SDK here
    mapboxgl.accessToken = "pk.eyJ1IjoiYWJlbDExIiwiYSI6ImNrMnRlaWtieTByN2kzbnRqdnpscGdlcW8ifQ.FBKpf65CkOe6wm4EP8LcYg";
    
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [22.247899, 52.170177],
    zoom: 13,
});
    const popup = new mapboxgl.Popup()
        .setHTML(`<h2>Siedlce</h2><p>Mark Parents house</p>`);

    const marker = new mapboxgl.Marker()
    .setLngLat([22.247899, 52.170177])
    .setPopup(popup)
    .addTo(map);
}

const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.3.0/mapbox-gl.js";
script.onload = () => {
    initMap();
}

document.body.appendChild(script)