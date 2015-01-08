// Bio Section
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
	"welcomeMessage" : "Welcome to my resume.",
	"skills" : [
		"web development", "web application ux design", "requirements & testing", "telecom/network engineering", "project management", "team leadership"
	]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace ("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace ("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation); 

	var formattedBiopic = HTMLbioPic.replace ("%data%", bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedWelcomemessage = HTMLWelcomeMsg.replace ("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomemessage);
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
}


// Jobs Section
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

work.display = function() {
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


// Projects Section
var projectList = {
	"projects": [
			{
				"title": "Customer Name Standardization",
				"dates": "2014",
				"description": "Standardized external customer names for all projects company-wide to a database-driven customer ID-based name rather than a free-form text field to vastly improve relating customers in reports and searches.",
				"images": [
					"images/project2a.jpg", "images/project2b.jpg"
				]
			},
			{
				"title": "SD Interface Portal",
				"dates": "2013",
				"description": "Designed, tested, and deployed a new intranet web portal that simultaneously searches across three different systems to return service delivery and project management data for a given order number, project number, or customer number.",
				"images": [
					"images/project1a.jpg", "images/project1b.jpg"
				]
			}
	]
}

projects.display = function() {
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


// Education Section
var education = {
	"schools": [
		{
			"name" : "CSUS",
			"degree" : "BS",
			"dates" : "1994",
			"location" : "Sacramento, CA",
			"major" : "Business Management and Marketing"
		}
	]
}

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace ("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace ("%data%", education.schools[school].degree);
		var formattedSchoolTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolTitle);

		var formattedSchoolDates = HTMLschoolDates.replace ("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedMajor = HTMLschoolMajor.replace ("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedSchoolLocation = HTMLschoolLocation.replace ("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}
}


// Get click coordinates
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


// Internationalize Name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}


// Display the Content
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
