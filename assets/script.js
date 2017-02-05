$(document).on('click keyup',"#content",function(e){
      //if(e.which==13)
          //document.execCommand('insertHTML', false, '<p></p>');
      //return false;
      e.preventDefault();
      //if($(".default").remove()){
      //  console.log("P");
        $(".placeholder").remove();
      //}
      //else
      //  console.log("A");
      if($('#content').html()=="") {
        console.log("empty");
        $("#content").html("<p><span><br></span></p>");
      }
      var text = window.getSelection();
      var ol = "";
      if(text.toString()!=""){
        oRange = text.getRangeAt(0);
        oRect = oRange.getBoundingClientRect();
        //$("body").append("<div class='tooltip'>This is a tooltip</div>");
        $(".tooltip").css("top",oRect.top-50);
        $(".tooltip").css("left",oRect.left-10);
        $(".tooltip").show();
      }
      else
        $(".tooltip").hide();
});
//document.execCommand('defaultParagraphSeparator', false, 'p');
$(document).ready(function(){
  console.log("doc ready");

  $("body").on("click",function(){
    $(".tooltip").hide();
  })

  $('#content').sortable({
    revert: true,
    cancel: "#content p span"
  });
  //$('#content').enableSelection();
  $(document).on("click","p",function(e){
    e.preventDefault();
    $("#content").focus();
  });

  $("#bold").on("click",function(){
    document.execCommand('bold');
    p = window.getSelection().anchorNode.parentNode.closest("p");
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide();
    console.log("You just pressed bold");
  });

  $("#underline").on("click",function(){
    document.execCommand('underline');
    p = window.getSelection().anchorNode.parentNode.closest("p");
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide();
    console.log("You just pressed underline");
  });

  $("#red").on("click",function(){
    document.execCommand('forecolor',false,'red');
    p = window.getSelection().anchorNode.parentNode.closest("p");
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide();
    console.log("You just pressed red");
  });

  $("#extract").on("click",function(){
    content = $("#content").text();
    content = "<nishant>"+content+"</nishant>";
    links = $(content).find("a");
    console.log(links);
    var i=0;
    $(".links").html("");
    $(".links").html("<h2>Here are the links we've found...</h2>");
    blue = true;
    while(i<links.length){
      $(".links").append(links[i]);
      $(".links").append("<br/>");
      if(blue)
        $(links[i]).css("color","red");
      else
        $(links[i]).css("color","blue");
      i+=1;
      blue=!blue;
    }
    $(content).find("a").unwrap();
  });

  $("#replace").on("click",function(){
    $.get( "http://www.setgetgo.com/randomword/get.php", function( data ) {
      a = $("#content").text().match(/\b[a-zA-Z]{4}\b/);
      while(a)
      {
        console.log(a);
        b = $("#content").html().replace(a[0],data);
        $("#content").html(b);
        a = $("#content").text().match(/\b[a-zA-Z]{4}\b/);
        console.log("ONe iterations");
      }
    });
  });
});

$(document).on("click keyup","#content",function(){
  if($(this).html()=="")
    $(this).html("<span><br></span>");
});

var boldit = function(){


}
