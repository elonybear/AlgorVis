/* THIS SOFTWARE IS CREDITED TO 440design
 * FOUND ON CODEPEN AT https://codepen.io/440design/pen/iEztk
 */ 

export function ripple (element, e) {
  console.log("Rippling");
  if($(element).find(".ink").length === 0){
    $(element).prepend("<span class='ink'></span>");
  }

  var ink = $(element).find(".ink");
  ink.removeClass("animate");

  if(!ink.height() && !ink.width()){
    var d = Math.max($(element).outerWidth(), $(element).outerHeight());
    ink.css({height: d, width: d});
  }

  var x = e.pageX - $(element).offset().left - ink.width()/2;
  var y = e.pageY - $(element).offset().top - ink.height()/2;

  ink.css({top: y+'px', left: x+'px'}).addClass("animate");

  setTimeout(() => {
    ink.removeClass('animate');
  }, 1000);
}
