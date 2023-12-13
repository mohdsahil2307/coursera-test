(function (window) {
	var HelloSpeaker = {};
	
	HelloSpeaker.speak = function(name) {
  console.log("Hello "+ name);
}
window.HelloSpeaker = HelloSpeaker;

})(window);