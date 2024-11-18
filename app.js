document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById('searchButton'); 


    searchButton.addEventListener('click', () => {

        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was no Response');
                }
                return response.text();
            })
            .then(data => {
                alert(`Superheroes: ${data}`);
            })
            .catch(error   => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});