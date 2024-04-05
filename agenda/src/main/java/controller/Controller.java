package controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

import model.DAO;
import model.JavaBeans;

/**
 * Servlet implementation class Controller
 */
@WebServlet(urlPatterns = {"/main","/insert","/select"})

public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	DAO dao = new DAO();
	JavaBeans contato = new JavaBeans();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Controller() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		//dao.testeConexao(); //teste com  o banco
		
		String action = request.getServletPath();
		System.out.println(action);
		
		if(action.equals("/main")) {
			contatos(request, response);
		}else if(action.equals("/insert")) {
			novoContato(request, response);
		}else if(action.equals("/select")) {
			listarContato(request, response);
			
		}else {
			response.sendRedirect("index.html");
		}		
	}
	
	//Listar contatos
	protected void contatos(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//response.sendRedirect("agenda.jsp");
		//Criando um objeto que irá receber os dados do JavaBeans
		ArrayList<JavaBeans> lista = dao.listarContatos();
		
		//Encaminhar a lista ao documento agenda.jsp
		request.setAttribute("contatos", lista);
		RequestDispatcher rd = request.getRequestDispatcher("agenda.jsp");
		rd.forward(request, response);
		
		/**Teste de recebimento da lista
		for(int i = 0; i < lista.size(); i++) {
			System.out.println(lista.get(i).getIdcon());
			System.out.println(lista.get(i).getNome());
			System.out.println(lista.get(i).getFone());
			System.out.println(lista.get(i).getEmail()); 
		}*/
	}
	
	protected void novoContato(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {			
		contato.setNome(request.getParameter("nome"));
		contato.setFone(request.getParameter("fone"));
		contato.setEmail(request.getParameter("email"));		
		
		//invocar o método inserirContato
		dao.inserirContato(contato);		
		response.sendRedirect("main");
	}	
	
	protected void listarContato(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
	 //recebimento do id do contato que sera ditado
		String idcon = request.getParameter("idcon");
	// System.out.println(idcon);
		
    //setar a variavel JavaBeans
		contato.setIdcon(idcon);
		
		//execultar o metodo selecionarContato (dao)
		dao.selecionarContato(contato);
		
		//teste de recebimento
		System.out.println(contato.getIdcon());
		System.out.println(contato.getNome());
		System.out.println(contato.getFone());
		System.out.println(contato.getEmail());
	}
}
