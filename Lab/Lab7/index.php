<!-- Export JQuery plugin -->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="tableExport.js"></script>
<script type="text/javascript" src="jquery.base64.js"></script>

<!-- png format -->
<script type="text/javascript" src="html2canvas.js"></script>
<!-- pdf format -->
<script type="text/javascript" src="jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="jspdf/jspdf.js"></script>
<script type="text/javascript" src="jspdf/libs/base64.js"></script>
<!-- etc -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
<script type="text/javascript" src="tableExport.js"></script>
<script type="text/javascript" src="jquery.base64.js"></script>
<script type="text/javascript" src="html2canvas.js"></script>
<script type="text/javascript" src="jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="jspdf/jspdf.js"></script>
<script type="text/javascript" src="jspdf/libs/base64.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<style>
.dropbtn {
    background-color: gray;
    color: white;
    padding: 16px;
    font-size: 16px;
     border: 2px solid;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: black;
}

.dropdown {
    margin-left: 85%;
    margin-top: 30px;
    /*position: relative;*/
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: gray}

.show {display:block;}
</style>

<?php
mysql_connect('localhost', 'root');
mysql_select_db('dreamhome');


 $qry="SELECT position ,max(salary) FROM staff group by position";
 $result=mysql_query($qry);


 $records = array();

 while($row = mysql_fetch_assoc($result)){
    $records[] = $row;
  }

?>

<html>

<body>

  <div class="dropdown">
  <button onclick="export_dropdown()" class="dropbtn">Export</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="#" onclick="$('#employees').tableExport({type:'json',escape:'false'});"> <img src="images/json.png" width="24px"> JSON</a>
      <a href="#" onclick="$('#employees').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});"> <img src="images/json.png" width="24px"> JSON (ignoreColumn)</a>
      <a href="#" onclick="$('#employees').tableExport({type:'json',escape:'true'});"> <img src="images/json.png" width="24px"> JSON (with Escape)</a>
      <a href="#" onclick="$('#employees').tableExport({type:'xml',escape:'false'});"> <img src="images/xml.jpg" width="24px"> XML</a>
      <a href="#" onclick="$('#employees').tableExport({type:'sql'});"> <img src="images/sql.png" width="24px"> SQL</a>
      <a href="#" onclick="$('#employees').tableExport({type:'csv',escape:'false'});"> <img src="images/csv.png" width="24px"> CSV</a>
      <a href="#" onclick="$('#employees').tableExport({type:'txt',escape:'false'});"> <img src="images/txt.png" width="24px"> TXT</a>
      <a href="#" onclick="$('#employees').tableExport({type:'excel',escape:'false'});"> <img src="images/xls.png" width="24px"> XLS</a>
      <a href="#" onclick="$('#employees').tableExport({type:'doc',escape:'false'});"> <img src="images/doc.png" width="24px"> Word</a>
      <a href="#" onclick="$('#employees').tableExport({type:'powerpoint',escape:'false'});"> <img src="images/ppt.png" width="24px"> PowerPoint</a>
      <a href="#" onclick="$('#employees').tableExport({type:'png',escape:'false'});"> <img src="images/png.png" width="24px"> PNG</a>
      <a href="#" onclick="$('#employees').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"> <img src="images/pdf.png" width="24px"> PDF</a>
    </div>
  </div>
  <div class="row" style="margin:5%;overflow:scroll;">
                          <table id="employees" class="table table-striped">
                  <thead>
                      <tr class="warning">
                          <!-- <th>Id</th> -->
                          <th>Position</th>
                          <th>Max Salary</th>
                          <!-- <th>age</th> -->
                      </tr>
                  </thead>
                  <tbody>
                  <?php foreach($records as $rec):?>
                      <tr>
                          <td><?php echo $rec['position']?></td>
                          <td><?php echo $rec['max(salary)']?></td>
                      </tr>
                      <?php endforeach; ?>
                      </tbody>
                      </table>
  </div>


</body>


</html>

<script>

function export_dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
