const teachersList = document.querySelector(".teachers__list");
const teacherCardTemplate = document.querySelector("#teacher-card").content;

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

renderTeachers(teachers);
