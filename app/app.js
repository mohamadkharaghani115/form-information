const userInfo = document.querySelector("#user");
const userName = document.querySelector("#userName");
const divOne = document.querySelector("#div1")
const userPhone = document.querySelector("#userPhone");
const divTwo = document.querySelector("#div2");
const divThree = document.querySelector("#div3");
const userEmail = document.querySelector("#email");
const divFour = document.querySelector("#div4");
const userAddress = document.querySelector("#address");
const divFive = document.querySelector("#div5");
const userProfile = document.querySelector("#profile");
const divSix = document.querySelector("#div6");
const userEvidence = document.querySelector("#evidence");
const divSeven = document.querySelector("#div7");
const userStudy = document.querySelector("#study");
const divEaight = document.querySelector("#div8");
const userPlaceOfSetudy = document.querySelector("#placeofsetudy");
const divNine = document.querySelector("#div9")
const userAverage = document.querySelector("#average");
const divTen = document.querySelector("#div10");
const userJob = document.querySelector("#job");
const divEleven = document.querySelector("#div11");
const userWorkPlace = document.querySelector("#workplace");
const divTwelve = document.querySelector("#div12");
const userStartWork = document.querySelector("#startwork");
const userDoneWork = document.querySelector("#donework");
const divthirteen = document.querySelector("#div13");
const userAchievement = document.querySelector("#achievement");
const divFourteen = document.querySelector("#div14");
const userSoftSkills = document.querySelector("#softskills");
const divFifteen = document.querySelector("#div15")
const userHardskills = document.querySelector("#hardskills");
const divSixteen = document.querySelector("#div16");
const userLevelSkills = document.querySelector("#levelskills");
const divSeventeen = document.querySelector("#div17");
const userLanguages = document.querySelector("#languages");
const diveighteen = document.querySelector("#div18");
const levellanguages = document.querySelector("#levellanguages");




const submitClass = document.querySelector("#submit")
userName.addEventListener("input", () => {
      if (userName.value.trim() !== "") {
        divOne.classList.remove("hidden");
        divOne.classList.add("show");
      } else {
        divOne.classList.add("hidden");
        divTwo.classList.add("hidden");
      }
      
    });
userPhone.addEventListener("input", () => {
      if (userPhone.value.trim() !== "") {
        divTwo.classList.remove("hidden");
        divTwo.classList.add("show");
      } else {
        divTwo.classList.add("hidden");
        divThree.classList.add("hidden");
      }
      
    });
userEmail.addEventListener("input", () => {
      if (userEmail.value.trim() !== "") {
        divThree.classList.remove("hidden");
        divThree.classList.add("show");
      } else {
        divThree.classList.add("hidden");
        divFour.classList.add("hidden");
      }
      
    });
userAddress.addEventListener("input", () => {
      if (userAddress.value.trim() !== "") {
        divFour.classList.remove("hidden");
        divFour.classList.add("show");
      } else {
        divFour.classList.add("hidden");
        divFive.classList.add("hidden");
      }
      
    });
userProfile.addEventListener("input", () => {
      if (userProfile.value.trim() !== "") {
        divFive.classList.remove("hidden");
        divFive.classList.add("show");
      } else {
        divFive.classList.add("hidden");
        divSix.classList.add("hidden");
      }
      
    });
userEvidence.addEventListener("input", () => {
      if (userEvidence.value.trim() !== "") {
        divSix.classList.remove("hidden");
        divSix.classList.add("show");
      } else {
        
        divSix.classList.add("hidden");
        divSeven.classList.add("hidden");
      }
      
    });
userStudy.addEventListener("input", () => {
      if (userStudy.value.trim() !== "") {
        divSeven.classList.remove("hidden");
        divSeven.classList.add("show");
      } else {
        
        divSeven.classList.add("hidden");
        divEaight.classList.add("hidden");
      }
      
    });
userPlaceOfSetudy.addEventListener("input", () => {
      if (userPlaceOfSetudy.value.trim() !== "") {
        divEaight.classList.remove("hidden");
        divEaight.classList.add("show");
      } else {
        
        divEaight.classList.add("hidden");
        divNine.classList.add("hidden");
      }
      
    });
userAverage.addEventListener("input", () => {
      if (userAverage.value.trim() !== "") {
        divNine.classList.remove("hidden");
        divNine.classList.add("show");
      } else {
        
        divNine.classList.add("hidden");
        divTen.classList.add("hidden");
      }
      
    });
userJob.addEventListener("input", () => {
      if (userJob.value.trim() !== "") {
        divTen.classList.remove("hidden");
        divTen.classList.add("show");
      } else {
        
        divTen.classList.add("hidden");
        divEleven.classList.add("hidden");
      }
      
    });
userWorkPlace.addEventListener("input", () => {
      if (userWorkPlace.value.trim() !== "") {
        divEleven.classList.remove("hidden");
        divEleven.classList.add("show");
      } else {
        
        divEleven.classList.add("hidden");
        divTwelve.classList.add("hidden");
      }
      
    });
userStartWork.addEventListener("input", () => {
      if (userStartWork.value.trim() !== "") {
        divTwelve.classList.remove("hidden");
        divTwelve.classList.add("show");
      } else {
        
        divTwelve.classList.add("hidden");
        divthirteen.classList.add("hidden");
      }
      
    });
userDoneWork.addEventListener("input", () => {
      if (userDoneWork.value.trim() !== "") {
        divTwelve.classList.remove("hidden");
        divTwelve.classList.add("show");
      } else {
        
        divTwelve.classList.add("hidden");
        divthirteen.classList.add("hidden");
      }
      
    });
userAchievement.addEventListener("input", () => {
      if (userAchievement.value.trim() !== "") {
        divthirteen.classList.remove("hidden");
        divthirteen.classList.add("show");
      } else {
        
        divthirteen.classList.add("hidden");
        divFourteen.classList.add("hidden");
      }
      
    });
userSoftSkills.addEventListener("input", () => {
      if (userSoftSkills.value.trim() !== "") {
        divFourteen.classList.remove("hidden");
        divFourteen.classList.add("show");
      } else {
        
        divFourteen.classList.add("hidden");
        divFifteen.classList.add("hidden");
      }
      
    });
userHardskills.addEventListener("input", () => {
      if (userHardskills.value.trim() !== "") {
        divFifteen.classList.remove("hidden");
        divFifteen.classList.add("show");
      } else {
        
        divFifteen.classList.add("hidden");
        divSixteen.classList.add("hidden");
      }
      
    });
userLevelSkills.addEventListener("input", () => {
      if (userLevelSkills.value.trim() !== "") {
        divSixteen.classList.remove("hidden");
        divSixteen.classList.add("show");
      } else {
        
        divSixteen.classList.add("hidden");
        divSeventeen.classList.add("hidden");
      }
      
    });
userLanguages.addEventListener("input", () => {
      if (userLanguages.value.trim() !== "") {
        divSeventeen.classList.remove("hidden");
        divSeventeen.classList.add("show");
      } else {
        
        divSeventeen.classList.add("hidden");
        diveighteen.classList.add("hidden");
      }
      
    });
levellanguages.addEventListener("input", () => {
      if (levellanguages.value.trim() !== "") {
        diveighteen.classList.remove("hidden");
        diveighteen.classList.add("show");
      } else {
        
        diveighteen.classList.add("hidden");
      }
      
    });












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