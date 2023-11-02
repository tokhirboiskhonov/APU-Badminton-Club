const blogsList = document.querySelector(".news__list");
const blogsCardTemplate = document.querySelector("#news__card").content;

const renderBlogs = (blogNews) => {
  blogsList.innerHTML = null;

  blogNews.forEach((blogs) => {
    const blogsClone = blogsCardTemplate.cloneNode(true);

    blogsClone.querySelector(".news__img").src = blogs.image;
    blogsClone.querySelector(".news__date").textContent = blogs.dateOfPublishing;
    blogsClone.querySelector(".news__time").textContent = blogs.timeReader;
    // blogsClone.querySelector(".news__link").textContent = blogs.descriptionLink;

    blogsList.appendChild(blogsClone);
  });
};

renderBlogs(blogs);
