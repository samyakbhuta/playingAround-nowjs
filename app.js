var express = require("express");
var httpServer = express.createServer();
var nowjs=require("now");
var everyone = nowjs.initialize(httpServer);

whenAnIndividualClientIsConnected = function(){
	//Since the function which are defined at the client side are ready/loaded in browser enviroment, we can call function which are defined at the client side.
	everyone.now.invokeAlertOnClient("From Server : I can see you are connected to me");
}
whenAnIndividualClientIsDisconnected = function(){
	//Since the function which are defined at the client side are ready/loaded in browser enviroment, we can call function which are defined at the client side.
	everyone.now.invokeAlertOnClient("From Server : I can see you don't love me anymore. Cya. Tc !!");
	console.log("Client disconnected");
}
/*
now.clientSideReadyToProcess(doSomeThing);		
*/
everyone.connected(whenAnIndividualClientIsConnected);
everyone.disconnected(whenAnIndividualClientIsDisconnected);
everyone.now.sayHiFromServer = function (callback){
	callback("Hi from server !!! ");
}

everyone.now.someServelLevelGlobalConfigBlahBlah = {fruitName:"Apple",marksObtained:"34",appName:"rightNowTheApp"};

httpServer.configure(function(){
	httpServer.use(express.logger());
});
httpServer.configure("development",function(){
	httpServer.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	httpServer.use(express.static(__dirname + '/public'));
});
httpServer.configure("production",function(){
	httpServer.use(express.errorHandler());
	httpServer.use(express.static(__dirname + '/public', { maxAge: oneYear }));
});
httpServer.get("/",function(req,res){
	res.send("Hello World");
});

httpServer.listen(1234);
console.log("listening at localhost:1234");




