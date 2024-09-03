package web;

import datos.HerramientaDaoJDBC;
import dominio.Herramienta;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/ServletControlador")
public class ServletControlador extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String accion = request.getParameter("accion");
        
        
        if (accion != null) {
            switch (accion) {
                case "editar":
                    this.editarHerramienta(request, response);
                    break;
                case "eliminar":
                    this.eliminarHerramienta(request, response);
                    break;
                default:
                    this.accionDefault(request, response);
            }
        } else {
            this.accionDefault(request, response);
        }
    }

    private void accionDefault(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<Herramienta> herramientas = new HerramientaDaoJDBC().listar();
        System.out.println("herramientas = " + herramientas);
        HttpSession sesion = request.getSession();
        sesion.setAttribute("herramientas", herramientas);
        sesion.setAttribute("totalHerramientas", herramientas.size());
        sesion.setAttribute("precioTotal", this.calcularPrecioTotal(herramientas));
        //request.getRequestDispatcher("clientes.jsp").forward(request, response);
        response.sendRedirect("herramienta.jsp");
    }

    private double calcularPrecioTotal(List<Herramienta> herramientas) {
        double precioTotal = 0;
        for (Herramienta herramienta : herramientas) {
            precioTotal += herramienta.getPrecio();
        }
        return precioTotal;
    }

    private void editarHerramienta(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //recuperamos el idCliente
        int idHerramienta = Integer.parseInt(request.getParameter("idHerramienta"));
        Herramienta herramienta = new HerramientaDaoJDBC().encontrar(new Herramienta(idHerramienta));
        request.setAttribute("herramienta", herramienta);
        String jspEditar = "/WEB-INF/paginas/herramienta/editarHerramienta.jsp";
        request.getRequestDispatcher(jspEditar).forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String accion = request.getParameter("accion");
        if (accion != null) {
            switch (accion) {
                case "insertar":
                    this.insertarHerramienta(request, response);
                    break;
                case "modificar":
                    this.modificarHerramienta(request, response);
                    break;
                default:
                    this.accionDefault(request, response);
            }
        } else {
            this.accionDefault(request, response);
        }
    }

    private void insertarHerramienta(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //recuperamos los valores del formulario agregarCliente
        String nombre = request.getParameter("nombre");
        String marca = request.getParameter("marca");
        String modelo = request.getParameter("modelo");
        String cantidad = request.getParameter("cantidad");
        double precio = 0;
        String precioString = request.getParameter("precio");
        if (precioString != null && !"".equals(precioString)) {
            precio = Double.parseDouble(precioString);
        }

        //Creamos el objeto de cliente (modelo)
        Herramienta herramienta = new Herramienta(nombre, marca, modelo, cantidad, precio);

        //Insertamos el nuevo objeto en la base de datos
        int registrosModificados = new HerramientaDaoJDBC().insertar(herramienta);
        System.out.println("registrosModificados = " + registrosModificados);

        //Redirigimos hacia accion por default
        this.accionDefault(request, response);
    }

    private void modificarHerramienta(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //recuperamos los valores del formulario editarCliente
        int idHerramienta = Integer.parseInt(request.getParameter("idHerramienta"));
        String nombre = request.getParameter("nombre");
        String marca = request.getParameter("marca");
        String modelo = request.getParameter("modelo");
        String cantidad = request.getParameter("cantidad");
        double precio = 0;
        String precioString = request.getParameter("precio");
        if (precioString != null && !"".equals(precioString)) {
            precio = Double.parseDouble(precioString);
        }

        //Creamos el objeto de cliente (modelo)
        Herramienta herramienta = new Herramienta(idHerramienta, nombre, marca, modelo, cantidad, precio);

        //Modificar el  objeto en la base de datos
        int registrosModificados = new HerramientaDaoJDBC().actualizar(herramienta);
        System.out.println("registrosModificados = " + registrosModificados);

        //Redirigimos hacia accion por default
        this.accionDefault(request, response);
    }
    
        private void eliminarHerramienta(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //recuperamos los valores del formulario editarCliente
        int idHerramienta = Integer.parseInt(request.getParameter("idHerramienta"));
     

        //Creamos el objeto de cliente (modelo)
        Herramienta herramienta = new Herramienta(idHerramienta);

        //Eliminamos el  objeto en la base de datos
        int registrosModificados = new HerramientaDaoJDBC().eliminar(herramienta);
        System.out.println("registrosModificados = " + registrosModificados);

        //Redirigimos hacia accion por default
        this.accionDefault(request, response);
    }

}
