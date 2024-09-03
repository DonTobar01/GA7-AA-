package datos;

import dominio.Herramienta;
import java.sql.*;
import java.util.*;

public class HerramientaDaoJDBC {

    private static final String SQL_SELECT = "SELECT id_herramienta, nombre, marca, modelo, cantidad, precio "
            + " FROM herramienta";

    private static final String SQL_SELECT_BY_ID = "SELECT id_herramienta, nombre, marca, modelo, cantidad, precio "
            + " FROM herramienta WHERE id_herramienta = ?";

    private static final String SQL_INSERT = "INSERT INTO herramienta(nombre, marca, modelo, cantidad, precio) "
            + " VALUES(?, ?, ?, ?, ?)";

    private static final String SQL_UPDATE = "UPDATE herramienta "
            + " SET nombre=?, marca=?, modelo=?, cantidad=?, precio=? WHERE id_herramienta=?";

    private static final String SQL_DELETE = "DELETE FROM herramienta WHERE id_herramienta = ?";

    public List<Herramienta> listar() {
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        Herramienta herramienta = null;
        List<Herramienta> herramientas = new ArrayList<>();
        try {
            conn = Conexion.getConnection();
            stmt = conn.prepareStatement(SQL_SELECT);
            rs = stmt.executeQuery();
            while (rs.next()) {
                int idHerramienta = rs.getInt("id_herramienta");
                String nombre = rs.getString("nombre");
                String marca = rs.getString("marca");
                String modelo = rs.getString("modelo");
                String cantidad = rs.getString("cantidad");
                double precio = rs.getDouble("precio");

                herramienta = new Herramienta(idHerramienta, nombre, marca, modelo, cantidad, precio);
                herramientas.add(herramienta);
            }
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            Conexion.close(rs);
            Conexion.close(stmt);
            Conexion.close(conn);
        }
        return herramientas;
    }

    public Herramienta encontrar(Herramienta herramienta) {
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conn = Conexion.getConnection();
            stmt = conn.prepareStatement(SQL_SELECT_BY_ID);
            stmt.setInt(1, herramienta.getIdHerramienta());
            rs = stmt.executeQuery();
            rs.absolute(1);//nos posicionamos en el primer registro devuelto

            String nombre = rs.getString("nombre");
            String marca = rs.getString("marca");
            String modelo = rs.getString("modelo");
            String cantidad = rs.getString("cantidad");
            double precio = rs.getDouble("precio");

            herramienta.setNombre(nombre);
            herramienta.setMarca(marca);
            herramienta.setModelo(modelo);
            herramienta.setCantidad(cantidad);
            herramienta.setPrecio(precio);

        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            Conexion.close(rs);
            Conexion.close(stmt);
            Conexion.close(conn);
        }
        return herramienta;
    }

    public int insertar(Herramienta herramienta) {
        Connection conn = null;
        PreparedStatement stmt = null;
        int rows = 0;
        try {
            conn = Conexion.getConnection();
            stmt = conn.prepareStatement(SQL_INSERT);
            stmt.setString(1, herramienta.getNombre());
            stmt.setString(2, herramienta.getMarca());
            stmt.setString(3, herramienta.getModelo());
            stmt.setString(4, herramienta.getCantidad());
            stmt.setDouble(5, herramienta.getPrecio());

            rows = stmt.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            Conexion.close(stmt);
            Conexion.close(conn);
        }
        return rows;
    }

    public int actualizar(Herramienta herramienta) {
        Connection conn = null;
        PreparedStatement stmt = null;
        int rows = 0;
        try {
            conn = Conexion.getConnection();
            stmt = conn.prepareStatement(SQL_UPDATE);
            stmt.setString(1, herramienta.getNombre());
            stmt.setString(2, herramienta.getMarca());
            stmt.setString(3, herramienta.getModelo());
            stmt.setString(4, herramienta.getCantidad());
            stmt.setDouble(5, herramienta.getPrecio());
            stmt.setInt(6, herramienta.getIdHerramienta());

            rows = stmt.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            Conexion.close(stmt);
            Conexion.close(conn);
        }
        return rows;
    }

    public int eliminar(Herramienta herramienta) {
        Connection conn = null;
        PreparedStatement stmt = null;
        int rows = 0;
        try {
            conn = Conexion.getConnection();
            stmt = conn.prepareStatement(SQL_DELETE);
            stmt.setInt(1, herramienta.getIdHerramienta());

            rows = stmt.executeUpdate();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        } finally {
            Conexion.close(stmt);
            Conexion.close(conn);
        }
        return rows;
    }

}
