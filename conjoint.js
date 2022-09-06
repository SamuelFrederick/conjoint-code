Qualtrics.SurveyEngine.addOnload(function()
{
// import seeded random number generator code
// https://github.com/davidbau/seedrandom/blob/released/seedrandom.min.js
!function(a,b){function c(c,j,k){var n=[];j=1==j?{entropy:!0}:j||{};var s=g(f(j.entropy?[c,i(a)]:null==c?h():c,3),n),t=new d(n),u=function(){for(var a=t.g(m),b=p,c=0;q>a;)a=(a+c)*l,b*=l,c=t.g(1);for(;a>=r;)a/=2,b/=2,c>>>=1;return(a+c)/b};return u.int32=function(){return 0|t.g(4)},u.quick=function(){return t.g(4)/4294967296},u["double"]=u,g(i(t.S),a),(j.pass||k||function(a,c,d,f){return f&&(f.S&&e(f,t),a.state=function(){return e(t,{})}),d?(b[o]=a,c):a})(u,s,"global"in j?j.global:this==b,j.state)}function d(a){var b,c=a.length,d=this,e=0,f=d.i=d.j=0,g=d.S=[];for(c||(a=[c++]);l>e;)g[e]=e++;for(e=0;l>e;e++)g[e]=g[f=s&f+a[e%c]+(b=g[e])],g[f]=b;(d.g=function(a){for(var b,c=0,e=d.i,f=d.j,g=d.S;a--;)b=g[e=s&e+1],c=c*l+g[s&(g[e]=g[f=s&f+b])+(g[f]=b)];return d.i=e,d.j=f,c})(l)}function e(a,b){return b.i=a.i,b.j=a.j,b.S=a.S.slice(),b}function f(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(f(a[c],b-1))}catch(g){}return d.length?d:"string"==e?a:a+"\0"}function g(a,b){for(var c,d=a+"",e=0;e<d.length;)b[s&e]=s&(c^=19*b[s&e])+d.charCodeAt(e++);return i(b)}function h(){try{if(j)return i(j.randomBytes(l));var b=new Uint8Array(l);return(k.crypto||k.msCrypto).getRandomValues(b),i(b)}catch(c){var d=k.navigator,e=d&&d.plugins;return[+new Date,k,e,k.screen,i(a)]}}function i(a){return String.fromCharCode.apply(0,a)}var j,k=this,l=256,m=6,n=52,o="random",p=b.pow(l,m),q=b.pow(2,n),r=2*q,s=l-1;if(b["seed"+o]=c,g(b.random(),a),"object"==typeof module&&module.exports){module.exports=c;try{j=require("crypto")}catch(t){}}else"function"==typeof define&&define.amd&&define(function(){return c})}([],Math);

// seed random number generator from embedded data fields
// conjoint profile 1
// code for randomizing order the same for each conjoint profile for a single respondent
Math.seedrandom('${e://Field/seed1}');
var attRaw = ["Age", "Race/Ethnicity", "Religion", "Education", "Party"];
var att= ["Age", "Race/Ethnicity", "Religion", "Education", "Party"];
var attributes = ["", "", "", "", ""];
for(i=0; i<attRaw.length; i++){
	var rand1 = Math.floor(Math.random()*((attRaw.length - i)));
	attributes[i] = att[rand1];
	att.splice(rand1, 1);
}
var issuesRaw = ["Abortion", "Red-Flag Laws for Firearms",
				"Raising Taxes on Individuals Making More Than $250,000",
				"Legitimacy of 2020 Election"];
var iss = ["Abortion", "Red-Flag Laws for Firearms",
				"Raising Taxes on Individuals Making More Than $250,000",
				"Legitimacy of 2020 Election"];
var issues = [ "", "", "", ""];
for(i=0; i<issuesRaw.length; i++){
	var rand1 = Math.floor(Math.random()*((issuesRaw.length - i)));
	issues[i] = iss[rand1];
	iss.splice(rand1, 1);
}

Math.seedrandom('${e://Field/seed1}');

// Create Variables for Traits associated with each dimension.
var vconstituency = ["Urban", "Rural", "Suburban"];
if (Math.random() >= 0.5) {
  var vparty = ["Republican", "Democrat"];
} else {
  var vparty = ["Democrat", "Republican"];
}
var veduc = ["No college", "Community college", "College", "Graduate degree"];
var vabort = ["Completely ban and criminally charge women for seeking abortions",
			"Ban at 6 weeks with no exceptions",
			"Ban at 15 weeks with exceptions",
			"No restrictions",
			"Restore Roe v. Wade",
			"Restrict late-term abortions with exceptions to protect the life of the mother"];
var vredflag = ["Supports", "Opposes", "Opposes, but supports stronger gun restrictions"];
var vtaxes = ["Supports", "Opposes"];
var vlegit = ["2020 Election was illegitimate and should be decertified",
			"2020 Election was illegitimate, but it's time to move on",
			"2020 Election was legitimate",
			"2020 Election was legitimate, but we should reform electoral security"];


// Functions for setting race and religion approximately proportionately
function getRace(){
  // 60% non-hispanic white; 15% black; 15% hispanic; 10% asian
  var n = Math.floor(Math.random()*100);
  if (n<10) {
  var out = 3;
  } else if (n <25) {
  var out = 2;
  } else if (n<40) {
  var out = 1;
  } else {
  var out = 0;
  }
  var vrace = ["White", "African American", "Hispanic", "Asian American"];
  return vrace[out];
}
function getReligion(){
  // 20% evangelical; 20% mainline; 20% catholic; 10% jewish; 10% muslim; 20% none
  var n = Math.floor(Math.random()*100);
  if (n<20) {
  var out = 5;
  } else if (n<30) {
  var out = 4;
  } else if (n<40) {
  var out = 3;
  } else if (n<60) {
  var out = 2;
  } else if (n<80) {
  var out = 1;
  } else {
  var out = 0;
  }
  var vreligion = ["Evangelical protestant", "Mainline protestant", "Catholic", "Jewish", "Muslim", "None"];
  return vreligion[out];
}

// Use math.random to randomly select traits for each dimension for candidate A
var age_a = (Math.floor(Math.random() * (75 - 21 + 1)) + 21).toString();
var race_a = getRace();
var relig_a = getReligion();
var educ_a = veduc[Math.floor(Math.random()*veduc.length)];
var party_a = vparty[0];
var abort_a = vabort[Math.floor(Math.random()*vabort.length)];
var redflag_a = vredflag[Math.floor(Math.random()*vredflag.length)];
var taxes_a = vtaxes[Math.floor(Math.random()*vtaxes.length)];
var legit_a = vlegit[Math.floor(Math.random()*vlegit.length)];

// Use math.random to randomly select traits for each dimension for candidate B
var age_b = (Math.floor(Math.random() * (75 - 21 + 1)) + 21).toString();
var race_b = getRace();
var relig_b = getReligion();
var educ_b = veduc[Math.floor(Math.random()*veduc.length)];
var party_b = vparty[1];
var abort_b = vabort[Math.floor(Math.random()*vabort.length)];
var redflag_b = vredflag[Math.floor(Math.random()*vredflag.length)];
var taxes_b = vtaxes[Math.floor(Math.random()*vtaxes.length)];
var legit_b = vlegit[Math.floor(Math.random()*vlegit.length)];

// Create list of variables to use when setting attributes
var attributes2 = attributes.concat(issues);

var age_index = attributes2.indexOf("Age");
var race_index = attributes2.indexOf("Race/Ethnicity");
var relig_index = attributes2.indexOf("Religion");
var educ_index = attributes2.indexOf("Education");
var party_index = attributes2.indexOf("Party");
var abort_index = attributes2.indexOf("Abortion");
var redflag_index = attributes2.indexOf("Red-Flag Laws for Firearms");
var taxes_index = attributes2.indexOf("Raising Taxes on Individuals Making More Than $250,000");
var legit_index = attributes2.indexOf("Legitimacy of 2020 Election");

var a_list = new Array(attributes2.length);

a_list[age_index] = age_a;
a_list[race_index] = race_a;
a_list[relig_index] = relig_a;
a_list[educ_index] = educ_a;
a_list[party_index] = party_a;
a_list[abort_index] = abort_a;
a_list[redflag_index] = redflag_a;
a_list[taxes_index] = taxes_a;
a_list[legit_index] = legit_a;

var b_list = new Array(attributes2.length);
b_list[age_index] = age_b;
b_list[race_index] = race_b;
b_list[relig_index] = relig_b;
b_list[educ_index] = educ_b;
b_list[party_index] = party_b;
b_list[abort_index] = abort_b;
b_list[redflag_index] = redflag_b;
b_list[taxes_index] = taxes_b;
b_list[legit_index] = legit_b;

att_list = ["att1", "att2", "att3", "att4", "att5", "att9", "att10", "att11", "att12"];
a_out = ["a1","a2","a3","a4","a5", "a9", "a10", "a11", "a12"];
b_out = ["b1","b2","b3","b4","b5", "b9", "b10", "b11", "b12"];

// set html values in conjoint table--this outputs proper results
for(i=0;i<12;i++){
  document.getElementById(att_list[i]).innerHTML = attributes2[i];
  document.getElementById(a_out[i]).innerHTML = a_list[i];
  document.getElementById(b_out[i]).innerHTML = b_list[i];
}

// set embedded data for order and specific traits displayed--this doesn't work
Qualtrics.SurveyEngine.setEmbeddedData("order1", attributes2.join("|"));
Qualtrics.SurveyEngine.setEmbeddedData("traits1a", a_list.join("|"));	
Qualtrics.SurveyEngine.setEmbeddedData("traits1b", b_list.join("|"));

});
