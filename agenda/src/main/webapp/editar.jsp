<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="keywords" content="">
<title>Agenda Contatos</title>

<link rel="icon" href="img/favicon_fone.png">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

</head>
<body>

	<section class="container text-center py-3 bg-dark">
		<h1 class="text-primary titulo">Agenda de Contatos</h1>
		<form name="frmContato" class="py-3" action="insert">
			<div class="col-auto">
					<input type="text" name="idcon" class="form-control mb-2" id="inlineFormInput" readonly value="<%out.print(request.getAttribute("idcon"));%>"> 
					<input type="text" name="nome" class="form-control mb-2" id="inlineFormInput" value="<%out.print(request.getAttribute("nome"));%>">
 					<input type="text" name="fone" class="form-control mb-2" id="inlineFormInput" value="<%out.print(request.getAttribute("fone"));%>"> 
 					<input type="text" name="email" class="form-control mb-2" id="inlineFormInput" value="<%out.print(request.getAttribute("email"));%>">
 					
 					<input type=button value="Salvar" class="btn btn-primary" onclick="validar()">
			</div>
		</form>
		<p>&#169; 2024 - Somente para fins educativos.</p>
	</section>

	<script src="scripts/validador.js"></script>
	<script src="scripts/jquery.js"></script>
	<script src="scripts/popper.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>

</body>
</html>