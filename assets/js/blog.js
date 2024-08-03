// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backBttn = document.querySelector('#back');
const main = document.querySelector('main');
// TODO: Create a function that builds an element and appends it to the DOM

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


const newPost = function (currentPost) {

    const article = document.createElement('article');
    main.appendChild(article);

    const cardHeader = document.createElement('h2');
    cardHeader.textContent = currentPost.title;
    article.appendChild(cardHeader);

    const cardContent = document.createElement('blockquote');
    cardContent.textContent = currentPost.content;
    article.appendChild(cardContent)

    const cardFooter = document.createElement('p');
    cardFooter.textContent = currentPost.username;
    article.appendChild(cardFooter);
}
// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('card');
    main.appendChild(messageDiv);

    const message = document.createElement('h2');
    message.textContent = `There are no posts yet`;
    messageDiv.appendChild(message);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function () {
    const checkStorage = JSON.parse(localStorage.getItem('userPost')) || [];

    if (checkStorage !== null) {

        for (i = 0; i < checkStorage.length; i++) {

            let currentPost = checkStorage[i];

            newPost(currentPost);

        }
    } else {
        noPosts()
    }
}
// TODO: Call the `renderBlogList` function
renderBlogList();
checkTheme();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backBttn.addEventListener('click', function (event) {
    event.preventDefault();
    let url = './index.html';
    redirectPage(url);
});