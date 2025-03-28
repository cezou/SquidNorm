# Squid 규범

**Squid 규범**은 협업을 용이하게 하고 코드 가독성을 향상시키기 위해 
일관된 방식으로 파일을 구조화하고 작성하기 위한 간단하고 명확한 규칙 세트입니다.

## 기본 규칙

### 1. 줄 제한
- 줄을 80자로 제한합니다.

### 2. 주석
- 함수 내부에는 주석을 달지 않습니다. 단, 복잡한 세부 사항을 설명하기 위한
  간단한 줄 끝 주석은 예외로 합니다.
- 모든 주석은 영어로 작성해야 합니다.
- **주석 위치**:
  - 클래스는 클래스 정의 전에 Doxygen 주석 블록으로 문서화하되, 클래스 내부에는
    문서화하지 않습니다.
  - 함수/메서드 구현은 헤더/인터페이스 파일이 아닌 구현 파일(.cpp, .js 등)에서
    Doxygen 주석 블록으로 문서화합니다.
  - 선언과 구현 사이에 문서를 중복하지 마십시오.
  - API를 문서화할 때는 구현보다 인터페이스를 문서화합니다.

### 3. 간격
- 두 함수 사이에는 정확히 한 개의 빈 줄이 있어야 합니다.
- 함수 내부에는 빈 줄이 허용되지 않습니다. 단, 함수 시작 부분에 있는 변수 선언
  목록 이후에는 예외로 합니다.

### 4. 구조
- 변수 선언은 함수의 시작 부분에 그룹화해야 합니다.
- 함수는 이상적으로 명확하게 정의된 단일 작업을 수행해야 합니다.

### 5. 이름 지정
- 변수 및 함수 이름은 camelCase로 작성하고 영어여야 합니다.
- 이름은 설명적이고 사용 목적을 명확히 반영해야 합니다.

## 예시

### 헤더 파일 (.hpp)

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

### 구현 파일 (.cpp)

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

이러한 규칙을 따르면 인간과 AI 모두를 위한 협업과 이해를 촉진할 수 있습니다.

# 작성자

Cezou
