export function getCurrentLocation(setLocation) {
  navigator.geolocation.getCurrentPosition((pos) =>
    setLocation([pos.coords.latitude, pos.coords.longitude])
  );
}
