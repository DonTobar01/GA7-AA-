package dominio;

public class Herramienta {
    
    private int idHerramienta;
    private String nombre;
    private String marca;
    private String modelo;
    private String cantidad;
    private double precio;

    public Herramienta() {
    }

    public Herramienta(int idHerramienta) {
        this.idHerramienta = idHerramienta;
    }

    public Herramienta(String nombre, String marca, String modelo, String cantidad, double precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    public Herramienta(int idHerramienta, String nombre, String marca, String modelo, String cantidad, double precio) {
        this.idHerramienta = idHerramienta;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    public int getIdHerramienta() {
        return idHerramienta;
    }

    public void setIdHerramienta(int idHerramienta) {
        this.idHerramienta = idHerramienta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    @Override
    public String toString() {
        return "Herramienta{" + "idHerramienta=" + idHerramienta + ", nombre=" + nombre + ", marca=" + marca + ", modelo=" + modelo + ", cantidad=" + cantidad + ", precio=" + precio + '}';
    }
    
}
