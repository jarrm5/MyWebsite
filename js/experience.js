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
        },
        {
            company: "Yellow Freight",
            positions: [
                {
                    title: "EDI Developer",
                    startDate: new Date(2018,5,18),
                    endDate: new Date(2021,2,16),
                    description: [
                        {
                            text: "Took part in migration effort to move data mapping and business \
                            processes from legacy EDI system to the Sterling Integrator \
                            platform, including revamping our Rail/Intermodal Bill of Lading \
                            and status messaging mapping/processes."
                        },
                        {
                            text: "Designed and implemented generic and customized data \
                            mapping/business process code for API, csv, EDI load tendering, \
                            EDI shipment statusing, and EDI invoicing for Yellow Corp \
                            Logistics customer onboarding to the Sterling Integrator platform. \
                            Onboarded clients included Walmart, Target and Home Depot."
                        }  
                    ]
                }
            ]   
        },
        {
            company: "National Association of Insurance Commissioners",
            positions: [
                {
                    title: "Developer Intern",
                    startDate: new Date(2017,7,10),
                    endDate: new Date(2018,4,12),
                    description: [
                        {
                            text: "Designed and implemented insurance filing retention UI for a Java \
                            based insurance filing web application"
                        },
                        {
                            text: "Created test suites for UI components utilizing Java Selenium \
                            testing module"
                        }  
                    ]
                }
            ]   
        },
        {
            company: "DST",
            positions: [
                {
                    title: "Technical Intern",
                    startDate: new Date(2017,4,20),
                    endDate: new Date(2017,7,10),
                    description: [
                        {
                            text: "Utilized Windows powershell scripting to generate attestation \
                            files for employee audits adhering to SOC1/SOC2 federal compliance"
                        },
                        {
                            text: "Assisted with authentication software upgrade by creating SQL \
                            queries/use cases to find inconsistencies in employee account \
                            names, groups and permissions"
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
    for (let j = 0; j < experience.jobs[i].positions.length; j++) {
        const h2Position = document.createElement("h2"), h2Date = document.createElement("h2");

        h2Position.appendChild(document.createTextNode(experience.jobs[i].positions[j].title));
        h2Position.classList.add("exp-box-position","exp-box-padding");

        h2Date.appendChild(document.createTextNode(experience.getDateRangeStr(i,j)));
        h2Date.classList.add("exp-box-date","exp-box-padding");

        boxes[i].appendChild(h2Position);
        boxes[i].appendChild(h2Date);

        const descList = document.createElement("ul");
        descList.classList.add("exp-box-desc", "grid-column-span-three", "exp-box-padding", "exp-box-ul-width");
        boxes[i].appendChild(descList);

        for (let k = 0; k < experience.jobs[i].positions[j].description.length; k++) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(experience.jobs[i].positions[j].description[k].text));
            boxes[i].children[boxes[i].children.length - 1].appendChild(li);
        }
    }
}