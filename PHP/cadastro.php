<?php 
echo "cheguei aqui";
$login = $_POST['login'];
$senha = MD5($_POST['senha']);


echo "tentando conectar no banco";
$connString = "mysql:host=localhost;dbname=id6321941_kndeso";
$conn = new PDO($connString, "id6321941_kndeso", "kndtecnologico12149090");
$conn->exec("set names utf8");

echo "conectou no banco";

// $connect = mysql_connect('files.000webhost.com','id6321941_kndeso','kndtecnologico12149090');
// $db = mysql_select_db('id6321941_kndeso');
// $query_select = "SELECT login FROM PESSOA WHERE login = '$login'";
// $select = mysql_query($query_select,$connect);
// $array = mysql_fetch_array($select);
// $logarray = $array['login'];
 
  if(!isset($senha)){
    echo"<script language='javascript' type='text/javascript'>alert('O campo login deve ser preenchido');window.location.href='cadastro.html';</script>";
    echo "verifica preenchimento";
    }else{
      echo "verificou preechi";

      $query = "SELECT login
                  FROM PESSOA
                 WHERE login = ?";
            echo "select banco";

      // prepare query statement
      $stmt = $conn->prepare( $query );
      echo "deu certo prepare ";
      
      // execute query
      $stmt->execute();
      echo "pos select banco";

      // get retrieved row
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      echo "jogou dados no banco";
      if($row['total_rows'] > 0){
        echo "alert que existe ";

        echo"<script language='javascript' type='text/javascript'>alert('Esse login já existe');window.location.href='cadastro.html';</script>";
        die();
      }else{
        echo "jogou dados no banco 12 ";
        $query = "INSERT INTO pessoa ('login','senha','nome','email','cpf','data_nascimento') VALUES ('$login','$senha','$nome','$email','$cpf','$data_nascimento')";
        echo "jogou dados no banco 1 ";

        $insert = mysql_query($query,$conn);//parou aqui
        echo "jogou dados no banco 122 ";

        if($insert){
          echo"<script language='javascript' type='text/javascript'>alert('Usuário cadastrado com sucesso!');window.location.href='index.html'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>alert('Não foi possível cadastrar esse usuário');window.location.href='cadastro.html'</script>";
      
        }
      }
    }
    echo "jogou dados no banco 122 ";

?>