<?php
require_once('./classes/Course.php');
require_once('./classes/Fee.php');
require_once('./classes/Datahandler.php');
$data = new Datahandler();

//print_r($data->courseData);
           	  //	print_r($data->courseData);

?>


<head>
  <link rel ="stylesheet" type="text/css" href="../css/calculator.css">
  <style type="text/css">

    .coursename{
      width: 496px;
    }

    .coursesection{
      display: none;
    }
    .coursename {
      border-color: whitesmoke;
      background-color: #fffdf5;
      border-radius: 3px;
      margin-bottom: 5px;

    }
    .coursetitle{
      background-color: #ffdd57;
      color: rgba(0, 0, 0, 0.7);
    }
    .coursedetail{

      color: #3b3108;
      border-radius: 3px;
      border-color: #ffdd57;

    }
    .finish{

    }

  </style>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="../js/aa1111111.js"></script>
</head>
<body>

  <form name="cert"  method="post" action="update.php">
    <table style='width:370px;'>
      <tr>
        <td style='width:160px; '>
          <b>Courses </b><br/>
          <select multiple="multiple" id='lstBox1' style="height:170px;width:496px">
            <?php

            echo $data->loadCourseName();


            ?>
          </select>
        </td>
        <td style='width:50px;text-align:center;vertical-align:middle;'>
          <input type='button' id='btnRight' value ='  >  '/>
          <!-- <br/><input type='button' id='btnLeft' value ='  <  '/> -->
        </td>
        <td style='width:160px;'>
          <b>Selected Course </b><br/>
          <select multiple="multiple" id='lstBox2' style="height:170px ;width:496px">

          </select>
        </td>
      </tr>
    </table>
    <b>Payment Option</b>
    <br/>

    <input type="radio" name="Paymentoption" value="1" checked="true">Option 1</input>
    <input type="radio" name="Paymentoption" value="2">Option 2</input>
    <div id="option3" style="display: float; display: none;" >
      <!--<div id="option3" style="display: none">-->
      <input type="radio" name="Paymentoption" value="3" >Option 3</input>
    </div>
    <br/>
    <br/>
    <br/>
    <input type="submit" value="Submit" class= "button is-dark is-large" />

    <br/>
    <br/>
<!--
  <div id="1-course" style="display:none"> -->
    <div id="course1"  class = "message is-black">
      <div class = "message-header">
        1. Course  <br/>
      </div>
      <div class = "message-body">
       Course Name <input  id="course1name" type="text" class="coursename" name = "course1name" /><br/>
       Course Duration <input id="course1duration" type="text" name = "course1duration" /><br/>
       Course Start Date: <select id="1st" name = "course1startdate"></select>  Finish Date: <input type="text" id="finish1" name= "finish1" readonly="readonly"></input><br/>
     </div>
   </div>



   <div id="course2"   class = "message is-black"  >
    <div class = "message-header">
      2. Course
    </div>
    <div class = "message-body">
     Course Name <input id="course2name" type="text" class="coursename" name = "course2name"/> <br/> 
     Course Duration <input id="course2duration" type="text" name = "course3duration" /><br/>
     Course Start Date: <select id="2nd"  name = "course2startdate"></select>  Finish Date: <input type="text" id="finish2" name= "finish2" readonly="readonly"></input><br/>
   </div>
 </div>





 <div id="course3"   class = "message is-black" >
  <div class = "message-header">
    3. Course
  </div>
  <div class = "message-body">
   Course Name <input class="coursename" id="course3name" type="text" name = "course3name"/>
   Course Duration <input id="course3duration" type="text" name = "course3duration" /><br/>
   Course Start Date: <select id="3rd" name = "course3startdate"></select>  Finish Date: <input type="text" id="finish3" name= "finish3" readonly="readonly" ></input><br/>
 </div>
</div>




<div id="course4"   class = "message is-black"  >
  <div class = "message-header">
    4. Course
  </div>
  <div class = "message-body">
    Course Name <input class="coursename" id="course4name" type="text" name = "course4name"/>
    Course Duration <input id="course4duration" type="text" name = "course4duration"  /><br/>
    Course Start Date: <select id="4th"  name = "course4startdate"></select>  Finish Date: <input type="text" id="finish4" name= "finish4" readonly="readonly"></input><br/>
  </div>
</div>


<div id="course5"   class = "message is-black"  >
  <div class = "message-header">
    5. Course 
  </div>
  <div class = "message-body">
    Course Name <input class="coursename" id="course5name" type="text" name = "course5name"/> 
    Course Duration <input id="course5duration" type="text" name = "course5duration" /><br/>
    Course Start Date: <select id="5th"  name = "course5startdate"></select>  Finish Date: <input type="text" id="finish5" name= "finish5" readonly="readonly"></input><br/>
  </div>
</div>


<div id="course6"   class = "message is-black"  >
  <div class = "message-header">

    6. Course 
  </div>
  <div class = "message-body">
   Course Name <input class="coursename" id="course6name" type="text" name = "course6name"/> 
   Course Duration <input id="course6duration" type="text" name = "course6duration"  /><br/>
   Course Start Date: <select id="6th"  name = "course6startdate"></select>  Finish Date: <input type="text" id="finish6" name= "finish6" readonly="readonly"></input><br/>
 </div>

</div>
</form>

</body>

