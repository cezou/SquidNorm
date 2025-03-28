# Squid 规范

**Squid 规范**是一套简单明了的规则，用于以一致的方式构建和编写文件，
以促进协作并提高代码可读性。

## 基本规则

### 1. 行限制
- 将行限制为80个字符。

### 2. 注释
- 函数内部不允许注释，除了可能在行尾添加简短注释以解释复杂细节。
- 所有注释必须用英语编写。
- **注释位置**:
  - 在类定义前使用Doxygen注释块来记录类，而不是在类内部。
  - 在实现文件（.cpp，.js等）中使用Doxygen注释块来记录函数/方法实现，
    而不是在头文件/接口文件中。
  - 不要在声明和实现之间重复文档。
  - 在记录API时，记录接口而不是实现。

### 3. 间距
- 两个函数之间必须正好有一个空行。
- 函数内部不允许有空行，除了在函数开始处的变量声明列表之后。

### 4. 结构
- 变量声明必须在函数开始处分组。
- 一个函数理想情况下应该完成一个明确定义的任务。

### 5. 命名
- 变量和函数名称必须使用驼峰式命名法（camelCase），并且用英语命名。
- 名称应该具有描述性并清楚地反映其用途。

## 示例

### 头文件 (.hpp)

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

### 实现文件 (.cpp)

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

通过遵循这些规则，您将为人类和人工智能促进协作和理解。

# 作者

Cezou
