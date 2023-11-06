const teamList = document.querySelector(".team__list");
const teamCardTemplate = document.querySelector("#team-card").content;

const coursesList = document.querySelector(".popular-courses__list");
const courseCardTemplate = document.querySelector("#popular-course").content;

const renderTeam = (teams) => {
  teamList.innerHTML = null;

  teams.forEach((team) => {
    const teamClone = teamCardTemplate.cloneNode(true);

    teamClone.querySelector(".team__name").textContent = team.name;
    teamClone.querySelector(".team__job").textContent = team.job;
    teamClone.querySelector(".team__description").textContent = team.description;
    teamClone.querySelector(".team__image").src = team.image;

    team.socials.forEach((social) => {
      const item = document.createElement("li");
      const anchor = document.createElement("a");

      item.classList.add("team__social");

      anchor.target = "_blank";
      anchor.href = social.link;
      anchor.innerHTML = socialIcons[social.type];

      item.appendChild(anchor);

      teamClone.querySelector(".team__socials").appendChild(item);
    });

    teamList.appendChild(teamClone);
  });
};

const renderCourses = (courses) => {
  coursesList.innerHTML = null;

  courses.forEach((course) => {
    const courseClone = courseCardTemplate.cloneNode(true);

    courseClone.querySelector(".popular-course__image").src = course.image;
    courseClone.querySelector(".popular-course__heading").textContent = course.title;
    courseClone.querySelector(".popular-course__author").textContent = course.teacher;
    courseClone.querySelector(".popular-course__date").textContent = course.date;
    courseClone.querySelector(".popular-course__description").textContent = course.description;
    courseClone.querySelector(".popular-course__shows").textContent = course.shows;
    courseClone.querySelector(".popular-course__comments").textContent = course.comments;
    // courseClone.querySelector(".popular-course__button").href = `./course/${course.alias}.html`;
    courseClone.querySelector(".popular-course__rating").innerHTML = ratings[course.rating];

    coursesList.appendChild(courseClone);
  });
};

renderTeam(teams);
renderCourses(courses);
