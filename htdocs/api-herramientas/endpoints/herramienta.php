<?php
//require_once '../config/conexion.php';
require_once __DIR__ . '/../config/conexion.php';


class Herramienta {
    private $conn;
    private $table = 'herramientas';

    public function __construct() {
        $database = new Conexion();
        $this->conn = $database->conectar();
    }

    public function obtenerHerramientas() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crearHerramienta($nombre, $descripcion, $cantidad) {
        $query = "INSERT INTO " . $this->table . " (nombre, descripcion, cantidad) VALUES (:nombre, :descripcion, :cantidad)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':cantidad', $cantidad);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function actualizarHerramienta($id, $nombre, $descripcion, $cantidad, $estado) {
        $query = "UPDATE " . $this->table . " SET nombre = :nombre, descripcion = :descripcion, cantidad = :cantidad, estado = :estado WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':cantidad', $cantidad);
        $stmt->bindParam(':estado', $estado);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function eliminarHerramienta($id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
?>
