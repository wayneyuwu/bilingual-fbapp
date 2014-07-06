var statusNo = 0;
var scenarios = ["Sample Scenario","Today is Chinese/Korean New Year. <br>Write a post to greet your Facebook friends", 
"You went over to your friend’s house and really enjoyed the homemade food.<br> Write a post that would go along with this picture.",
"You just got assigned to a final project team for a course.<br> Write a post to plan a team meeting this Saturday at 2pm.",
"Your professor sang ‘Let it Go’ in the middle of a class today.<br> Write a post about it.",
"You are graduating, and you want to sell your car<br>(Ford Fusion, 2009, blue, 35000 miles) for $10,000.<br> Write a post to advertise it.",
"Today is Christmas.<br> Write a post to greet your Facebook friends.",
"You just got back from your 3 days trip to New York.<br> Write a post describing the photos that you took <br>(Statue of Liberty, Wall Street Charging Bull, Times Square).",
"Yesterday was your birthday and lots of people posted greetings on your wall.<br> Write a post to thank everyone."];

var scenariosKor = ["당신은 방금 해변가에서 놀다 집에 돌아왔습니다<br>오늘 한 일에 대한 글을 페이북에 포스팅해보세요<br><br> <hr style=\"width: 80%;\">Below are the sample posts to this scenario. <br>You can likewise add more details to the scenario if you wish.","오늘은 설날(구정)입니다. <br>페이스북 친구들에게 새해인사 글을 포스팅해보세요.", 
"저녁초대를 받아서 간 친구집에서 먹었던 음식은 정말로 맛있었습니다. <br>음식사진과 함께 페이스북에 올릴 글을 포스팅해보세요.",
"당신은 방금 기말 프로젝트 그룹에 배정 받았습니다. <br>이번주 토요일 오후 2시에 그룹회의 하자는 글을 페이스북에 포스팅해보세요.",
"오늘 교수님이 수업시간 도중에 ‘Let it Go’를 부르셨습니다.<br> 이에 대한 글을 페이스북에 포스팅해보세요.",
"졸업을 앞두고 있는 당신은 자동차 (Ford Fusion, 2009, 남색, 35000 마일) 를 팔고자 합니다.<br> 페이스북에 광고하는 글을 포스팅해보세요.",
"오늘은 크리스마스입니다.<br> 페이스북 친구들에게 크리스마스 인사글을 포스팅해주세요.",
"당신은 방금 뉴욕 2박3일 여행에서 돌아왔습니다.<br> 아래의 사진들과 함께 올릴만한 글을 포스팅해주세요 (자유의 여신상, 월가 황소동상, 타임스퀘어).",
"어제는 당신의 생일이습니다.<br> 생일 축하글을 남긴 사람들에 감사글을 포스팅해주세요."];

var scenariosChi = ["Sample chinese post","今天是农历春节。请发表一个状态祝你在Facebook上的朋友们新年快乐。", 
"你刚刚去朋友家品尝了他/她做的美食。请发表一个与配图相关的状态。",
"你刚刚得知你期末大作业的分组安排。请发表一个状态组织队友在本周六下午两点开会。",
"你一门课的教授今天在课上为大家演唱了“Let It Go”。请就此事件发表一个状态。",
"临近毕业，你正准备卖掉你自己的车（Ford Fusion，2009，蓝色，35000英里），并标价10000美元。请发表一个广告贴。",
"今天是圣诞节。请发表一个状态祝你的朋友们圣诞快乐。",
"你刚刚去纽约市玩了三天。请发表一条状态介绍一下你拍的一些照片（自由女神像，华尔街金牛，时代广场）。",
"昨天是你的生日，很多朋友都在你的墙上发表了生日祝福。请写一个状态感谢大家的祝福。"];



analyse = function(url) {
  var paramstring, res;
  paramstring = url.substring(1);
  params = paramstring.split('&');
  res = {};
  params.forEach(function(item, index, array) {
    var splits;
    splits = item.split('=');
    return res[splits[0]] = splits[1];
  });
  return res;
};

params = analyse(window.location.hash);
var L1 = params.lang;
var refcode = params.refcode;
console.log(L1);

function changeLang() {

if (L1.indexOf("Korean") > -1)
	document.getElementById("scenarioL1").innerHTML = scenariosKor[statusNo];
else
	document.getElementById("scenarioL1").innerHTML = scenariosChi[statusNo ];
}

function getStatus() {
    var status = document.getElementById("status").value + "\n";
    statusNo += 1;
	document.getElementById("status").value = ""
	document.getElementById("scenarioNo").innerHTML = "Scenario " + statusNo.toString();
	document.getElementById("scenario").innerHTML = scenarios[statusNo] ;

	if (L1.indexOf("Korean") > -1)
		document.getElementById("scenarioL1").innerHTML = scenariosKor[statusNo];
	else
		document.getElementById("scenarioL1").innerHTML = scenariosChi[statusNo];

	document.getElementById("scenarioImage").src = "../pics/scenario" + statusNo.toString() + ".jpeg";

 	if (status != null){
		$.ajax({
			type: 'POST',
			data: { 
			statusList: status,
			refcode: refcode
		},
		url: 'page1.php',
		dataType: 'json',
		async: false,
었
		success: function(result){
		// call the function that handles the response/results
		},

		error: function(){
		window.alert("Error");
		}
		});

		} else {
			alert('no statuslist');
		}

		console.log(statusNo);

    if (statusNo >= scenarios.length){

		location.href = "page2.html#post=1";
    }

}
