const mongoose = require('mongoose');
const Role = mongoose.model('Role');

const getRole = function (req, res, next) {
    Role.find()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(error => {
            res.status(400).send(error);
        })
};

const newRole = function (req, res) {
    var r = new Role({
        name: req.body.name
    })
    r.save()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(error => {
            res.status(400).send(error);
        });
};

const getRolesIntro = function (req, res) {
    //const roleID = Number(req.body.roleID);
    const roleID = Number(req.query.roleID);
    if (roleID==0){
        res.status(200).json({
            "goal":"The game sets itself at the beginning of 2011. A month earlier, Airbus, the main competitor of Boeing launched the Airbus A320 family that delivered fuel burn and operating efficiency outcomes far superior to existing Boeing models in the market (that is, it uses less oil to run longer distances), the resultant orders for these new planes from many established Boeing partners such as American Airlines has led to substantial shareholder pressure and reduction in value of Boeing stock. The board of directors, dissatisfied with these results has taken the drastic action of firing the existing executive in hopes of finding a new one who can turn their dire situation around.  As the new Boeing Executive, you join the company with the assignment of leading a new development effort for a new aeroplane family, the Boeing 737 MAX. The board of directors, shareholders, and existing management have made it very clear that you need to accomplish: a rapid deployment of a superior plane that would reclaim lost market share from Airbus. Additionally, your goals are to maintain the company's reputation and ensure the satisfication of the general board."
        })
    }else if(roleID==1){
        res.status(200).json({
            "goal":"Still relatively inexperienced as an Aeronautical Engineer, you have worked with Boeing for 3 years now but for the most part had found yourself floundering with relatively insignificance maintenance tasks and trivial calculations. You hoped to work your way up the engineering ladder to a more senior position and salary grade. With the advent of the 737 MAX project, you have finally been given a managerial role in the technical/engineering sector of development, and will work closely with many types of engineers. You know that this is the opportunity you have been waiting for, and are eager to make the most of it. You are the project lead for the 737 MAX project, and is responsible for the continuous and stable operation of the 737 MAX into the future."
        })
    }else if(roleID==2){
        res.status(200).json({
            "goal":"As Software Developer, you are a recent university graduate, and for you, working at Boeing is the dream job. You were recently informed by a manager thatyou are to work with a team of other, relatively senior developers on a new, highly confidential Boeing 737 MAX project; an extremely lucrative project that placed large responsibility on the SD, which in turn gave a once-in-a-lifetime opportunity for a rapid rise through the company ranks. You are to take responsibility for the quality of software on the 737 MAX, but must also ensure the project is always on track to meet budget and time constraints."
        })
    }else if(roleID==3){
        res.status(200).json({
            "goal":"The Federal Aviation Administration is a government body responsible for the safety of civil aviation in the country, and upholds a high reputation and standards around the world. As an FAA Official, you feel a strong social responsibility and the passion for serving the people, ensuring the safety of people's lives. You liase with Boeing and are aware of the competitive pressures in the market. You want to maintain a good, working relationship with Boeing, as this ensures you can carry out your job effectively - however this can become under strain if you cause waves or cause issues that impact Boeing's profitability."
        })
    }else if(roleID==4){
        res.status(200).json({
            "goal":"As a Boeing Pilot, you have worked for Boeing for 12 years, immensely loyal to Boeing and what it stands for. You are somewhat disturbed by the news of a new Boeing Exectuvie being appointed, worried that the upheaval of the company might change it for the worse. Having retired from commercial flight in 2008, you have stepped into a testing role as it reduced the stress of travel and seemed a natural transition into retirement, which was expected to be in around 8 years from then. A relatively uninspiring job, you were delighted to hear that he/she would work on the 737 MAX project, where you would get the opportunity to test new and innovative plane designs; and leverage your commercial flying experience to comment on designs and software models from a practical perspective. "
        })
    } else {
        res.status(400).send("Error role");
    }
};

module.exports = {
    getRole,
    newRole,
    getRolesIntro,
};


