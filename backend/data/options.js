module.exports = {
        "options":[
            // Q1
            {
                optionID:1,
                questionID: 1,//current question ID
                description: "Quality, priority will be placed upon the quality of the plane, with the cost of time.",
                consequences: {
                    contracts: 0, //F1
                    compContracts:0, // F2
                    shares: 0,// F3

                    publicRep: 0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg: 5, // P1
                    actualProg: 4, // P2
                    expectedCost:5, // P3
                    actualCost: 5 // P4
                },
                outcomeText: "You value the quality most. It will lead you to a good-quality product.",
                next: 2 // id of next question
            },
            {
                optionID:2,
                questionID: 1,//current question ID
                description: "Cost, priority will be placed upon minimizing costs, with some possible costs to quality.",
                consequences: {
                    contracts: 0, //F1
                    compContracts:0, // F2
                    shares: 0,// F3

                    publicRep: 0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg: 5, // P1
                    actualProg: 5, // P2
                    expectedCost:5, // P3
                    actualCost: 4 // P4
                },
                outcomeText: "Of course, the money is the first thing you should consider at any time.",
                next: 2 // id of next question
            },
            {
                optionID:3,
                questionID: 1,//current question ID
                description: " Time, priority will be placed upon minimizing time, with possibly increased costs and/or reduced quality.",
                consequences: {
                    contracts: 0, //F1
                    compContracts:0, // F2
                    shares: 0,// F3

                    publicRep: 0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg: 5, // P1
                    actualProg: 6, // P2
                    expectedCost:5, // P3
                    actualCost: 5 // P4
                },
                outcomeText: "Saving the time is saving your life.",
                next: 2 // id of next question
            },
            {
                optionID:4,
                questionID: 1,//current question ID
                description: "Reputation, ensuring the happiness of all stakeholders.",
                consequences: {
                    contracts: 0, //F1
                    compContracts:0, // F2
                    shares: 0,// F3

                    publicRep: 5, // R1
                    regulatorRep:5, // R2
                    internalRep:5, // R3
                    voardRep:5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg: 5, // P1
                    actualProg: 5, // P2
                    expectedCost:5, // P3
                    actualCost: 4 // P4
                },
                outcomeText: "A good reputation is the best advertise to a company.",
                next: 2 // id of next question
            },
            {
                optionID:5,
                questionID: 1,//current question ID
                description: "All, vying for a balanced approach with equal focus in all key areas",
                consequences: {
                    contracts: 0, //F1
                    compContracts:0, // F2
                    shares: 0,// F3

                    publicRep: 2, // R1
                    regulatorRep:2, // R2
                    internalRep:2, // R3
                    voardRep:2,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg: 5, // P1
                    actualProg: 5, // P2
                    expectedCost:5, // P3
                    actualCost: 5 // P4
                },
                outcomeText: "All of these matter.",
                next: 2 // id of next question
            },

            // Q2
            {
                optionID:6,
                questionID: 2,//current question ID
                description: "Commit substantial pilot time, pilots will spend equal time giving software feedback as on cockpit and user interface design, this will lead to reduced time spent on cockpit/user interface",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:1, // P1
                    actualProg:1, // P2
                    expectedCost:1, // P3
                    actualCost:1 // P4
                },
                outcomeText: "You put lots of efforts in giving feedback.",
                next: 3 // id of next question
            },
            {
                optionID:7,
                questionID: 2,//current question ID
                description: "Commit a little pilot time, pilots will spend a small amount of time giving software feedback, this will consider only the main aspects of the software",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:1, // P1
                    actualProg:1, // P2
                    expectedCost:1, // P3
                    actualCost:1 // P4
                },
                outcomeText: "It may be worth to commit more time, but you think there are many things more important than this. So you commit only a little time.",
                next: 3 // id of next question
            },
            {
                optionID:8,
                questionID: 2,//current question ID
                description: "Commit no time, pilots will spend no time giving software feedback, this is what has been done in the past since software expertise lies outside the scope of pilot training, this will lead to increased time spent on cockpit/user interface",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:1, // P1
                    actualProg:1, // P2
                    expectedCost:1, // P3
                    actualCost:1 // P4
                },
                outcomeText: "It would not make any difference whether you provide feedback or more. So you decide not to waste your time on this.",
                next: 3 // id of next question
            },

            // Q3
            {
                optionID:9,
                questionID: 3,//current question ID
                description: "Make one inspection at the end of plane development, minimizes costs and shows trust ",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:-3, // R2
                    internalRep:0, // R3
                    voardRep:-6,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:4, // P1
                    actualProg:4, // P2
                    expectedCost:4, // P3
                    actualCost:4 // P4
                },
                outcomeText: "You inspected the plane once, and found nothing",
                next: 5 // id of next question
            },
            {
                optionID:10,
                questionID: 3,//current question ID
                description: "Make two inspections, one mid-way through development and one at the end of development, more balanced, and what has been done in the past",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:3,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:4, // P1
                    actualProg:4, // P2
                    expectedCost:4, // P3
                    actualCost:4 // P4
                },
                outcomeText: "You inspected the plane twice, and found nothing.",
                next: 5 // id of next question
            },
            {
                optionID:11,
                questionID: 3,//current question ID
                description: "Make three inspections, one at the start, one mid-way through, and one at the end of development, more thorough but conveys less trust.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:3, // R2
                    internalRep:0, // R3
                    voardRep:-5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "Inspecting three times gives the public more confidence about the plane, but makes you very exhausted.",
                next: 4 // id of next question
            },

            // Q4
            {
                optionID:12,
                questionID: 4,//current question ID
                description: "Ok.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:4, // P1
                    actualProg:3, // P2
                    expectedCost:4, // P3
                    actualCost:5 // P4
                },
                outcomeText: "The development still needs to keep going.",
                next: 5 // id of next question
            },

            // Q5
            {
                optionID:13,
                questionID: 5,//current question ID
                description: "Report all issues and concerns, fixes to address both these issues will delay the project by three weeks, one week for the UI, two weeks for the autopilot.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
                next: 6 // id of next question
            }, // TODO option13
            {
                optionID:14,
                questionID: 5,//current question ID
                description: "Report the user interface problems, fixes will delay the project by one week",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:4, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "It must be the user interface problems. Not a big deal.",
                next: 7 // id of next question
            },
            {
                optionID:15,
                questionID: 5,//current question ID
                description: "Report the autopilot mechanism concerns, these may be ignored, but if fixed will delay the project by two weeks",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "Whether these concerns will be fixed or not, you fulfill your responsibilities.",
                next: 6 // id of next question
            }, // TODO option 15 Q5
            {
                optionID:16,
                questionID: 5,//current question ID
                description: "Report no issues, the project will continue unhindered",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg: 5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "You think there is no issue.",
                next: 7 // id of next question
            },

            // Q6
            {
                optionID:17,
                questionID: 6,//current question ID
                description: "Ignore the autopilot mechanism issues, since they cause no problems once understood, project continues unhindered save the one week delay",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:4, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 7 // id of next question
            },
            {
                optionID:18,
                questionID: 6,//current question ID
                description: "Act on the concerns and re-structure the mechanisms, this will delay the project by three weeks total.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:2, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "Major bug fixed.",
                next: 7 // id of next question
            },

            // Q7
            {
                optionID:19,
                questionID: 7,//current question ID
                description: "Implement a comprehensive version redundancy scheme, this will greatly increase the cost of the project.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:9 // P4
                },
                outcomeText: "",
                next: 8 // id of next question
            },
            {
                optionID:20,
                questionID: 7,//current question ID
                description: "Implement a single program redundancy scheme, this will slightly increase the cost of the project, but isn't as thorough a solution.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText: "",
                next: 8 // id of next question
            },
            {
                optionID:21,
                questionID: 7,//current question ID
                description: "Do not implement, trust in the reliability of the software team.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 8 // id of next question
            },

            // Q8
            {
                optionID:22,
                questionID: 8,//current question ID
                description: "Be optimistic, state that the new plane design will outperform any competitor in the market, this will lead to good PR and reputation.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:10, // R1
                    regulatorRep:5, // R2
                    internalRep:10, // R3
                    voardRep:10,// R4, CEO only
                    enviroRep:5, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 9 // id of next question
            },
            {
                optionID:23,
                questionID: 8,//current question ID
                description: "Be neutral, state that the new plane design will match the competitor, this is a weaker statement than ones in the past, and will slightly affect reputation.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-3, // R1
                    regulatorRep:-3, // R2
                    internalRep:-5, // R3
                    voardRep:-5,// R4, CEO only
                    enviroRep:-3, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 9 // id of next question
            },
            {
                optionID:24,
                questionID: 8,//current question ID
                description: "Be pessimistic, state that it is difficult to know how well the plane design will go compared to competitors, this will set public expectations very low, but will greatly affect reputation.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-5, // R1
                    regulatorRep:-5, // R2
                    internalRep:-10, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:-5, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 9 // id of next question
            },

            // Q9
            {
                optionID:25,
                questionID: 9,//current question ID
                description: "Commit to reducing plane emissions, this will greatly enhance public reputation since no competitor has done this, but this will lead to a 3 week delay due to having to re-design.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:10, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:20, // R5

                    expectedProg:5, // P1
                    actualProg:2, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "Development continues...",
                next: 10 // id of next question
            },
            {
                optionID:26,
                questionID: 9,//current question ID
                description: "Commit to match emissions of any competitor, this is the anticipated outcome, but may be inadvertently broken by a new competitor model.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-3, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:-5, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "Development continues...",
                next: 10 // id of next question
            },
            {
                optionID:27,
                questionID: 9,//current question ID
                description: "State that emissions targets are not the focus of the company, this will greatly upset environmental lobbyists, but at the same time takes away any pressure to hit targets, and will put the project 2 weeks ahead of time.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-3, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:-5, // R5

                    expectedProg:5, // P1
                    actualProg:7, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "Development continues...",
                next: 10 // id of next question
            },

            // Q10
            {
                optionID:28,
                questionID: 10,//current question ID
                description: "Let the software team know about the issue, this will initiate a full group discussion about what to do next.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 12 // id of next question
            },
            {
                optionID:29,
                questionID: 10,//current question ID
                description: "Ignore the issue, the others will not be informed of the issue.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 14 // id of next question
            },
            {
                optionID:30,
                questionID: 10,//current question ID
                description: "Send information about the issue to the analytics department, to assess the probability of the auto-pilot issue leading to an actual problem, this will also not inform the others but will incur extra company costs.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 11 // id of next question
            },

            // Q11
            {
                optionID:31,
                questionID: 11,//current question ID
                description: "Ignore the issue, the project will continue unhindered.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:6 // P4
                },
                outcomeText: "",
                next: 14 // id of next question
            },
            {
                optionID:32,
                questionID: 11,//current question ID
                description: "Let the software team known about the issue, this will initiate a full group discussion about what to do next.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:1 // P4
                },
                outcomeText: "",
                next: 12 // id of next question
            },

            // Q12
            {
                optionID:33,
                questionID: 12,//current question ID
                description: "Ignore the issue, the project will continue unhindered.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 14 // id of next question
            },
            {
                optionID:34,
                questionID: 12,//current question ID
                description: "Commit fully to fixing the auto-pilot malfunction, this will delay the project by two weeks, and incur extra costs.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:3, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText: "Major bug fixed.",
                next: 14 // id of next question
            },
            {
                optionID:35,
                questionID: 12,//current question ID
                description: "Send the issue to the FAA for a comprehensive risk review, this will not commit the company to fixing the issue, but will incur extra costs",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:1 // P4
                },
                outcomeText: "",
                next: 13 // id of next question
            },

            // Q13
            {
                optionID:36,
                questionID: 13,//current question ID
                description: "Fix the issue, and inform the FAA of the change, this will delay the project by two weeks.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:3, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText: "Major bug fixed.",
                next: 14 // id of next question
            },
            {
                optionID:37,
                questionID: 13,//current question ID
                description: "Do not fix the issue, and inform the FAA of the change, the project will remain on-time.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 14 // id of next question
            },

            // Q14
            {
                optionID:38,
                questionID: 14,//current question ID
                description: "Grant these additional funds, this will incur some additional project costs.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText: "",
                next: 15 // id of next question
            },
            {
                optionID:39,
                questionID: 14,//current question ID
                description: "Do not grant the funds, the project will continue unhindered.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 15 // id of next question
            },

            // Q15
            {
                optionID:40,
                questionID: 15,//current question ID
                description: "Grant the 15% raise to both departments, morale within both departments will skyrocket as both departments will feel fairly compensated, but this will incur an extremely large, and possibly crippling, additional cost.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:10, // R1
                    regulatorRep:0, // R2
                    internalRep:20, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:9, // P2
                    expectedCost:5, // P3
                    actualCost:13 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },
            {
                optionID:41,
                questionID: 15,//current question ID
                description: "Grant the 15% raise only to aeronautical, costs will be halved compared to A, but benefits will be exclusive to the aeronautical team",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:10, // R1
                    regulatorRep:0, // R2
                    internalRep:5, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:6, // P2
                    expectedCost:5, // P3
                    actualCost:9 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },
            {
                optionID:43,
                questionID: 15,//current question ID
                description: "Grant the 15% raise only to software, costs will be halved compared to A, but benefits will be exclusive to the software team.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:10, // R1
                    regulatorRep:0, // R2
                    internalRep:5, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:6, // P2
                    expectedCost:5, // P3
                    actualCost:9 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },
            {
                optionID:44,
                questionID: 15,//current question ID
                description: "Grant a 10% raise to both departments, this is less than what was asked for, and more than what the budget allows.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:5, // R3
                    voardRep:-5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:8, // P2
                    expectedCost:5, // P3
                    actualCost:9 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },
            {
                optionID:45,
                questionID: 15,//current question ID
                description: "Grant a 5% raise to both departments, this is what was originally planned",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },
            {
                optionID:46,
                questionID: 15,//current question ID
                description: "Grant a 5% raise to both departments, this is what was originally planned",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:-20, // R3
                    voardRep:5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:-1, // P2
                    expectedCost:5, // P3
                    actualCost:1 // P4
                },
                outcomeText: "",
                next: 16 // id of next question
            },

            // Q16
            {
                optionID:47,
                questionID: 16,//current question ID
                description: "Skip the inspection, this will save two weeks worth of time and costs and thus will be very beneficial to the company.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:7, // P2
                    expectedCost:5, // P3
                    actualCost:3 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },
            {
                optionID:48,
                questionID: 16,//current question ID
                description: "Perform a shorter one-week inspection, this will cover the 'big picture' of the plane design, but won't go into the same depth as a two-week inspection.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:6, // P2
                    expectedCost:5, // P3
                    actualCost:4 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },
            {
                optionID:49,
                questionID: 16,//current question ID
                description: "Perform the two-week inspection, this is a standard-issue inspection that will consider details, but won't go into thorough cross-testing.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },
            {
                optionID:50,
                questionID: 16,//current question ID
                description: "Perform a four-week inspection, this is a comprehensive inspection that will guarantee the quality of the plane is up to standard, and also consider business but it will delay the project.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:3, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText: "",
                next: 17 // id of next question
            },

            // Q17
            {
                optionID:51,
                questionID: 17,//current question ID
                description: "Comprehensive test reform, to guarantee that maximum lessons are learnt from the mistakes of the past, but this will delay the project by three weeks, keep in mind that these reforms can also be performed after the project.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },
            {
                optionID:52,
                questionID: 17,//current question ID
                description: "Qualitative test reform, reforms will happen in an informal manner, which will cause no delay but incur some training costs.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:1 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },
            {
                optionID:53,
                questionID: 17,//current question ID
                description: "No changes, reform will occur after the project, which will allow the project to proceed as usual, save the bug fixes.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:0, // P1
                    actualProg:0, // P2
                    expectedCost:0, // P3
                    actualCost:1 // P4
                },
                outcomeText: "",
                next: 18 // id of next question
            },

            // Q18
            {
                optionID:54,
                questionID: 18,//current question ID
                description: "Report the issue, the development team will act on it, causing delays to the project by two months.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:-8, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 20 // id of next question
            },
            {
                optionID:55,
                questionID: 18,//current question ID
                description: "Do not report the issue",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 20 // id of next question
            },

            // Q19

            // Q20
            {
                optionID:56,
                questionID: 20,//current question ID
                description: "Do not implement the re-design, this will save costs and time.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: 21 // id of next question
            },
            {
                optionID:57,
                questionID: 20,//current question ID
                description: "Implement the re-design, this will displease the executive team due to the delay in spite of performance benefits",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:9, // P2
                    expectedCost:5, // P3
                    actualCost:9 // P4
                },
                outcomeText: "",
                next: 21 // id of next question
            },

            // Q21
            {
                optionID:58,
                questionID: 21,//current question ID
                description: "Choose a cheaper, less established, manufacturer, this will cut costs substantially, but this is not a manufacturer used before by the company",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:0 // P4
                },
                outcomeText: "",
                next: 22 // id of next question
            },
            {
                optionID:59,
                questionID: 21,//current question ID
                description: "Remain with the same manufacturer as before, minimal risk, and minor loyalty discounts",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:4 // P4
                },
                outcomeText: "",
                next: 22 // id of next question
            },
            {
                optionID:60,
                questionID: 21,//current question ID
                description: "Choose a premium manufacturer, quite risky since again not used before, but an extremely good track record and has shown initiative with manufacturing, also more expensive",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:10, // P1
                    actualProg:10, // P2
                    expectedCost:10, // P3
                    actualCost:13 // P4
                },
                outcomeText: "Your manufacturer has identified a major issue with the auto-pilot mechanisms of the plane through its own testing streams, they will refuse to manufacture the plane until it is fixed to protect their reputation. This will incur extra costs.",
                next: 23 // id of next question
            },

            // Q22, 22A merged to 21C outcome
            {
                optionID:61,
                questionID: 22,//current question ID
                description: "Yes, costs are cut, but reputation of the company will take a hit",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-5, // R1
                    regulatorRep:-5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:2 // P4
                },
                outcomeText:"",
                next: 23 // id of next question
            },
            {
                optionID:62,
                questionID: 22,//current question ID
                description: "No, costs will remain the same, but the company's commitment to quality is noted.",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:5, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:2 // P4
                },
                outcomeText:"",
                next: 23 // id of next question
            },

            // Q23
            {
                optionID:63,
                questionID: 23,//current question ID
                description: "A thorough investigation into the 2% issues, fixes to issues identified here will substantially delay the project and incur big costs, since it involves complete re-design, but will fix any issues no matter how significant or otherwise",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:5, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:-3, // P2
                    expectedCost:5, // P3
                    actualCost:13 // P4
                },
                outcomeText:"",
                next: 24 // id of next question
            },
            {
                optionID:64,
                questionID: 23,//current question ID
                description: "A brief investigation into the 2% issues, this will consider the issues found here, but will delay the project quite a bit less, since there is no re-design, and should still fix most issues prevalent in the plane",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:5, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:2, // P2
                    expectedCost:5, // P3
                    actualCost:8 // P4
                },
                outcomeText:"",
                next: 24 // id of next question
            },
            {
                optionID:65,
                questionID: 23,//current question ID
                description: "Do not pursue any fixes, if the issues are trivial, which experts consider to be likely, this will save substantial time and costs",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:5, // R1
                    regulatorRep:5, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:8, // P2
                    expectedCost:5, // P3
                    actualCost:2 // P4
                },
                outcomeText:"",
                next: 24 // id of next question
            },

            // Q24
            {
                optionID:66,
                questionID: 24,//current question ID
                description:"Skip the inspection, this will save two weeks worth of time and costs and thus will be very beneficial to the company",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:7, // P2
                    expectedCost:5, // P3
                    actualCost:3 // P4
                },
                outcomeText:"",
                next: 25 // id of next question
            },
            {
                optionID:67,
                questionID: 24,//current question ID
                description:"Perform a shorter one-week inspection, this will cover the 'big picture' of the plane design, but won't go into the same depth as a two-week inspection",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:6, // P2
                    expectedCost:5, // P3
                    actualCost:4 // P4
                },
                outcomeText:"",
                next: 25 // id of next question
            },
            {
                optionID:68,
                questionID: 24,//current question ID
                description:"Perform the two-week inspection, this is a standard-issue inspection that will consider details, but won't go into thorough cross-testing",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText:"",
                next: 25 // id of next question
            },
            {
                optionID:69,
                questionID: 24,//current question ID
                description:"Perform a six-week inspection, this is a comprehensive inspection that will guarantee the quality of the plane is up to standard, and also consider business but it will delay the project by a huge amount",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:-1, // P2
                    expectedCost:5, // P3
                    actualCost:11 // P4
                },
                outcomeText:"",
                next: 25 // id of next question
            },

            // Q25
            {
                optionID:70,
                questionID: 25,//current question ID
                description:"Utilize to its full extent, this method involves some bribery and under-the-table dealings to develop a competitive advantage over rivals, but will greatly affect the company's reputation since word will get out",
                consequences: {
                    contracts:15, //F1
                    compContracts:-15, // F2
                    shares:15,// F3

                    publicRep:-20, // R1
                    regulatorRep:-20, // R2
                    internalRep:-10, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText:"",
                next: 26 // id of next question
            },
            {
                optionID:71,
                questionID: 25,//current question ID
                description:"Utilize to a legal extent, this is an aggressive method that is similar to A, but does not enter illegal territory, but because of this will be far less effective, yet still useful",
                consequences: {
                    contracts:3, //F1
                    compContracts:-3, // F2
                    shares:5,// F3

                    publicRep:-10, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:7 // P4
                },
                outcomeText:"",
                next: 26 // id of next question
            },
            {
                optionID:72,
                questionID: 25,//current question ID
                description:"Utilize to a reasonable extent, this is a standard method where competitiors and the public will see as 'fair', still incurs costs, but can be eclipsed by competitors methods if they decide to be aggressive",
                consequences: {
                    contracts:-5, //F1
                    compContracts:5, // F2
                    shares:-5,// F3

                    publicRep:5, // R1
                    regulatorRep:5, // R2
                    internalRep:5, // R3
                    voardRep:-5,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:6 // P4
                },
                outcomeText:"",
                next: 26 // id of next question
            },
            {
                optionID:73,
                questionID: 25,//current question ID
                description: "Do not utilize, this will save two weeks of costs, and will be great for reputation, but will hinder the competitive effort",
                consequences: {
                    contracts:-20, //F1
                    compContracts:20, // F2
                    shares:-10,// F3

                    publicRep:15, // R1
                    regulatorRep:15, // R2
                    internalRep:-5, // R3
                    voardRep:-15,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:3 // P4
                },
                outcomeText:"",
                next: 26 // id of next question
            },

            // Q26
            {
                optionID:74,
                questionID: 26,//current question ID
                description: "Yes, this will incur costs, but will almost certainly lead to a competitive victory ",
                consequences: {
                    contracts:25, //F1
                    compContracts:-25, // F2
                    shares:20,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:0,// R4, CEO only
                    enviroRep:20, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:8 // P4
                },
                outcomeText: "",
                next: 27 // id of next question
            },
            {
                optionID:75,
                questionID: 26,//current question ID
                description: "No, this will upset the executive board and reduce competitive advantage, but will save some costs",
                consequences: {
                    contracts:-5, //F1
                    compContracts:5, // F2
                    shares:-3,// F3

                    publicRep:0, // R1
                    regulatorRep:0, // R2
                    internalRep:0, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:0, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:2 // P4
                },
                outcomeText: "",
                next: 27 // id of next question
            },

            // Q27
            {
                optionID:76,
                questionID: 27,//current question ID
                description: "Commit to a full investigation into the issue, this is considered by most experts to be a waste since the pilots appear to be the cause of the crash, this will incur substantial, possibly crippling, costs, but will please the FAA",
                consequences: {
                    contracts:-10, //F1
                    compContracts:10, // F2
                    shares:-10,// F3

                    publicRep:-15, // R1
                    regulatorRep:10, // R2
                    internalRep:-10, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:-10, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:15 // P4
                },
                outcomeText: "",
                next: -1 // id of next question
            },
            {
                optionID:77,
                questionID: 27,//current question ID
                description: "Perform a standard investigation into the issue, this is expected by the FAA, and will help identify any fundamental issue with the plane, without leading to large cost overheads",
                consequences: {
                    contracts:-10, //F1
                    compContracts:10, // F2
                    shares:-10,// F3

                    publicRep:-15, // R1
                    regulatorRep:5, // R2
                    internalRep:-10, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:-10, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:8 // P4
                },
                outcomeText: "",
                next: -1 // id of next question
            },
            {
                optionID:78,
                questionID: 27,//current question ID
                description: "Perform no investigation, relying on the comprehensive investigations performed by others, this leads to no costs, and operations will continue, in fact, this will prevent loss of contracts as clients will be more confident",
                consequences: {
                    contracts:0, //F1
                    compContracts:0, // F2
                    shares:0,// F3

                    publicRep:-15, // R1
                    regulatorRep:10, // R2
                    internalRep:-10, // R3
                    voardRep:-10,// R4, CEO only
                    enviroRep:-10, // R5

                    expectedProg:5, // P1
                    actualProg:5, // P2
                    expectedCost:5, // P3
                    actualCost:5 // P4
                },
                outcomeText: "",
                next: -1 // id of next question
            }
        ]
    };