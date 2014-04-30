document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert("In on device ready");
    var options = new ContactFindOptions();
    options.filter=""; 
    options.multiple = true;
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

// onSuccess: Get a snapshot of the current contacts
//
function onSuccess(contacts) {
	alert("In on sucess ready");
    for (var i=0; i<contacts.length; i++) {
        console.log("Display Name = " + contacts[i].displayName);
        alert("Display Name = " + contacts[i].displayName);
    }
}


function onError(contactError) {
	alert(contactError);
    alert('onError!');
}
function getContactList()
{
	function onSuccess(contacts) {
		$("<li>HI "+contacts[0].phoneNumbers[0].value+"</li>" ).appendTo( "#contactlist" );
	};

	function onError(contactError) {
	    alert('onError!');
	};
	
	var options      = new ContactFindOptions();
	options.filter	 = "";
	options.multiple = true;
	var fields       =  ["displayName","phoneNumbers"];
	navigator.contacts.find(fields, onSuccess, onError, options);
}

$( "#target" ).click(function() {
	alert("Button Clicked");
	var url="http://localhost:8080/VotesApp/api/user/groups";
	$.ajax({
		  type: "GET",
		  contentType: "application/json; charset=utf-8",
		  dataType: "json",
		  url: url,
		  data: "{}",
		  success: function(msg){
		      $("body").append(msg.d); //will append "Hello world" to body tag
		  },
		  error: function () {

		  }
});
	});




