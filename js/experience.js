const experience = {
    jobs : [
        {
            company: "Shamrock Trading Corp",
            position: "EDI Specialist",
            startDate: new Date(2022,8,26),
            endDate: null,
            description: "Responsible for all EDI implementations, support, troubleshooting \
            for Shamrock's Ryan Transportation brand"
        }
    ]
}

const boxes = document.getElementsByClassName("exp-box");
for (let index = 0; index < boxes.length; index++) {
    boxes[index].children[0].innerHTML = experience.jobs[index].company;
    boxes[index].children[2].innerHTML = experience.jobs[index].position;
    let dateStr = experience.jobs[index].startDate.toLocaleDateString('en-us', { year:"numeric", month:"long"});
    dateStr += (experience.jobs[index].endDate === null ? " - Present" : " - " + experience.jobs[index].endDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}));
    boxes[index].children[3].innerHTML = dateStr;
    boxes[index].children[4].children[0].innerHTML = experience.jobs[index].description;
}