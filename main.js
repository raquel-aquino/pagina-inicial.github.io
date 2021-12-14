function fetchData(){
    fetch("https://grabicon.p.rapidapi.com/icon?domain=google.com&size=64", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "grabicon.p.rapidapi.com",
            "x-rapidapi-key": "937768ab8amsh781f90d73b1f4adp1265f6jsn51edf7fb272d"
        }
    })

    .then(response => {
        console.log(response);
    })

    .catch(err => {
        console.error(err);
    });
}

fetchData();