# Squid 規範

**Squid 規範**は、コードの可読性を向上させ、コラボレーションを容易にするために、
一貫した方法でファイルを構造化し、記述するためのシンプルで明確なルールのセットです。

## 基本ルール

### 1. 行の制限
- 行は80文字に制限します。

### 2. コメント
- 関数内にコメントを入れないでください。複雑な詳細を説明するための短い行末コメントを
  除きます。
- すべてのコメントは英語で書かれていなければなりません。
- **コメントの配置**:
  - クラスはクラス定義の前にDoxygenコメントブロックで文書化し、クラス内では文書化しません。
  - 関数/メソッドの実装は、ヘッダー/インターフェースファイルではなく、実装ファイル
    （.cpp、.jsなど）でDoxygenコメントブロックで文書化します。
  - 宣言と実装の間でドキュメントを重複させないでください。
  - APIを文書化する場合は、実装よりもインターフェースを文書化します。

### 3. スペーシング
- 2つの関数の間には、ちょうど1つの空行が必要です。
- 関数内では空行は許可されていません。ただし、関数の先頭にある変数宣言のリストの後は例外です。

### 4. 構造
- 変数宣言は関数の先頭にまとめる必要があります。
- 関数は理想的には、明確に定義された単一のタスクを実行する必要があります。

### 5. 命名
- 変数および関数名はキャメルケースで、英語である必要があります。
- 名前は説明的で、使用目的を明確に反映する必要があります。

## 例

### ヘッダーファイル (.hpp)

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

### 実装ファイル (.cpp)

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

これらのルールに従うことで、人間とAIの両方にとって、コラボレーションと理解を
容易にします。

# 作者

Cezou
