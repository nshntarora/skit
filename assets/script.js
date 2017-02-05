$(document).on('click keyup',"#content",function(e){
      e.preventDefault();

      $(".placeholder").remove(); // Removes the placeholder text

      if($('#content').html()=="") {
        // If the div becomes empty add a new paragraph
        $("#content").html("<p><span><br></span></p>");
      }

      // Toolbar Display
      var text = window.getSelection(); // Gets the currently selected text
      if(text.toString()!=""){
        /* If the selected text is not empty calculate the position of the
        selected text and accordingly set the position of the toolbar
        */
        oRange = text.getRangeAt(0);
        oRect = oRange.getBoundingClientRect();
        $(".tooltip").css("top",oRect.top-50);
        $(".tooltip").css("left",oRect.left-10);
        $(".tooltip").show();
      }
      else
        $(".tooltip").hide();
});

$(document).ready(function(){

  // Initiates sortable widget from Jqeury UI (/assets/jquery-ui.js)
  $('#content').sortable({
    revert: true,  // adds animation
    cancel: "#content p span" // Prevents sorting is you're on the target <span>
  });

  // If clicked on the <p> tag bring the focus to the editor
  $(document).on("click","p",function(e){
    e.preventDefault();
    $("#content").focus();
  });

  // Makes selected text bold
  $("#bold").on("click",function(){
    document.execCommand('bold');
    // Gets the parent paragraph
    p = window.getSelection().anchorNode.parentNode.closest("p");
    // Wraps all the content in a span to take it out of the scope of sortable
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide(); // Hides the toolbar
  });

  // Underlines selected text
  $("#underline").on("click",function(){
    document.execCommand('underline');
    // Gets the parent paragraph
    p = window.getSelection().anchorNode.parentNode.closest("p");
    // Wraps all the content in a span to take it out of the scope of sortable
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide(); // Hides the toolbar
  });

  // Makes selected text red
  $("#red").on("click",function(){
    document.execCommand('forecolor',false,'red');
    // Gets the parent paragraph
    p = window.getSelection().anchorNode.parentNode.closest("p");
    // Wraps all the content in a span to take it out of the scope of sortable
    $(p).wrapInner("<span></span>");
    $(".tooltip").hide(); // Hides the toolbar
  });

  // Extract all links
  $("#extract").on("click",function(){
    // Extracts the text and wraps it in a tag to make it valid HTML
    content = "<nishant>"+$("#content").text()+"</nishant>";
    links = $(content).find("a"); // Search for all <a> tags
    var i=0; // Initialte counter variable
    $(".links").html(""); // Empty the links container
    $(".links").html("<h2>Here are the links we've found...</h2>"); // Adds title
    blue = true; // Initiate color to a boolean. Plus, it rhymes
    while(i<links.length){
      $(".links").append(links[i]); // Add the link
      $(".links").append("<br/>");
      if(blue)
        $(links[i]).css("color","red"); // If blue make the link blue
      else
        $(links[i]).css("color","blue"); // If not blue make the link red
      i+=1; // Increment counter
      blue=!blue; // Toggle color
    }
  });

  // Gets a random word. Replaces 4 letter words
  $("#replace").on("click",function(){
    // Sending a GET request to the endpoint
    $.get( "http://www.setgetgo.com/randomword/get.php", function( data ) {
      // Search the text using RegEx for four letter words
      // This method returns only the first occourence in an array.
      a = $("#content").text().match(/\b[a-zA-Z]{4}\b/);
      while(a)
      {
        b = $("#content").html().replace(a[0],data); // Replace the word
        $("#content").html(b); // Update the html
        a = $("#content").text().match(/\b[a-zA-Z]{4}\b/); // Update result array
      }
    });
  });
});
