//https://my-json-server.typicode.com/FACEPrep-ProGrad/fake-api

// Trial 1: Instructions for the button click

//step1: Validate login. If not correct, toggle the class "hidden"
// to the element with class "error-message" (hidden by default) to make it visible
//step2: If login successful, toggle the class "hidden"
// to element with class "loginSuccess" (hidden by default) to make it visible
//step3: Post the message to the json
//step4: Using the response of the post request, insert the profile-url,
// name and the message given by
// the user in appropriate places in the below snippet
{
  /* <img id="login-image" src="" alt="IMAGE GOES HERE">
<h3 id="login-name">WELCOME USERNAME</h3>
<h4 id="login-message">MESSAGE POSTED GOES HERE</h4> */
}

// Trial 1: Write your code here

const submitButton = document.getElementById("submit");

submitHandler = evt => {
  evt.preventDefault();
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  axios
    .get(
      proxyurl +
        "https://my-json-server.typicode.com/FACEPrep-ProGrad/fake-api/db"
    )
    .then(apiRes => console.log(apiRes.data))
    .catch(err => console.error(error));
};

submitButton.onclick = submitHandler;