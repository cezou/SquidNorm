# Норма Squid

**Норма Squid** — это набор простых и понятных правил для структурирования
и написания файлов последовательным образом, чтобы облегчить совместную работу
и улучшить читаемость кода.

## Основные правила

### 1. Ограничения строк
- Ограничивайте строки 80 символами.

### 2. Комментарии
- Никаких комментариев внутри функций, за исключением, возможно,
  кратких комментариев в конце строки для объяснения сложных деталей.
- Все комментарии должны быть написаны на английском языке.
- **Размещение комментариев**:
  - Документируйте классы с помощью блока комментариев Doxygen перед
    определением класса, но не внутри класса.
  - Документируйте реализации функций/методов с помощью блока комментариев
    Doxygen в файле реализации (.cpp, .js и т.д.), а не в файле заголовка/интерфейса.
  - Не дублируйте документацию между объявлением и реализацией.
  - При документировании API документируйте интерфейс, а не реализацию.

### 3. Интервалы
- Между двумя функциями должна быть ровно одна пустая строка.
- Внутри функций не допускаются пустые строки, за исключением строки после
  списка объявлений переменных в начале функции.

### 4. Структура
- Объявления переменных должны быть сгруппированы в начале функции.
- В идеале, функция должна выполнять одну четко определенную задачу.

### 5. Именование
- Имена переменных и функций должны быть в стиле camelCase и на английском языке.
- Имена должны быть описательными и четко отражать их использование.

## Пример

### Файл заголовка (.hpp)

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

### Файл реализации (.cpp)

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

Следуя этим правилам, вы облегчите совместную работу и понимание
как для людей, так и для ИИ.

# Автор

Cezou
