<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="model.JavaBeans" %>
<%@ page import="java.util.ArrayList"%>

<%
	ArrayList<JavaBeans> lista = (ArrayList<JavaBeans>) request.getAttribute("contatos");

	//Teste de recebimento
	//for (int i = 0; i < lista.size(); i++){
	//	out.println(lista.get(i).getIdcon());
	//	out.println(lista.get(i).getNome());
	//	out.println(lista.get(i).getFone());
	//	out.println(lista.get(i).getEmail());		
	//}
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="keywords" content="">

<title>Cadastro de Produtos</title>

<link rel="icon" href="img/favicon_fone.png">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body class="">
	<section class="container text-center py-3 bg-dark">
		<h1 class="text-warning">Agenda de Contatos</h1>
		<a href="novo.html" class="btn btn-outline-warning btn-lg texto">
		<img src="img/icone_adicionar.png" alt="Adicionar novo contato">
		Novo contato</a>
		
		
		<table class="table table-striped mt-3">
		  <thead class="text-warning">
		    <tr>
		      <th scope="col">Id</th>
		      <th scope="col">Nome</th>
		      <th scope="col">Telefone</th>
		      <th scope="col">E-mail</th>
		       <th scope="col">Opções</th>
		    </tr>
		  </thead>
		  
		  <tbody class="text-light">
		  
		  <% for (int i = 0; i < lista.size(); i++) { %>
		    <tr>
		      <td><%=lista.get(i).getIdcon()%></td>
		      <td><%=lista.get(i).getNome()%></td>
		      <td><%=lista.get(i).getFone()%></td>
		      <td><%=lista.get(i).getEmail()%></td>
		      <td>
		      <a href="select?idcon=<%=lista.get(i).getIdcon()%>" class="btn btn-primary">
		         Editar
		      </a>
		      </td>
		    </tr>
		    <% } %>	    
		    
		  </tbody>
		</table>
		
		<p class="text-light mt-3 texto">&#169; 2024 - Somente para fins educativos.</p>
	</section>
	

	<script src="scripts/jquery.js"></script>
	<script src="scripts/popper.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>