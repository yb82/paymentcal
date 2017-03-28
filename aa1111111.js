



$(document).ready(function() {
  var course2duration,course2StartDate;
  var course3duration,course3StartDate;
  var course4duration,course4StartDate;
  var course5duration,course5StartDate;
  var course6duration,course6StartDate;

   var dateFlag = 0;
  $( "#1st" ).change(function() {
    var startdate = $("#1st option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course1duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish1").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });

  $( "#2nd" ).change(function() {
    var startdate = $("#2nd option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course2duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish2").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });

  $( "#3rd" ).change(function() {
    var startdate = $("#3rd option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course3duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish3").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });

  $( "#4th" ).change(function() {
    var startdate = $("#4th option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course4duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish4").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });

  $( "#5th" ).change(function() {
    var startdate = $("#5th option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course5duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish5").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });

  $( "#6th" ).change(function() {
    var startdate = $("#6th option:selected").val();
    var tempDate = startdate.split("/");
    var now = new Date(tempDate[2],tempDate[1],tempDate[0]);
    var duration = $("#course6duration").val();
    now.setDate(now.getDate()+(duration * 7)-3);
    $("#finish6").val(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear());
  });




  $('#btnRight').click(function(e) {
    var course1duration;
    var course1StartDate;
    var selectedOpts = $('#lstBox1 option:selected');
    if (selectedOpts.length == 0) {
      alert("Nothing to move.");
      e.preventDefault();
      return;
      
    }

      $('#lstBox2').append($(selectedOpts).clone());

      var selectedCourses = $("#lstbox2 option").length;

      


      switch(selectedCourses){
        case 1:
        var courseName = $("#lstbox2 option").eq(0).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course1duration").val(s_Data[0]);
            $('#1st').append($('<option>', {value:"-", text: "-"}));
            
           
            
            for(var i = 1 ; i < s_Data[1].length; i ++) {
             

                $('#1st').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));  
              
            }
          }           
        });
        $("#course1").slideDown();
        $('#course1name').val(selectedOpts.val());
        break;

        case 2:
        var courseName = $("#lstbox2 option").eq(1).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course2duration").val(s_Data[0]);
            $('#2nd').append($('<option>', {value:"-", text: "-"}));
            for(var i = 1 ; i < s_Data[1].length; i ++) {
              $('#2nd').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));
            }
          }           
        });
        $("#course2").slideDown();
        $("#option3").slideDown();
        $('#course2name').val(selectedOpts.val());
        break;

        case 3:
        var courseName = $("#lstbox2 option").eq(2).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course3duration").val(s_Data[0]);
            $('#3rd').append($('<option>', {value:"-", text: "-"}));    
            for(var i = 1 ; i < s_Data[1].length; i ++) {
              $('#3rd').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));
            }
          }           
        });
        $("#course3").slideDown();
        $('#course3name').val(selectedOpts.val());
        break;

        case 4:
        var courseName = $("#lstbox2 option").eq(3).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course4duration").val(s_Data[0]);
            $('#4th').append($('<option>', {value:"-", text: "-"}));
            for(var i = 1 ; i < s_Data[1].length; i ++) {
              $('#4th').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));
            }
          }           
        });
        $("#course4").slideDown();
        $('#course4name').val(selectedOpts.val());
        break;

        case 5:
        var courseName = $("#lstbox2 option").eq(4).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course5duration").val(s_Data[0]);
            $('#5th').append($('<option>', {value:"-", text: "-"}));
            for(var i = 1 ; i < s_Data[1].length; i ++) {
              $('#5th').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));
            }
          }           
        });
        $("#course5").slideDown();
        $('#course5name').val(selectedOpts.val());
        break;

        case 6:
        var courseName = $("#lstbox2 option").eq(5).val();
        $.post( "./update.php", { duration: courseName })
        .done(function( data ) {
          if(data=="[]"){
            alert( "No data!!!" );
          } 
          else {
            var s_Data= jQuery.parseJSON( data );
            $("#course6duration").val(s_Data[0]);
            $('#6th').append($('<option>', {value:"-", text: "-"}));
            for(var i = 1 ; i < s_Data[1].length; i ++) {
              $('#6th').append($('<option>', {value:s_Data[1][i], text: s_Data[1][i]}));
            }
          }  });
        $("#course6").slideDown();
        $('#course6name').val(selectedOpts.val());
        break;
        default:
        alert("Full!!!!!!!!!!!!!!");
        return;
        break;  }

        //changeStartDate();
        $(selectedOpts).remove();
        e.preventDefault();
      });

$('#btnLeft').click(function(e) {
  var selectedOpts = $('#lstBox2 option:selected');
  if (selectedOpts.length == 0) {
    alert("Nothing to move.");
    e.preventDefault();
  }

  $('#lstBox1').append($(selectedOpts).clone());
  $(selectedOpts).remove();
  e.preventDefault();
});
});



function getStartDateByName(courseName){



    /*$('#lstbox2 option').each(function(){
        courseNames.push($(this).val());
      });*/


      $.post( "./update.php", { courses: courseName })
      .done(function( data ) {
        if(data=="[]"){
          alert( "No data!!!" );
        } else {
         var s_Data= jQuery.parseJSON( data );
         return s_Data;                   

         for(var i = 0 ; i < s_Data.length; i ++){

          $('#1st').append($('<option>', {value:s_Data[i], text: s_Data[i]}));
        }

        $('#course1').slideDown();


      }           


    });
  }

    function getCourseDuration(courseName){





      $.post( "./update.php", { duration: courseName })
      .done(function( data ) {
        if(data=="[]"){
          alert( "No data!!!" );
        } else {
         var s_Data= jQuery.parseJSON( data );
         return s_Data;

                  /*for(var i = 0 ; i < s_Data.length; i ++){
                    
                    $('#1st').append($('<option>', {value:s_Data[i], text: s_Data[i]}));
                  }*/
                  
            //$('#course1').slideDown();


          }           
          

        });
    }

    function checkDate(startDate){

      var tempDate = startDate.split("/");
      var converted = new Date(tempDate[2],tempDate[1]-1,tempDate[0]);
      var now = new Date();
      if(now > converted){
        return 0;
      } 
      else 
        return 1;

    }
