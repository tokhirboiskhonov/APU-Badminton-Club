const teachersList = document.querySelector(".teachers__list");
const teacherCardTemplate = document.querySelector("#teacher-card").content;

const coursesList = document.querySelector(".popular-courses__list");
const courseCardTemplate = document.querySelector("#popular-course").content;

const renderTeachers = (teachers) => {
  teachersList.innerHTML = null;

  teachers.forEach((teacher) => {
    const teacherClone = teacherCardTemplate.cloneNode(true);

    teacherClone.querySelector(".teacher__name").textContent = teacher.name;
    teacherClone.querySelector(".teacher__job").textContent = teacher.job;
    teacherClone.querySelector(".teacher__description").textContent = teacher.description;

    teacher.socials.forEach((social) => {
      const item = document.createElement("li");
      const anchor = document.createElement("a");

      item.classList.add("teacher__social");

      anchor.target = "_blank";
      anchor.href = social.link;
      anchor.innerHTML = socialIcons[social.type];

      item.appendChild(anchor);

      teacherClone.querySelector(".teacher__socials").appendChild(item);
    });

    teachersList.appendChild(teacherClone);
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
    courseClone.querySelector(".popular-course__button").href = `./course/${course.alias}.html`;
    courseClone.querySelector(".popular-course__rating").innerHTML = ratings[course.rating];

    coursesList.appendChild(courseClone);
  });
};

renderTeachers(teachers);
renderCourses(courses);
