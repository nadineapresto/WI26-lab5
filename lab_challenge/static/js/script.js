// TODO: Add event listener for the api-form
//
// Steps:
// 1. Get the form element by id "api-form"
// 2. Add a 'submit' event listener
document.getElementById("api-form").addEventListener("submit", async function(event) {
    // 3. In the handler:
    //    - Call event.preventDefault() to stop page reload
    event.preventDefault();

    //    - Get values from form inputs
    const name = document.getElementById("name-api").value;
    const favorite_color = document.getElementById("color-api").value;
    const feedback = document.getElementById("fb-api").value;

    //    - Use fetch() to POST JSON to /submit-api
    const response = await fetch("/submit-api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            favorite_color: favorite_color,
            feedback: feedback
        })
    })

    //    - Parse the JSON response
    const data = await response.json();

    //    - Update the result elements on the page
    document.getElementById("result-name").textContent = data.name;
    document.getElementById("result-color").textContent = data.favorite_color;
    document.getElementById("result-feedback").textContent = data.feedback;
    document.getElementById('api-result').style.display = 'block';
})
