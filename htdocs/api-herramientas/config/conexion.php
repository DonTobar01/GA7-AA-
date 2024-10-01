<?php
class Conexion {
    private $host = 'localhost';
    private $db = 'gestion_herramientas';
    private $user = 'root';  // Cambia esto si tienes una contraseña en MAMP
    private $password = 'root';  // Usualmente es 'root' en MAMP
    public $conn;

    public function conectar() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>
