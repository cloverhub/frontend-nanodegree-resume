// Bio Section-----
var bio = {
	"name" : "Shawn Clover",
	"role" : "Systems Lead",
	"contacts" : {
		"mobile" : "415-555-1212",
		"email" : "shawn@shawnclover.com",
		"github" : "cloverhub",
		"twitter" : "@shawnclover",
		"location" : "San Francisco"
	},
	"biopic" : "images/profilePhoto.jpg",
	"welcomeMessage" : "Hi, welcome to my resume.",
	"skills" : [
		"web development", "interface design", "user testing", "team leadership"
	]
}

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace ("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace ("%data%", bio.biopic);
var formattedWelcomemessage = HTMLWelcomeMsg.replace ("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomemessage);



// Skills Section-----
if (bio.skills != null) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace ("%data%", bio.skills[0]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace ("%data%", bio.skills[1]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace ("%data%", bio.skills[2]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace ("%data%", bio.skills[3]);
	$("#header").append(formattedSkills);
}

var formattedSkills = HTMLskills.replace ("%data%", bio.skills);



// Jobs Section-----
function displayWork(){
	var work = {
		"jobs": [
			{
				"employer": "AT&T",
				"title": "Systems Team Lead",
				"dates": "2006 - Present",
				"location": "San Francisco, CA",
				"description": "I lead a team of web application developers and support personnel for a suite of project management web apps for AT&T's largest customers. I assemble focus groups, define user requirements, design the user experience, conduct testing, write some code, manage support resources, write help documentation, and introduce new functionality to the user community with presentations and screencasts. Our web-based applications cover the complete project life cycle from new project opportunities through project closeout and include online project plans, milestones, product tracking, issue logs, contacts, lessons learned, inventory, order management, site management, dynamic reports, a collaborative customer portal, and project surveys."
			},
			{
				"employer": "SBC",
				"title": "Senior Project Manager: Systems Roadmap",
				"dates": "2004-2006",
				"location": "San Francisco, CA",
				"description": "I led a large cross-organizational effort to standardize project management systems and tools across multiple regions for SBC Communications. I put together task teams to define user requirements, built technical requirements, and produced complete detailed business requirements for a standardized project management web-based system."
			},
			{
				"employer": "SBC",
				"title": "Project Management Area Manager",
				"dates": "2000-2004",
				"location": "San Ramon, CA",
				"description": "I managed a team of 16 project managers covering Northern California and Nevada regions that manages projects for large customers. I designed and maintained three web applications used by project managers to manage projects and by sales to engage project management resources. I authored M&P for several types of complex projects."
			},
			{
				"employer": "Pacific Bell",
				"title": "Loop Planning Engineer",
				"dates": "1998-2000",
				"location": "San Ramon, CA",
				"description": "I planned and designed telecommunications infrastructure for several high-volume exchanges. I coordinated capacity margin management for copper cable, fiber, ADSL, hicap, and digital loop facilities to accommodate customer demand. I managed projects from pre-design stage to completion. I forecasted growth and developed short and long-term feeder route relief strategies to meet growth requirements and I designed SONET rings to drive fiber multiplexors to provide T1 and DS3 services. I designed and coded a software tool that performs complex calculation to determine optimal copper wire gauging specs from central office to the home."
			},
			{
				"employer": "Pacific Bell",
				"title": "OSP Design Engineer",
				"dates": "1996-1998",
				"location": "San Ramon, CA",
				"description": "I designed outside plant telecommunications facilities, including long-range planning, distribution area studies, digital loop carrier design, capital expenditure analysis, rapid held-order response, maintenance, repair, and plant modernization. I designed jobs to fulfill orders for numerous circuit types for business and residential customers. I planned for new city and business developments, provisioned for cellular/PCS sites, interpreted tariffs, and coordinated special construction billing for customers."
			},
			{
				"employer": "TDSI Communications",
				"title": "Broadband Project Team Lead",
				"dates": "1995-1996",
				"location": "San Jose, CA",
				"description": "I managed the Permit Division for Pacific Bell’s Advanced Communications Broadband Network, a $5 billion project to build a hybrid fiber/coax high-speed internet in Silicon Valley. I led a team of experienced CAD drafters to produce quality drawings in a fast-paced environment. I developed a custom project management system to schedule and track over 1500 encroachment permit applications, revisions, and approved permits. I coordinated with engineering, construction, and city public works departments in multiple Silicon Valley cities to deliver approved permits on time to avoid costly delays of construction resources. I designed and tested a custom heat dissipation unit for the outside cabinets."
			}
		]
	}

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedEmployerDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedEmployerDates);

		var formattedLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();



// Get click coordinates-----
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


// Internationalize Name-----
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);



// Projects Section-----

// function displayProjects() {

projects.display = function() {

	var projectList = {
		"projects": [
				{
					"title": "Gauge Break Analyzer",
					"dates": "1998",
					"description": "I lead a team of web appli.",
					"images": [
						"images/project1a.jpg", "images/project1b.jpg"
					]
				},
				{
					"title": "Project 2",
					"dates": "1998",
					"description": "I lea a suite of project.",
					"images": [
						"images/project2a.jpg", "images/project2b.jpg"
					]
				}

		]
	}

	for (project in projectList.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace ("%data%", projectList.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace ("%data%", projectList.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace ("%data%", projectList.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projectList.projects[project].images.length > 0) {
			for (image in projectList.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projectList.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

/*




Education Section-----
var education = {
		"name" : "CSUS",
		"degree" : "BS",
		"dates" : "1989-1994",
		"location" : "Sacramento, CA",
		"major" : "Business Management and Marketing"
};
*/
