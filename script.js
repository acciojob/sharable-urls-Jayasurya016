// your code here
   document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('urlForm');
            const nameInput = document.getElementById('name');
            const yearInput = document.getElementById('year');
            const urlDisplay = document.getElementById('url');
            
            const baseURL = "https://localhost:8080/";

            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent the default form submission (page reload)

                const nameValue = nameInput.value.trim();
                const yearValue = yearInput.value.trim();
                
                const params = [];

                // Check and add 'name' parameter if not empty
                if (nameValue) {
                    // Use encodeURIComponent to safely encode special characters
                    params.push(`name=${encodeURIComponent(nameValue)}`);
                }

                // Check and add 'year' parameter if not empty
                if (yearValue) {
                    params.push(`year=${encodeURIComponent(yearValue)}`);
                }

                let newURL = baseURL;
                
                // If there are parameters, construct the query string
                if (params.length > 0) {
                    newURL += '?' + params.join('&');
                }

                // Update the h3 element with the new URL
                urlDisplay.textContent = newURL;
            });
        });