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
        // {
        //     company: "Shamrock Trading Corp",
        //     position: "EDI Specialist",
        //     startDate: new Date(2022,8,26),
        //     endDate: null,
        //     description: "Responsible for all EDI implementations, support, troubleshooting \
        //     for Shamrock's Ryan Transportation brand"
        // }
    ],
    getDateRangeStr: function(index){
        return this.jobs[index].startDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}) +
            (experience.jobs[index].endDate === null ? " - Present" : " - " + experience.jobs[index].endDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}));
    }
}

const boxes = document.getElementsByClassName("exp-box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = experience.jobs[i].company;
    boxes[i].children[2].innerHTML = experience.jobs[i].position;
    boxes[i].children[3].innerHTML = experience.getDateRangeStr(i);
    for (let j = 0; j < boxes[i].children[4].children.length; j++) {
        boxes[i].children[4].children[j].innerHTML = experience.jobs[i].description;
    }
}