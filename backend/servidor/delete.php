<?php

include_once('./conn.php');

$id  = $_GET['id'];

$sql = "DELETE FROM voluntariado where id = $id";

$result = $conn->query($sql);

header('Location: ../../frontend/src/trabalho_voluntario_admin.php');