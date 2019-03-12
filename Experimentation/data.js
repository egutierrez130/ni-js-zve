const resources = [];

//Blank Resource
const blankResource = new resource(
    "",
    "",
    "",
    "",
    "",
    "",
    false, false, false,
    ""
)

//Geekwise
const geekwiseResource = new resource(
    "https://geekwiseacademy.com/",
    ".images/geekwise.jpg",
    "Geekwise Academy",
    "Geekwise Academy offers afordable HTML, CSS, and Javascript coding courses for those who want to learn how to code",
    "700 Van Ness Ave, Fresno, CA 93721",
    "(559) 500-3305 ext. 222",
    false, true, true,
    "School"
)

resources.push(geekwiseResource);

//Fresno City College
const fccResource = new resource(
    "https://www.fresnocitycollege.edu",
    ".images/fcc.png",
    "Fresno City College",
    "Fresno's best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "1101 E University Ave, Fresno, CA 93741",
    "(559) 442-4600",
    false, false, true,
    "School"
)

resources.push(fccResource);

//Clovis Community College
const cccResource = new resource(
    "https://www.cloviscollege.edu",
    ".images/ccc.jpg",
    "Clovis Community College",
    "Clovis' best community college, offering many classes for career paths, and offering transfer opportunities to universities",
    "10309 N Willow Ave, Fresno, CA 93730",
    "(559) 325-5200",
    false, false, true,
    "School"
)

resources.push(cccResource);

//Fresno Adult School
const fasResource = new resource(
    "https://www.fresnounified.org/schools/fas",
    ".images/fas.png",
    "Fresno Adult School",
    "Fresno Adult School offers a whide variety of Adult classes such as English as a Second Language, Adult Basic Education, and GED Preparation",
    "2500 Stanislaus St., Fresno, CA 93721",
    "(559) 457-6000",
    true, true, true,
    "School"
)

resources.push(fasResource);

//Adult Transition Program
const atpResource = new resource(
    "https://www.fresnounified.org/dept/specialeducation/Pages/Adult-Transition-Program-on-Fairmont.aspx",
    ".images/atp.png",
    "Adult Transition Program",
    "The Adult Transition Program provides training, support, and education to people with developmental disabilites to provide them the skills to become independent",
    "3132 E. Fairmont Ave., Fresno, CA  93726",
    "(559) 248-7150",
    true, true, true,
    "School"
) 

resources.push(atpResource);

//Central Learning Adult/Alternative School Site - CLASS
const classResource = new resource(
    "https://cl.centralunified.org/",
    ".images/class.png",
    "C.L.A.S.S",
    //Need description
    "An alternative education school dedicated to student persistence, credit completion, and high school graduation. Students who are eligible can easily enroll in Career Technical Education programs.",
    "2698 N Brawley, Fresno, CA 93722",
    "(559) 276-5230",
    true, true, true,
    "School"
)

resources.push(classResource);

// Clovis Adult Education
const caeResource = new resource(
    "https://clovisadult.cusd.com/",
    ".image/cae.jpeg",
    "Clovis Adult Education",
    "Clovis Adult Education provides resources for GED Completion, Adult Basic Education, and English as a Second Language",
    "1452 David E. Cook Way Clovis, CA 93611",
    "(559) 327-2800",
    true, true, true,
    "School"
)

resources.push(caeResource);

//California Christian College
const chrcolResource = new resource(
    "https://www.calchristiancollege.edu/",
    ".images/chrcol.jpeg",
    "The mission of California Christian College is to offer academic programs that develop Christian leaders to serve Christ both in the Church and in society.",
    "5364 E. Belmont Ave. Fresno, CA 93727",
    "(559) 251-4215",
    false, false, true,
    "School"
)

resources.push(chrcolResource);

//P. Steve Ramirez Vocational Training Centers
const psrResource = new resource(
    "https://www.psrtraining.com/",
    ".images/psr.png",
    "P. Steve Ramirez Vocational Training Centers",
    "Provides many vocational training programs such as truck driving, grant writing, and many others",
    "1300 W Shaw Ave #1a, Fresno, CA 93711",
    "(866) 478-0609",
    false, true, true,
    "School"
)

resources.push(psrResource);

//Proteus
const proResource = new resource(
    "http://www.proteusinc.org/",
    ".images/pro.png",
    "Proteus Inc.",
    "Our “Mission” is to provide education, job training, job placement, and other support services to farm working families and other program participants.",
    "1815 Van Ness Ave, Fresno, CA 93721",
    "(559) 499-2140",
    true, true, true,
    "School"
)

resources.push(proResource);

//Advanced Career Institute
const aciResource = new resource(
    "https://advanced.edu/",
    ".images/aci.jpeg",
    "Advanced Career Institute",
    "At Advanced Career Institute, students gain quality education and training needed to start a new career. ACI programs combine both hands-on experience and in-class technical training for Class A CDL, Class B CDL, school bus driving, and welding.",
    "2953 S. East Avenue, Fresno, California 93725",
    "(559) 407-9191",
    false, false, false,
    "School"
)

resources.push(aciResource);

//JB Aeronautics | Career Pilot Training
const jbaResource = new resource(
    "https://www.jbaeronautics.com/",
    ".images/jba.png",
    "JB Aeronautics Career Pilot Training",
    "JB Aeronautics provides a variety of flying lessons and certifications for aspiring pilots",
    "4955 E Andersen Ave, Fresno, CA 93727",
    "(559) 293-4988",
    false, false, true,
    "School"
)

resources.push(jbaResource);

//Clovis Online School
const cosResource = new resource(
    "https://onlineschool.cusd.com/",
    "",
    "Clovis Online School",
    "",
    "1655 David E Cook Way Clovis, CA 93611",
    "",
    false, false, false,
    "Online"
)

resources.push(cosResource)

function resource(hlink, imgSrc, name, description, location, phoneNumber, free, affordable, expensive, tag) {
    this.hlink = hlink;
    this.imgSrc = imgSrc;
    this.name = name;
    this.description = description;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.free = free;
    this.affordable = affordable;
    this.expensive = expensive;
    this.tag = tag;
    return this;
}
