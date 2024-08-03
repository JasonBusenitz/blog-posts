// TODO: Create a variable that selects the form element
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitBttn = document.querySelector('#submitBttn');
const error = document.querySelector('#error');

const checkTheme = function () {
    const mode = JSON.parse(localStorage.getItem('state'));

    if (mode === 'dark') {
        body.classList = 'dark';

        toggle.dataset.state = 'dark';
        toggle.textContent = toggle.dataset.moon;
    } else {
        body.classList = 'light';

        toggle.dataset.state = 'light';
        toggle.textContent = toggle.dataset.sun;

    };
};

// TODO: If the form is submitted with missing data, display an error message to the user.
submitBttn.addEventListener('click', function (event) {
    event.preventDefault();

    const postList = JSON.parse(localStorage.getItem('userPost')) || [];

    userPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    };

    if (!userPost.username ||
        !userPost.title ||
        !userPost.content
    ) {
        error.textContent = `Please complete the form.`;
    } else {

        postList.push(userPost);

        localStorage.setItem('userPost', JSON.stringify(postList));

        let url = './blog.html';
        redirectPage(url);
    };

});

checkTheme();