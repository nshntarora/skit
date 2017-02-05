$(document).on('click keyup',"#content",function(e){
      //if(e.which==13)
          //document.execCommand('insertHTML', false, '<p></p>');
      //return false;
      e.preventDefault();
      $("#content").removeClass("ui-sortable");
      if($('#content').html()=="") {
        console.log("empty");
        document.execCommand('insertHTML', false, '<p></p>');
      }
      document.execCommand('defaultParagraphSeparator', false, 'p');

});
$(document).on('dblclick',"#content",function(e){
      e.preventDefault();
      $("#content").addClass("ui-sortable");
});
//document.execCommand('defaultParagraphSeparator', false, 'p');
$(document).ready(function(){
  console.log("doc ready");
  $('#content').sortable();
});
