# Squid Norm

Die **Squid Norm** ist eine Reihe einfacher und klarer Regeln zur Strukturierung
und zum konsistenten Schreiben von Dateien, um die Zusammenarbeit zu erleichtern
und die Lesbarkeit des Codes zu verbessern.

## Grundlegende Regeln

### 1. Zeilenbegrenzungen
- Beschränken Sie Zeilen auf 80 Zeichen.

### 2. Kommentare
- Keine Kommentare innerhalb von Funktionen, mit Ausnahme möglicher kurzer
  End-of-Line-Kommentare zur Erklärung komplexer Details.
- Alle Kommentare müssen in englischer Sprache verfasst sein.
- **Kommentarplatzierung**:
  - Dokumentieren Sie Klassen mit einem Doxygen-Kommentarblock vor der Klassendefinition,
    aber nicht innerhalb der Klasse.
  - Dokumentieren Sie Funktions-/Methodenimplementierungen mit einem Doxygen-Kommentarblock
    in der Implementierungsdatei (.cpp, .js, usw.), nicht in der Header-/Schnittstellendatei.
  - Duplizieren Sie die Dokumentation nicht zwischen Deklaration und Implementierung.
  - Bei der Dokumentation von APIs dokumentieren Sie die Schnittstelle und nicht die Implementierung.

### 3. Abstände
- Zwischen zwei Funktionen muss genau eine Leerzeile stehen.
- Innerhalb von Funktionen sind keine Leerzeilen erlaubt, außer nach der Liste der
  Variablendeklarationen am Anfang der Funktion.

### 4. Struktur
- Variablendeklarationen müssen am Anfang der Funktion gruppiert werden.
- Eine Funktion sollte idealerweise eine einzige klar definierte Aufgabe erfüllen.

### 5. Benennung
- Variablen- und Funktionsnamen müssen in camelCase und in englischer Sprache sein.
- Namen sollten beschreibend sein und ihre Verwendung klar widerspiegeln.

## Beispiel

### Header-Datei (.hpp)

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

### Implementierungsdatei (.cpp)

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

Durch die Einhaltung dieser Regeln erleichtern Sie die Zusammenarbeit und das Verständnis
sowohl für Menschen als auch für KI.

# Autor

Cezou
