const userInfo = document.querySelector("#user");

userInfo.addEventListener("submit" , (e)=> {

    const userData = {
        fullName: e.target.userName.value,
        phone: e.target.userPhone.value,
        email: e.target.email.value,
        address: e.target.address.value,
        professionalProfile: e.target.profile.value,
        evidence: e.target.evidence.value,
        study: e.target.study.value,
        placeOfStudy: e.target.placeofstudy.value,
        average: e.target.average.value,
        job: e.target.job.value,
        workplace: e.target.workplace.value,
        timeToStartWork: e.target.startwork.value,
        timeToDoneWork: e.target.donework.value,
        achievement: e.target.achievement.value,
        softSkills: e.target.softskills.value,
        hardSkills: e.target.hardskills.value,
        levelSkills: e.target.levelskills.value,
        languages: e.target.languages.value,
        levelLanguages: e.target.levellanguages.value,
        aboutPerson: e.target.aboutperson.value,
    }
    console.log(userData);

    e.preventDefault();

})