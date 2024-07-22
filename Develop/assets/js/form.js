// TODO: Create a variable that selects the form element
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitBttn = document.querySelector('#submitBttn');
const error = document.querySelector('#error');

// TODO: If the form is submitted with missing data, display an error message to the user.
submitBttn.addEventListener('click', function (event) {
    event.preventDefault();

    userPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    };
    console.log(userPost)

    if (!userPost.username ||
        !userPost.title ||
        !userPost.content
    ) {
        error.textContent = `Please complete the form.`;
    } else {

        localStorage.setItem('userPost', JSON.stringify(userPost));

        let url = './blog.html'
        redirectPage(url);
    };

});