const experience = {
    jobs : [
        {
            company: "Shamrock Trading Corp",
            positions: [
                {
                    title: "EDI Specialist",
                    startDate: new Date(2022,8,26),
                    endDate: null,
                    description: [
                        {
                            text:  "Responsible for all EDI implementations, support, troubleshooting \
                            for Shamrock's Ryan Transportation brand"
                        }
                    ]
                }
            ]
            
        },
        {
            company: "Stord",
            positions: [
                {
                    title: "Integration Engineer",
                    startDate: new Date(2022,4,11),
                    endDate: new Date(2022,8,22),
                    description: [
                        {
                            text: "Designed and implemented core API process flows integrated with \
                            the our main warehouse management systems, accomodating all \
                            company owned warehouses and their 30+ integrated customers."
                        },
                        {
                            text: "Headed the integration effort to migrate 75+ customers from legacy \
                            warehouse management system onto the Stord platform after an \
                            acquisition of a smaller logistics firm using the above processes."
                        }  
                    ]
                },
                {
                    title: "Integration Specialist",
                    startDate: new Date(2021,2,16),
                    endDate: new Date(2022,4,11),
                    description: [
                        {
                            text: "Onboarded several clients during phases of project management, \
                            technical development, utilizing API connections, json, xml, EDI \
                            data"
                        }
                    ]
                }
            ]   
        }
    ],
    getDateRangeStr: function(jobIndex,positionIndex){
        return this.jobs[jobIndex].positions[positionIndex].startDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}) +
            (experience.jobs[jobIndex].positions[positionIndex].endDate === null ? " - Present" : " - " + experience.jobs[jobIndex].positions[positionIndex].endDate.toLocaleDateString('en-us', { year:"numeric", month:"long"}));
    }
}

const boxes = document.getElementsByClassName("exp-box");
const descList = document.getElementsByClassName("exp-box-desc");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = experience.jobs[i].company;
    for (let j = 0; j < experience.jobs[i].positions[j].length; j++) {
        boxes[i].children[2].innerHTML = experience.jobs[i].title;
        boxes[i].children[3].innerHTML = experience.getDateRangeStr(i,j);
        for (let k = 0; k < experience.jobs[i].positions[j].description[k].length; k++) {
            const node = document.createElement("li");
            node.appendChild(document.createTextNode(experience.jobs[i].positions[j].description[k].text));
            boxes[i].children[4].children[j].innerHTML = experience.jobs[i].positions[j].description[k].text;
            descList[i].appendChild(node);
        }
    }
}