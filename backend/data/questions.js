module.exports = {
    "questions": [
        {
            questionID: 1,
            background: "The five of you have been selected as influential members of a project team working on an innovative new plane design, dubbed the 'Vision 777'. Each of you have joined the project with a unique backstory, and more importantly, a unique set of goals that each of you must ensure are fulfilled by game's end. These goals will sometimes be fairly clear, and other times will not be known until the very end of the project. The executive board have allocated $10 billion toward the project, and has stipulated a hard deadline of two years from today to complete it. Together, and sometimes apart, you will all make decisions that ultimately determine the fate of the project, as well as yourselves. It is up to you to work together as well as apart, using the information and goals you have been given, to win.",
            question: "The five of you are currently in a meeting to discuss the project and the focus of the team. Which area will the team prioritize:",
            options: [1, 2, 3, 4, 5],
            roleInfo: ["Your priority is to deliver the project on-budget and on-time, otherwise you will likely lose your job",
                "Your priority is to deliver a good quality product on-time.",
                "Your priority is to deliver a good quality product on-time.",
                "Your priority is to deliver a good quality product on-time.",
                "Your priority is to deliver a good quality product."], // 0: executive 1: developer 2: pilot 3: engineer 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 2,
            background: "With the focus of the project team set, development of some initial concept designs has begun. Things are currently proceeding smoothly though this is to be expected this early on.",
            question: "As a test pilot, your responsibility is to take a practical perspective on the development of the plane. You however, have been given the decision to make as to the extent of initial involvement you and other test pilots will have in the software component of the plane. As test pilots, you all will naturally spend significant time with cockpit and interface design, so this would be an extra overhead.",
            options: [6, 7, 8],
            roleInfo: ["A 1-point difference between your expected and actual progress/costs represents one week.",  // 0: executive
                "It is important to maintain a close relationship with the FAA",  // 1: developer
                "Reputation isn't important until the plane is actually released, all values of the company are out of a possible 100.",  // 2: pilot
                "If competitor airline contracts with airlines exceeds 60, the company will fail.",  // 3: engineer
                "You are employed by the company, but your responsibility is to carry out the intents of the FAA."], // 4: FAA
            duration: 20,
            weights: [0, 0, 100, 0, 0], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        // TODO
        {
            questionID: 3,
            question: "As an FAA official, you are tasked with scheduling inspections to ensure the plane is developed up to a high quality standard. You have worked with the company for many years, and know that they have a history of reliability and high performance. You are to decide on a suitable number of inspections, each inspection incurs additional time and financial costs for the company, so choose wisely.",
            options: [9, 10, 11],
            duration: 20,
            weights: [0, 0, 0, 0, 100], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: []
        },
        {
            questionID: 4,
            question: "The FAA official has deemed it prudent to commence an official inspection of the project now now. An official inspection takes one week long, and incurs time and financial costs for the company, essentially delaying the project.", // question
            options: [12],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 5,
            background: "Development has continued, and now concept designs are beginning to be converted into prototype designs and software development has now also begun in earnest. Quite a few intriguing issues have popped up that require attention however.",
            question: "You have recently performed tests on initial concept software for the plane, you were overall very satisfied with the software of the plane, but you found some of the user interfaces slightly awkward, and some of the autopilot mechanisms were a bit confusing, but once you understood them there was no issue. What do you report back?", // question
            options: [13, 14, 15, 16],
            duration: 20,
            weights: [0, 0, 100, 0, 0], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 6,
            question: "The test pilot has pointed an issue with the initial concept software with regards to the autopilot mechanisms, which the test pilot found confusing at times, but once understood wasn't an issue. You are now to decide on what to do.", // question
            options: [17, 18],
            duration: 20,
            weights: [45, 0, 15, 40, 0], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 7,
            question: "The executive team has proposed the implementation of software version redundancy procedures to ensure protection from any bugging of plane software. The software team are confident that plane software will not bug, and have written comprehensive test cases to make sure of this. Any redundancy schemes would have to rely upon outsourcing, which is expensive.", // question
            options: [19, 20, 21],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 8,
            background: "With these decisions put in place, development is beginning to mature, and a full-fledged plane design is now coming to fruition. It is still a long way until the project will be complete, but things are looking relatively smooth. Most discussion this round will focus on developing the relationships of the company",
            question:"The media have got in contact with the project team to discuss the new plane design, and has asked the team for a statement regarding the quality of the plane in comparison to its competitors. The company has historically outperformed its competitors but a recent competitor model has put some pressure on the company to deliver a new, high-quality model. Most experts that have reviewed initial concept sketches have been optimistic about the performance of the new plane.", // question
            options: [22, 23, 24],
            roleInfo: ["It is of utmost importance that company reputation is high in all areas, current reputations are all at 50.",  // 0: executive
                "Internal reputation represents the feelings of teams under the guidance of the five of you, towards you, if this drops too low, project efficiency will lower.",  // 1: developer
                "Make sure any promises that the company makes are realistic.",  // 2: pilot
                "Designing a plane to reduce the environmental footprint will not improve the performance of the plane from a commercial context.",  // 3: engineer
                "Your job is to ensure that FAA reputation is maximized."], // 4: FAA
            duration: 20,
            weights: [40, 15, 15, 15, 15], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 9,
            question: "Environmental lobbies have asked the project team to make a commitment to reduce the environmental footprint of the new plane. Current designs seek to match previous iterations for environmental efficiency, so such a commitment will lead to some overhead in terms of plane re-design, but anything less will be perceived as insufficient by the public and will lead to some reputation hits.", // question
            options: [25, 26, 27],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 10,
            background: "Development continues, and the plane design has now been subject to rigorous testing from all different departments within the company. This has given rise to several concerns from these departments, since each department wants to ensure an extremely high quality of their respective part of the plane design. It is noted that departments have frequently noticed issues that testing processes failed to identify, but have been effective in fixing them.",
            question:"You have noticed an issue with the auto-pilot of the plane, in particular it sometimes seizes control from the pilot when not intended to. However, you formally approved the software design of the auto-pilot a couple of weeks ago, so reporting this now will likely extremely displease both the software team and management.", // question
            options: [28, 29, 30],
            roleInfo: ["No info for you",  // 0: executive
                "No info for you",  // 1: developer
                "The auto-pilot flaw that you missed wasn't your fault, but it does compromise your position in the eyes of the company slightly.",  // 2: pilot
                "Things have gone quite smoothly in your department thus far.",  // 3: engineer
                "No info for you"], // 4: FAA
            duration: 20,
            weights: [0, 0, 100, 0, 0], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 11,
            question: "The analytics department have got back to you (TP) and have stated that the 'conditions required for the auto-pilot malfunction to occur are very unlikely to occur, if the malfunction occurs we are unsure of the possible consequences'. ",
            options: [31, 32],
            duration: 20,
            weights: [0, 0, 100, 0, 0], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 12,
            question: "The pilot (TP) has brought up a minor auto-pilot malfunction, where the auto-pilot sometimes seizes control from the pilot when not intended to. ",
            options: [33, 34, 35],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 13,
            question: "The FAA has investigated the issue and has deemed it a minor safety concern, thanks the company for identifying the issue, but will now not certify the plane as safe until it is resolved.", // question
            options: [36, 37],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 14,
            question: "The aeronautical team has come to you with a proposal to request additional funding for the aeronautical sector of the plane, this is in response to a few late design changes that have been made to the plane, this funding would be utilized to perform some further performance tests. These design changes are not significant, and have been deemed inconsequential by experts, and initial testing was successful.", // question
            options: [38, 39],
            duration: 20,
            weights: [33.3, 0, 0, 33.3, 33.3], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 15,
            question: "The employee union has come to the executive team with a proposal. Owing to the highly intense nature of project work, the software and aeronautical teams have requested substantial raises to their pay to compensate. The board provided a small figure of money to provide a 5% raise to all project employees in anticipation, however, the union has demanded a 15% raise.", // question
            options: [40, 41, 43, 44, 45, 46],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 16,
            question: "It is time for the mid-project FAA inspection of the plane design. You are in charge of the thoroughness of this review in terms of cost and time, it is important to keep in mind the current position of the company, as well as your obligations as an FAA official. Which type of inspection will you arrange?" // context
            , // question
            options: [47, 48, 49, 50],
            duration: 20,
            weights: [0, 0, 0, 0, 100], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 17,
            question: "The comprehensive FAA inspection discovered a potentially fatal bug in the autopilot crash recovery software, it was found that testing processes put in place to detect these bugs in software were outdated and poorly executed. Fixing the bug will delay the project by a further week, but has prevented a potentially disastrous outcome. But what changes to software testing will be made?" + // context
                "", // question
            options: [51, 52, 53],
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 18,
            background: "Development of the plane is now beginning to reach its conclusion, final plane designs have now been proposed and are being tested by the test pilot team. As a designated 'half-way' point, the executive team have deemed it prudent to have a serious discussion regarding the focuses of the group going into future development.",
            question: "You have just discovered that the autopilot issues that you thought earlier were of relatively minor consequence turned out to be substantially worse than previously thought. You now understand that the issues can potentially seize control from the pilot and act unexpectedly during critical take-off/landing periods. However, you have discovered this extremely late, and reporting it will delay the project by two months. You will also almost certainly lose your job, and thus fail your objectives if you report it now.", // question
            options: [54, 55],
            roleInfo: ["Make sure that the project does not fall too far behind schedule.",  // 0: executive
                "The development team are beginning to feel the pressure.",  // 1: developer
                "No info for you",  // 2: pilot
                "Your department is vastly outperforming the others.",  // 3: engineer
                "This is a very dangerous time for you, proceed with caution."], // 4: FAA
            duration: 20,
            weights: [0, 0, 100, 0, 0], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 20,
            question: "The aeronautical team has discovered a new aerodynamics system that could potentially lead to substantial quality improvements in the plane, in short, the plane would be a guaranteed market leader for fuel efficiency as well as maximum speed.  As development is in a mature stage however, re-designing the plane to accommodate this will delay the project by a month and incur some additional cost." + // context
                "", // question
            options: [56, 57],
            duration: 20,
            weights: [0, 0, 0, 100,], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 21,
            background: "Development of the initial plane has completed, and manufacturing has begun.",
            question: "It is now time to roll out the plane design to small-batch manufacturers, so commercial readiness testing can begin. As a group, it is time to decide what kind of manufacturer the company will align with.", // question
            options: [58, 59, 60],
            roleInfo: ["No info for you",  // 0: executive
                "Development of plane software will continue, since this is done independently of the planes themselves.",  // 1: developer
                "The cheaper manufacturer has a solid track record with smaller airlines.",  // 2: pilot
                "Your department will work very closely with the manufacturing department.",  // 3: engineer
                "No info for you."], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 22,
            background: "Manufacturing is now well and truly underway, with real-life testing anticipated in a few weeks time.",
            question: "Your manufacturer has identified a way to cut costs substantially in manufacturing, with a small performance loss to the aerodynamic performance of the plane, do you decide to do it?", // question
            options: [61, 62],
            roleInfo: ["No info for you",  // 0: executive
                "Bug fixing and code development is occurring smoothly.",  // 1: developer
                "A critical stage for your role is coming up in a few weeks.",  // 2: pilot
                "It is important to strike a balance between quality and time/cost.",  // 3: engineer
                "No info for you."], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 23,
            background: "Real-life pilot testing has commenced. The results are as follows: 28% of pilots find the plane to be extremely good to control, 65% find the plane to be good/satisfactory to control, 5% pointed out a few minor issues that have since been easily fixed, and 2% had one or more moments where they felt the plane to be awkward to use, none found the plane to be difficult to control however.",
            question: "Based on this information, what will the team do prior to the second wave of manufacturing?", // question
            options: [63, 64, 65],
            roleInfo: ["A re-design of anything at this point will set-back the project by a substantial amount, most likely by too much to recover from.",  // 0: executive
                "Most minor issues identified concerned the software, but were fairly routine fixes.",  // 1: developer
                "If issues have been acted on in the past, perhaps the awkward moments aren't dangerous.",  // 2: pilot
                "No issues were found with your aspects of the plane.",  // 3: engineer
                "The FFA obliges you to investigate in-depth, any possible issues with the plane."], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 24,
            background: "The 2nd and final stage of manufacturing is in progress, and it is thus now time for the final (and possibly, only) FAA inspection of the plane. Similar to the mid-point inspection, it is up to the team to decide on the thoroughness of this inspection.",
            question: "How should the company approach the upcoming inspection?", // question
            options: [66, 67, 68, 69],
            roleInfo: ["A re-design of anything at this point will set-back the project by a substantial amount, most likely by too much to recover from.",  // 0: executive
                "Most minor issues identified concerned the software, but were fairly routine fixes.",  // 1: developer
                "The results of this inspection are independent of your testing done a few weeks ago.",  // 2: pilot
                "This final inspection will not identify anything new that was missed in the middle inspection for your department, if you had one.",  // 3: engineer
                "The FFA obliges you to perform a two-week inspection."], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 25,
            background: "It is time for the commercial release and distribution of the plane, the company, being as big as it is, has very deep networks in the industry and can leverage them to garner a competitive market advantage, but to what extent?",
            question: "To what extent should the company leverage it's networks to achieve a competitive advantage?", // question
            options: [70, 71, 72, 73],
            roleInfo: ["It is industry-standard to work 'under the table', and this is perfectly legal, though morally objectionable.",  // 0: executive
                "No info for you",  // 1: developer
                "No info for you",  // 2: pilot
                "No info for you",  // 3: engineer
                "No info for you"], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 26,
            background: "Deals have now been struck with certain airlines, and the planes are ready to take-off on their maiden voyages. However, there are many contracts still in close contention, that if acquired will greatly improve the competitive situation of the company. There is an option to utilize third-parties, that can perform corporate espionage on behalf of the company. There is almost zero chance of this being traced back to the company, and the executive team has encouraged it.",
            question: "Will the company employ these tactics?", // question
            options: [74, 75],
            roleInfo: ["As the executive team has stipulated this, they will approve, plus it helps your project out-compete competitors.",  // 0: executive
                "No info for you",  // 1: developer
                "No info for you",  // 2: pilot
                "No info for you",  // 3: engineer
                "ou are obliged as FAA to object, but they will not know if you do not."], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        },
        {
            questionID: 27,
            background: "A serious event has come to the attention of the company. Two days ago, one of the new planes flying commercial tragically crashed, resulting in the deaths of all onboard. An investigative team has come to the following conclusions.\n" +
                "1. The pilots appear to have lost control of the plane at some point, but this was unlikely to have been the cause behind the crash\n" +
                "2. Issues appear to have been due to some fault of the pilots, where they didn't follow guidelines in a manner extremely unlikely to be replicated\n" +
                "3. All pieces of the plane were in fine working order until the crash\n" +
                "This, of course, has affected corporate reputation in a negative way, but the executive team believes it can be salvaged since it appears that the accident was a freak one, there was even a mention of the possibility of foul play onboard the plane.",
            question: "How will the team react?", // question
            options: [76, 77, 78],
            roleInfo: ["Whilst a bad outcome, most airlines have belief from their experiences that the plane is perfectly fine and have pledged to remain in contract",  // 0: executive
                "Plane software bug logs show some minor warnings, but none of these are attributable to the crash",  // 1: developer
                "During testing, you did notice some awkward features of the plane, but you never felt threatened of a crash",  // 2: pilot
                "The aero of the plane was fine, so your department was not the cause of this accident.",  // 3: engineer
                "The FAA has deemed the crash as an 'accident', but has also suggested a thorough investigation regardless"], // 4: FAA
            duration: 20,
            weights: [20, 20, 20, 20, 20], // sum to 100
            optionsFinalWeights: [0, 0, 0], // amount should be consistent with the amount of options
            readyCount: 0,
            readyPlayer: [],
            votedCount: 0,
            votedPlayer: [],
        }
    ]
};