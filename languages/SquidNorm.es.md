# Norma Squid

La **Norma Squid** es un conjunto de reglas simples y claras para estructurar
y escribir archivos de manera consistente, para facilitar la colaboración
y mejorar la legibilidad del código.

## Reglas Fundamentales

### 1. Límites de Línea
- Limitar las líneas a 80 caracteres.

### 2. Comentarios
- No se permiten comentarios dentro de las funciones, excepto posiblemente breves
  comentarios al final de la línea para explicar detalles complejos.
- Todos los comentarios deben estar escritos en inglés.
- **Ubicación de los comentarios**:
  - Documentar las clases con un bloque de comentarios Doxygen antes de la definición
    de la clase, pero no dentro de la clase.
  - Documentar las implementaciones de funciones/métodos con un bloque de comentarios
    Doxygen en el archivo de implementación (.cpp, .js, etc.), no en el archivo
    de encabezado/interfaz.
  - No duplicar la documentación entre la declaración y la implementación.
  - Al documentar APIs, documentar la interfaz en lugar de la implementación.

### 3. Espaciado
- Entre dos funciones, debe haber exactamente una línea vacía.
- Dentro de las funciones, no se permiten líneas vacías, excepto después de la
  lista de declaraciones de variables al comienzo de la función.

### 4. Estructura
- Las declaraciones de variables deben agruparse al comienzo de la función.
- Una función idealmente debe realizar una sola tarea claramente definida.

### 5. Nomenclatura
- Los nombres de variables y funciones deben estar en camelCase y en inglés.
- Los nombres deben ser descriptivos y reflejar claramente su uso.

## Ejemplo

### Archivo de encabezado (.hpp)

```cpp
/**
 * @brief Mathematical utility class
 * 
 * This class provides various mathematical operations.
 */
class MathUtils {
private:
    double precision;
    
public:
    MathUtils(double precision = 0.0001);
    ~MathUtils();
    
    double computeAverage(const std::vector<double>& values);
    bool isApproximatelyEqual(double a, double b);
};
```

### Archivo de implementación (.cpp)

```cpp
/**
 * @brief Constructor
 * 
 * Initializes the MathUtils with the specified precision.
 * 
 * @param precision The precision value for approximate comparisons
 */
MathUtils::MathUtils(double precision) {
    this->precision = precision;
}

/**
 * @brief Computes the average of a set of values
 * 
 * @param values The vector of double values to average
 * @return The arithmetic mean of the values
 */
double MathUtils::computeAverage(const std::vector<double>& values) {
    double sum = 0.0;
    int count = values.size();  // Variables are declared at the beginning
                                // Only one empty line allowed here
    if (count == 0) {
        return 0.0;
    }
    for (int i = 0; i < count; i++) {
        sum += values[i];
    }
    return sum / count;
}
```

Siguiendo estas reglas, facilitará la colaboración y comprensión
tanto para humanos como para IA.

# Autor

Cezou
