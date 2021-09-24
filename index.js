var text="root@localhost~# hacked by array<br>root@localhost~# thank : manusia biasa team - sanjungan jiwa - indonesian code party<br>root@localhost~# message : security is just an illusion>";
var delay=19;
var currentChar=1;
var destination="[none]";
function type()
{{
var dest=document.getElementById(destination);
if (dest)
{
dest.innerHTML=text.substr(0, currentChar)+"<blink>_</blink>";
currentChar++;
if (currentChar>text.length)
{
currentChar=1;
setTimeout("type()", 10000);
}
else
{
setTimeout("type()", delay);
}}}}
function startTyping(textParam, delayParam, destinationParam)
{
text=textParam;
delay=delayParam;
currentChar=1;
destination=destinationParam;
type();
}
javascript:startTyping(text, 50, "kontol");
