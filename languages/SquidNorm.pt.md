# Norma Squid

A **Norma Squid** é um conjunto de regras simples e claras para estruturar
e escrever arquivos de maneira consistente, para facilitar a colaboração
e melhorar a legibilidade do código.

## Regras Fundamentais

### 1. Limites de Linha
- Limite as linhas a 80 caracteres.

### 2. Comentários
- Nenhum comentário dentro de funções, exceto potencialmente breves
  comentários de fim de linha para explicar detalhes complexos.
- Todos os comentários devem ser escritos em inglês.
- **Posicionamento de comentários**:
  - Documente as classes com um bloco de comentário Doxygen antes da definição
    da classe, mas não dentro da classe.
  - Documente as implementações de funções/métodos com um bloco de comentário
    Doxygen no arquivo de implementação (.cpp, .js, etc.), não no arquivo
    de cabeçalho/interface.
  - Não duplique a documentação entre a declaração e a implementação.
  - Ao documentar APIs, documente a interface em vez da implementação.

### 3. Espaçamento
- Entre duas funções, deve haver exatamente uma linha vazia.
- Dentro das funções, nenhuma linha vazia é permitida, exceto após a lista
  de declarações de variáveis no início da função.

### 4. Estrutura
- As declarações de variáveis devem ser agrupadas no início da função.
- Uma função deve idealmente realizar uma única tarefa claramente definida.

### 5. Nomenclatura
- Os nomes de variáveis e funções devem estar em camelCase e em inglês.
- Os nomes devem ser descritivos e refletir claramente seu uso.

## Exemplo

### Arquivo de cabeçalho (.hpp)

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

### Arquivo de implementação (.cpp)

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

Seguindo essas regras, você facilitará a colaboração e o entendimento
tanto para humanos quanto para IA.

# Autor

Cezou
