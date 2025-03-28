# स्क्विड मानदंड

**स्क्विड मानदंड** फ़ाइलों को संरचित करने और सुसंगत तरीके से लिखने के लिए सरल और स्पष्ट नियमों का एक सेट है, 
जिससे सहयोग को सुविधाजनक बनाया जा सके और कोड की पठनीयता में सुधार किया जा सके।

## मूलभूत नियम

### 1. पंक्ति सीमाएँ
- पंक्तियों को 80 वर्णों तक सीमित करें।

### 2. टिप्पणियाँ
- फ़ंक्शन के अंदर कोई टिप्पणियाँ नहीं, सिवाय जटिल विवरणों को समझाने के लिए
  संभावित रूप से संक्षिप्त लाइन-एंड टिप्पणियों के।
- सभी टिप्पणियाँ अंग्रेजी में लिखी जानी चाहिए।
- **टिप्पणी स्थान**:
  - क्लास को क्लास परिभाषा से पहले Doxygen टिप्पणी ब्लॉक के साथ दस्तावेज करें,
    लेकिन क्लास के अंदर नहीं।
  - फ़ंक्शन/मेथड इम्प्लीमेंटेशन को हेडर/इंटरफ़ेस फ़ाइल में नहीं, बल्कि इम्प्लीमेंटेशन फ़ाइल
    (.cpp, .js, आदि) में Doxygen टिप्पणी ब्लॉक के साथ दस्तावेज करें।
  - घोषणा और कार्यान्वयन के बीच दस्तावेज़ीकरण को दोहराएं नहीं।
  - API का दस्तावेज़ीकरण करते समय, कार्यान्वयन के बजाय इंटरफ़ेस का दस्तावेज़ करें।

### 3. स्पेसिंग
- दो फ़ंक्शन के बीच ठीक एक खाली पंक्ति होनी चाहिए।
- फ़ंक्शन के अंदर कोई खाली पंक्तियाँ नहीं होनी चाहिए, सिवाय फ़ंक्शन के शुरू में
  वेरिएबल घोषणाओं की सूची के बाद।

### 4. संरचना
- वेरिएबल घोषणाएँ फ़ंक्शन के शुरू में समूहित होनी चाहिए।
- एक फ़ंक्शन को आदर्श रूप से एक स्पष्ट रूप से परिभाषित कार्य पूरा करना चाहिए।

### 5. नामकरण
- वेरिएबल और फ़ंक्शन के नाम कैमलकेस में और अंग्रेजी में होने चाहिए।
- नाम वर्णनात्मक होने चाहिए और उनके उपयोग को स्पष्ट रूप से दर्शाना चाहिए।

## उदाहरण

### हेडर फ़ाइल (.hpp)

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

### इम्प्लीमेंटेशन फ़ाइल (.cpp)

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

इन नियमों का पालन करके, आप मनुष्यों और AI दोनों के लिए सहयोग और समझ को सुविधाजनक बनाएंगे।

# लेखक

Cezou
