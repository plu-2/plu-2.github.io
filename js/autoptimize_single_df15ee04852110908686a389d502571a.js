$(function(){$('.icon-link').click(function(){$(this).parent().siblings().removeClass("active");$(this).parent().toggleClass("active");});});var closePopup;function editLink(entry){var icon_style=entry.getAttribute("data-style").toLowerCase();var icon_cat=entry.getAttribute("data-cat").toLowerCase();var icon_popup=entry.getAttribute("data-popup").toLowerCase();if(icon_style=='outlined with background'){icon_style='outlined-background'}
if(icon_style=='colored with background'){icon_style='colored-background'}
var currentLink='https://www.cyberoptik.net/icons/'
var newLink=currentLink+'?tex_icon-cat='+icon_cat+'&tex_icon-style='+icon_style+'&popup='+icon_popup
history.pushState({},null,newLink);setTimeout(function(){closePopup=document.getElementsByClassName('ion-android-close')[0]
resetLink();},100);}
window.addEventListener('load',function(){checkLink();resetLink();})
function resetLink(){closePopup.addEventListener("click",function(){var currentLink='https://www.cyberoptik.net/icons/'
history.pushState({},null,currentLink);});}
function checkLink(){const queryString=window.location.search;const urlParams=new URLSearchParams(queryString);const styleParams=urlParams.get('tex_icon-style')
const catParams=urlParams.get('tex_icon-cat')
var iconLink=document.getElementsByClassName("icon-link")
for(var i=0;i<iconLink.length;i++)
{var icon_style=iconLink[i].getAttribute("data-style").toLowerCase();var icon_cat=iconLink[i].getAttribute("data-cat").toLowerCase();var icon_popup=iconLink[i].getAttribute("data-popup").toLowerCase();if(icon_style=='outlined with background'){icon_style='outlined-background'}
if(icon_style=='colored with background'){icon_style='colored-background'}
if(styleParams==icon_style&&catParams==icon_cat)
{currentLink=window.location.href
var newLink=currentLink+'&popup='+icon_popup
iconLink[i].click();if(icon_popup==null){history.pushState({},null,newLink);}}}}