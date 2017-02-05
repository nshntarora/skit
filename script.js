$(document).on('click keyup',"#content",function(e){
      //if(e.which==13)
          //document.execCommand('insertHTML', false, '<p></p>');
      //return false;
      e.preventDefault();

      if($('#content').html()=="") {
        console.log("empty");
        document.execCommand('insertHTML', false, '<p></p>');
      }
      document.execCommand('defaultParagraphSeparator', false, 'p');

});
//document.execCommand('defaultParagraphSeparator', false, 'p');
