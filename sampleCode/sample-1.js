var ERROR_TEMPLATES = {
												"required_field": "{0} is a required field",
                        "max_length:": "{0} this value exceeds the max length ({1})"}


var message = "This {0} a test {1}";
var args = ["is", "123232"];
var error_key = "required_field";
alert(messageFormat(message, args));

message = ERROR_TEMPLATES[error_key];
alert(messageFormat(message, ["dp1569511983364"]));
error_key = "max_length";
message = ERROR_TEMPLATES[error_key];
console.log("message: " + message);
alert(messageFormat(message, ["dp1569511983364", 14]));


function messageFormat(theMessage, theArgs) {
	var message = theMessage;
for (var i = 0; i < theArgs.length; i++) {
  message = message.replace("{"+ i +"}", theArgs[i]);

}

return message;


}