var allDevices = [
    // ===== SAMSUNG =====
    // Galaxy S24
    { id: 1, brand: 'samsung', model: 'Samsung Galaxy S24 Ultra', specs: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 5000mAh' },
    { id: 2, brand: 'samsung', model: 'Samsung Galaxy S24+', specs: '6.7" Dynamic AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 4900mAh' },
    { id: 3, brand: 'samsung', model: 'Samsung Galaxy S24', specs: '6.2" Dynamic AMOLED, Snapdragon 8 Gen 3, 8GB RAM, 4000mAh' },
    { id: 4, brand: 'samsung', model: 'Samsung Galaxy S23 Ultra', specs: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 5000mAh' },
    { id: 5, brand: 'samsung', model: 'Samsung Galaxy S23+', specs: '6.6" Dynamic AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 4700mAh' },
    { id: 6, brand: 'samsung', model: 'Samsung Galaxy S23', specs: '6.1" Dynamic AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 3900mAh' },
    { id: 7, brand: 'samsung', model: 'Samsung Galaxy S22 Ultra 5G', specs: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 1, 12GB RAM, 5000mAh' },
    { id: 8, brand: 'samsung', model: 'Samsung Galaxy S22+', specs: '6.6" Dynamic AMOLED, Snapdragon 8 Gen 1, 8GB RAM, 4500mAh' },
    { id: 9, brand: 'samsung', model: 'Samsung Galaxy S22', specs: '6.1" Dynamic AMOLED, Snapdragon 8 Gen 1, 8GB RAM, 3700mAh' },
    { id: 10, brand: 'samsung', model: 'Samsung Galaxy S21 Ultra 5G', specs: '6.8" Dynamic AMOLED, Exynos 2100, 12GB RAM, 5000mAh' },
    { id: 11, brand: 'samsung', model: 'Samsung Galaxy S21+', specs: '6.7" Dynamic AMOLED, Exynos 2100, 8GB RAM, 4800mAh' },
    { id: 12, brand: 'samsung', model: 'Samsung Galaxy S21', specs: '6.2" Dynamic AMOLED, Exynos 2100, 8GB RAM, 4000mAh' },
    { id: 13, brand: 'samsung', model: 'Samsung Galaxy S20 Ultra 5G', specs: '6.9" Dynamic AMOLED, Exynos 990, 12GB RAM, 5000mAh' },
    { id: 14, brand: 'samsung', model: 'Samsung Galaxy S20+', specs: '6.7" Dynamic AMOLED, Exynos 990, 8GB RAM, 4500mAh' },
    { id: 15, brand: 'samsung', model: 'Samsung Galaxy S20', specs: '6.2" Dynamic AMOLED, Exynos 990, 8GB RAM, 4000mAh' },
    { id: 16, brand: 'samsung', model: 'Samsung Galaxy S20 FE', specs: '6.5" Super AMOLED, Snapdragon 865, 6GB RAM, 4500mAh' },
    { id: 17, brand: 'samsung', model: 'Samsung Galaxy S10+', specs: '6.4" Dynamic AMOLED, Exynos 9820, 8GB RAM, 4100mAh' },
    { id: 18, brand: 'samsung', model: 'Samsung Galaxy S10', specs: '6.1" Dynamic AMOLED, Exynos 9820, 8GB RAM, 3400mAh' },
    { id: 19, brand: 'samsung', model: 'Samsung Galaxy S10e', specs: '5.8" Dynamic AMOLED, Exynos 9820, 6GB RAM, 3100mAh' },
    { id: 20, brand: 'samsung', model: 'Samsung Galaxy S9+', specs: '6.2" Super AMOLED, Exynos 9810, 6GB RAM, 3500mAh' },
    { id: 21, brand: 'samsung', model: 'Samsung Galaxy S9', specs: '5.8" Super AMOLED, Exynos 9810, 4GB RAM, 3000mAh' },
    { id: 22, brand: 'samsung', model: 'Samsung Galaxy S8+', specs: '6.2" Super AMOLED, Exynos 8895, 4GB RAM, 3500mAh' },
    { id: 23, brand: 'samsung', model: 'Samsung Galaxy S8', specs: '5.8" Super AMOLED, Exynos 8895, 4GB RAM, 3000mAh' },
    { id: 24, brand: 'samsung', model: 'Samsung Galaxy S7 Edge', specs: '5.5" Super AMOLED, Exynos 8890, 4GB RAM, 3600mAh' },
    { id: 25, brand: 'samsung', model: 'Samsung Galaxy S7', specs: '5.1" Super AMOLED, Exynos 8890, 4GB RAM, 3000mAh' },
    { id: 26, brand: 'samsung', model: 'Samsung Galaxy S6 Edge+', specs: '5.7" Super AMOLED, Exynos 7420, 4GB RAM, 3000mAh' },
    { id: 27, brand: 'samsung', model: 'Samsung Galaxy S6', specs: '5.1" Super AMOLED, Exynos 7420, 3GB RAM, 2550mAh' },
    { id: 28, brand: 'samsung', model: 'Samsung Galaxy S5', specs: '5.1" Super AMOLED, Snapdragon 801, 2GB RAM, 2800mAh' },
    { id: 29, brand: 'samsung', model: 'Samsung Galaxy S4', specs: '5.0" Super AMOLED, Exynos 5410, 2GB RAM, 2600mAh' },
    { id: 30, brand: 'samsung', model: 'Samsung Galaxy S3', specs: '4.8" Super AMOLED, Exynos 4412, 1GB RAM, 2100mAh' },
    { id: 31, brand: 'samsung', model: 'Samsung Galaxy S2', specs: '4.3" Super AMOLED, Exynos 4210, 1GB RAM, 1650mAh' },
    { id: 32, brand: 'samsung', model: 'Samsung Galaxy S (2010)', specs: '4.0" Super AMOLED, Exynos 3110, 512MB RAM, 1500mAh' },
    // Galaxy Z Fold / Flip
    { id: 33, brand: 'samsung', model: 'Samsung Galaxy Z Fold5', specs: '7.6" Foldable AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 4400mAh' },
    { id: 34, brand: 'samsung', model: 'Samsung Galaxy Z Fold4', specs: '7.6" Foldable AMOLED, Snapdragon 8+ Gen 1, 12GB RAM, 4400mAh' },
    { id: 35, brand: 'samsung', model: 'Samsung Galaxy Z Fold3', specs: '7.6" Foldable AMOLED, Snapdragon 888, 12GB RAM, 4400mAh' },
    { id: 36, brand: 'samsung', model: 'Samsung Galaxy Z Fold2', specs: '7.6" Foldable AMOLED, Snapdragon 865+, 12GB RAM, 4500mAh' },
    { id: 37, brand: 'samsung', model: 'Samsung Galaxy Z Flip5', specs: '6.7" Foldable AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 3700mAh' },
    { id: 38, brand: 'samsung', model: 'Samsung Galaxy Z Flip4', specs: '6.7" Foldable AMOLED, Snapdragon 8+ Gen 1, 8GB RAM, 3700mAh' },
    { id: 39, brand: 'samsung', model: 'Samsung Galaxy Z Flip3', specs: '6.7" Foldable AMOLED, Snapdragon 888, 8GB RAM, 3300mAh' },
    { id: 40, brand: 'samsung', model: 'Samsung Galaxy Z Flip', specs: '6.7" Foldable AMOLED, Snapdragon 855+, 8GB RAM, 3300mAh' },
    // Galaxy Note
    { id: 41, brand: 'samsung', model: 'Samsung Galaxy Note20 Ultra', specs: '6.9" Dynamic AMOLED, Exynos 990, 12GB RAM, 4500mAh' },
    { id: 42, brand: 'samsung', model: 'Samsung Galaxy Note20', specs: '6.7" Super AMOLED, Exynos 990, 8GB RAM, 4300mAh' },
    { id: 43, brand: 'samsung', model: 'Samsung Galaxy Note10+', specs: '6.8" Dynamic AMOLED, Exynos 9825, 12GB RAM, 4300mAh' },
    { id: 44, brand: 'samsung', model: 'Samsung Galaxy Note9', specs: '6.4" Super AMOLED, Exynos 9810, 6GB RAM, 4000mAh' },
    { id: 45, brand: 'samsung', model: 'Samsung Galaxy Note8', specs: '6.3" Super AMOLED, Exynos 8895, 6GB RAM, 3300mAh' },
    // Galaxy A
    { id: 46, brand: 'samsung', model: 'Samsung Galaxy A55', specs: '6.6" Super AMOLED, Exynos 1480, 8GB RAM, 5000mAh' },
    { id: 47, brand: 'samsung', model: 'Samsung Galaxy A35', specs: '6.6" Super AMOLED, Exynos 1380, 6GB RAM, 5000mAh' },
    // Galaxy J
    { id: 48, brand: 'samsung', model: 'Samsung Galaxy J2 Core', specs: '5.0" PLS, Exynos 7570, 1GB RAM, 2600mAh' },
    { id: 49, brand: 'samsung', model: 'Samsung Galaxy J2', specs: '4.7" Super AMOLED, Exynos 3475, 1.5GB RAM, 2000mAh' },
    { id: 50, brand: 'samsung', model: 'Samsung Galaxy J3', specs: '5.0" Super AMOLED, Exynos 3475, 1.5GB RAM, 2600mAh' },
    { id: 51, brand: 'samsung', model: 'Samsung Galaxy J4', specs: '5.5" Super AMOLED, Exynos 7570, 2GB RAM, 3000mAh' },
    { id: 52, brand: 'samsung', model: 'Samsung Galaxy J5', specs: '5.0" Super AMOLED, Snapdragon 410, 1.5GB RAM, 2600mAh' },
    { id: 53, brand: 'samsung', model: 'Samsung Galaxy J6', specs: '5.6" Super AMOLED, Exynos 7870, 3GB RAM, 3000mAh' },
    { id: 54, brand: 'samsung', model: 'Samsung Galaxy J7', specs: '5.5" Super AMOLED, Exynos 7580, 1.5GB RAM, 3000mAh' },
    { id: 55, brand: 'samsung', model: 'Samsung Galaxy J8', specs: '6.0" Super AMOLED, Snapdragon 450, 4GB RAM, 3500mAh' },

    // ===== APPLE =====
    { id: 100, brand: 'apple', model: 'Apple iPhone 17 Pro Max', specs: '6.9" OLED, A19 Pro, 12GB RAM, 5000mAh' },
    { id: 101, brand: 'apple', model: 'Apple iPhone 17 Pro', specs: '6.3" OLED, A19 Pro, 8GB RAM, 4000mAh' },
    { id: 102, brand: 'apple', model: 'Apple iPhone 17', specs: '6.1" OLED, A19, 8GB RAM, 3800mAh' },
    { id: 103, brand: 'apple', model: 'Apple iPhone 16 Pro Max', specs: '6.9" OLED, A18 Pro, 8GB RAM, 4685mAh' },
    { id: 104, brand: 'apple', model: 'Apple iPhone 16 Pro', specs: '6.3" OLED, A18 Pro, 8GB RAM, 3582mAh' },
    { id: 105, brand: 'apple', model: 'Apple iPhone 16 Plus', specs: '6.7" OLED, A18, 6GB RAM, 4674mAh' },
    { id: 106, brand: 'apple', model: 'Apple iPhone 16', specs: '6.1" OLED, A18, 6GB RAM, 3561mAh' },
    { id: 107, brand: 'apple', model: 'Apple iPhone 15 Pro Max', specs: '6.7" OLED, A17 Pro, 8GB RAM, 4422mAh' },
    { id: 108, brand: 'apple', model: 'Apple iPhone 15 Pro', specs: '6.1" OLED, A17 Pro, 8GB RAM, 3274mAh' },
    { id: 109, brand: 'apple', model: 'Apple iPhone 15 Plus', specs: '6.7" OLED, A16 Bionic, 6GB RAM, 4383mAh' },
    { id: 110, brand: 'apple', model: 'Apple iPhone 15', specs: '6.1" OLED, A16 Bionic, 6GB RAM, 3349mAh' },
    { id: 111, brand: 'apple', model: 'Apple iPhone 14 Pro Max', specs: '6.7" OLED, A16 Bionic, 6GB RAM, 4323mAh' },
    { id: 112, brand: 'apple', model: 'Apple iPhone 14 Pro', specs: '6.1" OLED, A16 Bionic, 6GB RAM, 3200mAh' },
    { id: 113, brand: 'apple', model: 'Apple iPhone 14 Plus', specs: '6.7" OLED, A15 Bionic, 6GB RAM, 4325mAh' },
    { id: 114, brand: 'apple', model: 'Apple iPhone 14', specs: '6.1" OLED, A15 Bionic, 6GB RAM, 3279mAh' },
    { id: 115, brand: 'apple', model: 'Apple iPhone 13 Pro Max', specs: '6.7" OLED, A15 Bionic, 6GB RAM, 4352mAh' },
    { id: 116, brand: 'apple', model: 'Apple iPhone 13 Pro', specs: '6.1" OLED, A15 Bionic, 6GB RAM, 3095mAh' },
    { id: 117, brand: 'apple', model: 'Apple iPhone 13', specs: '6.1" OLED, A15 Bionic, 4GB RAM, 3227mAh' },
    { id: 118, brand: 'apple', model: 'Apple iPhone 12 Pro Max', specs: '6.7" OLED, A14 Bionic, 6GB RAM, 3687mAh' },
    { id: 119, brand: 'apple', model: 'Apple iPhone 12 Pro', specs: '6.1" OLED, A14 Bionic, 6GB RAM, 2815mAh' },
    { id: 120, brand: 'apple', model: 'Apple iPhone 12', specs: '6.1" OLED, A14 Bionic, 4GB RAM, 2815mAh' },
    { id: 121, brand: 'apple', model: 'Apple iPhone 11 Pro Max', specs: '6.5" OLED, A13 Bionic, 4GB RAM, 3969mAh' },
    { id: 122, brand: 'apple', model: 'Apple iPhone 11 Pro', specs: '5.8" OLED, A13 Bionic, 4GB RAM, 3046mAh' },
    { id: 123, brand: 'apple', model: 'Apple iPhone 11', specs: '6.1" LCD, A13 Bionic, 4GB RAM, 3110mAh' },
    { id: 124, brand: 'apple', model: 'Apple iPhone XS Max', specs: '6.5" OLED, A12 Bionic, 4GB RAM, 3174mAh' },
    { id: 125, brand: 'apple', model: 'Apple iPhone XS', specs: '5.8" OLED, A12 Bionic, 4GB RAM, 2658mAh' },
    { id: 126, brand: 'apple', model: 'Apple iPhone XR', specs: '6.1" LCD, A12 Bionic, 3GB RAM, 2942mAh' },
    { id: 127, brand: 'apple', model: 'Apple iPhone X', specs: '5.8" OLED, A11 Bionic, 3GB RAM, 2716mAh' },
    { id: 128, brand: 'apple', model: 'Apple iPhone 8 Plus', specs: '5.5" LCD, A11 Bionic, 3GB RAM, 2691mAh' },
    { id: 129, brand: 'apple', model: 'Apple iPhone 8', specs: '4.7" LCD, A11 Bionic, 2GB RAM, 1821mAh' },
    { id: 130, brand: 'apple', model: 'Apple iPhone 7 Plus', specs: '5.5" LCD, A10 Fusion, 3GB RAM, 2900mAh' },
    { id: 131, brand: 'apple', model: 'Apple iPhone 7', specs: '4.7" LCD, A10 Fusion, 2GB RAM, 1960mAh' },
    { id: 132, brand: 'apple', model: 'Apple iPhone SE (3rd gen)', specs: '4.7" Retina, A15 Bionic, 4GB RAM, 2018mAh' },
    { id: 133, brand: 'apple', model: 'Apple iPhone SE (2nd gen)', specs: '4.7" Retina, A13 Bionic, 3GB RAM, 1821mAh' },
    { id: 134, brand: 'apple', model: 'Apple iPhone SE (1st gen)', specs: '4.0" Retina, A9, 2GB RAM, 1624mAh' },

    // ===== SONY XPERIA =====
    { id: 200, brand: 'sony', model: 'Sony Xperia 1 VIII', specs: '6.5" 4K OLED, Snapdragon 8 Gen 4, 12GB RAM, 5000mAh' },
    { id: 201, brand: 'sony', model: 'Sony Xperia 1 VII', specs: '6.5" 4K OLED, Snapdragon 8 Gen 3, 12GB RAM, 5000mAh' },
    { id: 202, brand: 'sony', model: 'Sony Xperia 1 V', specs: '6.5" 4K OLED, Snapdragon 8 Gen 2, 12GB RAM, 5000mAh' },
    { id: 203, brand: 'sony', model: 'Sony Xperia 5 V', specs: '6.1" OLED, Snapdragon 8 Gen 2, 8GB RAM, 5000mAh' },
    { id: 204, brand: 'sony', model: 'Sony Xperia 10 V', specs: '6.1" OLED, Snapdragon 695, 6GB RAM, 5000mAh' },
    { id: 205, brand: 'sony', model: 'Sony Xperia PRO-I', specs: '6.5" 4K OLED, Snapdragon 888, 12GB RAM, 4500mAh, 1" сенсор' },
    { id: 206, brand: 'sony', model: 'Sony Xperia Z5 Premium', specs: '5.5" 4K IPS, Snapdragon 810, 3GB RAM, 3430mAh' },
    { id: 207, brand: 'sony', model: 'Sony Xperia Z3', specs: '5.15" IPS, Snapdragon 801, 3GB RAM, 3100mAh' },
    { id: 208, brand: 'sony', model: 'Sony Xperia Z1', specs: '5.0" TFT, Snapdragon 800, 2GB RAM, 3000mAh' },
    { id: 209, brand: 'sony', model: 'Sony Xperia X10', specs: '4.0" TFT, Snapdragon S1, 1GB RAM, 1500mAh' },

    // ===== XIAOMI =====
    { id: 300, brand: 'xiaomi', model: 'Xiaomi 17 Ultra', specs: '6.73" LTPO AMOLED, Snapdragon 8 Gen 4, 16GB RAM, 5500mAh' },
    { id: 301, brand: 'xiaomi', model: 'Xiaomi 17', specs: '6.36" AMOLED, Snapdragon 8 Gen 4, 12GB RAM, 4700mAh' },
    { id: 302, brand: 'xiaomi', model: 'Xiaomi 15 Ultra', specs: '6.73" LTPO AMOLED, Snapdragon 8 Gen 3, 16GB RAM, 5300mAh' },
    { id: 303, brand: 'xiaomi', model: 'Xiaomi 15', specs: '6.36" AMOLED, Snapdragon 8 Gen 3, 8GB RAM, 4610mAh' },
    { id: 304, brand: 'xiaomi', model: 'Xiaomi 14 Ultra', specs: '6.73" LTPO AMOLED, Snapdragon 8 Gen 3, 16GB RAM, 5300mAh' },
    { id: 305, brand: 'xiaomi', model: 'Xiaomi 14', specs: '6.36" AMOLED, Snapdragon 8 Gen 3, 8GB RAM, 4610mAh' },
    { id: 306, brand: 'xiaomi', model: 'Xiaomi 13T Pro', specs: '6.67" AMOLED, Dimensity 9200+, 12GB RAM, 5000mAh' },
    { id: 307, brand: 'xiaomi', model: 'Redmi Note 15 Pro+ 5G', specs: '6.67" AMOLED, Snapdragon 7s Gen 3, 8GB RAM, 5000mAh' },
    { id: 308, brand: 'xiaomi', model: 'Redmi Note 13 Pro (200MP)', specs: '6.67" AMOLED, Snapdragon 7s Gen 2, 8GB RAM, 5100mAh, 200 Мп' },
    { id: 309, brand: 'xiaomi', model: 'Redmi 13C 5G', specs: '6.74" IPS, Dimensity 6100+, 4GB RAM, 5000mAh' },
    { id: 310, brand: 'xiaomi', model: 'POCO F8 Pro', specs: '6.67" AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 5000mAh' },

    // ===== NOKIA =====
    { id: 400, brand: 'nokia', model: 'Nokia Lumia 1020', specs: '4.5" AMOLED, Snapdragon S4, 2GB RAM, 2000mAh, 41 Мп' },
    { id: 401, brand: 'nokia', model: 'Nokia Lumia 930', specs: '5.0" AMOLED, Snapdragon 800, 2GB RAM, 2420mAh' },
    { id: 402, brand: 'nokia', model: 'Nokia Lumia 1520', specs: '6.0" IPS, Snapdragon 800, 2GB RAM, 3400mAh' },
    { id: 403, brand: 'nokia', model: 'Nokia X30 5G', specs: '6.43" AMOLED, Snapdragon 695, 6GB RAM, 4200mAh' },
    { id: 404, brand: 'nokia', model: 'Nokia G60 5G', specs: '6.58" IPS, Snapdragon 695, 6GB RAM, 4500mAh' },
    { id: 405, brand: 'nokia', model: 'Nokia 3310 (переиздание)', specs: '2.4" QVGA, 16MB, 1200mAh, кнопочный' },

    // ===== REALME =====
    { id: 500, brand: 'realme', model: 'realme GT 8 Pro', specs: '6.78" AMOLED, Snapdragon 8 Gen 4, 12GB RAM, 5500mAh' },
    { id: 501, brand: 'realme', model: 'realme GT 7 Pro', specs: '6.78" AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 5400mAh' },
    { id: 502, brand: 'realme', model: 'realme 16 Pro+ 5G', specs: '6.7" AMOLED, Snapdragon 7s Gen 2, 8GB RAM, 5000mAh' },

    // ===== HONOR =====
    { id: 600, brand: 'honor', model: 'HONOR 600 Pro', specs: '6.78" OLED, Snapdragon 8 Gen 3, 12GB RAM, 5200mAh' },
    { id: 601, brand: 'honor', model: 'HONOR 200 Pro', specs: '6.78" OLED, Snapdragon 8s Gen 3, 12GB RAM, 5200mAh' },

    // ===== ZTE =====
    { id: 700, brand: 'zte', model: 'ZTE Axon 40 Ultra', specs: '6.8" AMOLED, Snapdragon 8 Gen 1, 12GB RAM, 5000mAh' },
    { id: 701, brand: 'zte', model: 'ZTE nubia Red Magic 8 Pro+', specs: '6.8" AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 6000mAh' },

    // ===== GOOGLE =====
    { id: 800, brand: 'google', model: 'Google Pixel 8 Pro', specs: '6.7" OLED, Tensor G3, 12GB RAM, 5050mAh' },
    { id: 801, brand: 'google', model: 'Google Pixel 8', specs: '6.2" OLED, Tensor G3, 8GB RAM, 4575mAh' },
    { id: 802, brand: 'google', model: 'Google Pixel 7 Pro', specs: '6.7" OLED, Tensor G2, 12GB RAM, 5000mAh' },

    // ===== ONEPLUS =====
    { id: 900, brand: 'oneplus', model: 'OnePlus 12', specs: '6.82" LTPO AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 5400mAh' },
    { id: 901, brand: 'oneplus', model: 'OnePlus 12R', specs: '6.78" LTPO AMOLED, Snapdragon 8 Gen 2, 8GB RAM, 5500mAh' },

    // ===== HUAWEI =====
    { id: 1000, brand: 'huawei', model: 'Huawei P60 Pro', specs: '6.67" OLED, Snapdragon 8+ Gen 1, 8GB RAM, 4815mAh' },
    { id: 1001, brand: 'huawei', model: 'Huawei Mate 50 Pro', specs: '6.74" OLED, Snapdragon 8+ Gen 1, 8GB RAM, 4700mAh' },

    // ===== MOTOROLA =====
    { id: 1100, brand: 'motorola', model: 'Motorola Edge 40 Pro', specs: '6.67" OLED, Snapdragon 8 Gen 2, 12GB RAM, 4600mAh' },
    { id: 1101, brand: 'motorola', model: 'Motorola Edge 40', specs: '6.55" OLED, Dimensity 8020, 8GB RAM, 4400mAh' },

    // ===== LG =====
    { id: 1200, brand: 'lg', model: 'LG Wing', specs: '6.8" P-OLED, Snapdragon 765G, 8GB RAM, 4000mAh' },
    { id: 1201, brand: 'lg', model: 'LG Velvet', specs: '6.8" P-OLED, Snapdragon 765G, 6GB RAM, 4300mAh' },

    // ===== HP iPAQ =====
    { id: 1300, brand: 'hp', model: 'HP iPAQ H1940', specs: '3.5" TFT, Samsung S3C2410 266MHz, 64MB RAM, 900mAh, Windows Mobile 2003' },
    { id: 1301, brand: 'hp', model: 'HP iPAQ H2210', specs: '3.5" TFT, Intel PXA250 400MHz, 64MB RAM, 900mAh, CF+SDIO' },
    { id: 1302, brand: 'hp', model: 'HP iPAQ H4150', specs: '3.5" TFT, Intel PXA270 400MHz, 64MB RAM, 1000mAh, Wi-Fi+BT' },
    { id: 1303, brand: 'hp', model: 'HP iPAQ hx4700', specs: '4.0" VGA 480x640, Intel PXA270 624MHz, 64MB RAM, 1800mAh, флагман' },
    { id: 1304, brand: 'hp', model: 'HP iPAQ hx2790', specs: '3.5" TFT, Intel PXA270 624MHz, 128MB RAM, 1440mAh, топовый' },
    { id: 1305, brand: 'hp', model: 'HP iPAQ 614 Business Navigator', specs: '2.8" TFT, 520MHz, 128MB RAM, 1590mAh, GPS+UMTS' },
    { id: 1306, brand: 'hp', model: 'HP iPAQ 912 Business Messenger', specs: '2.8" TFT, 520MHz, 128MB RAM, 1590mAh, QWERTY+GPS+UMTS' },
    { id: 1307, brand: 'hp', model: 'HP Veer', specs: '2.6" TFT, Qualcomm 7230 800MHz, 512MB RAM, 8GB, QWERTY, webOS' },
    { id: 1308, brand: 'hp', model: 'HP Pre 3', specs: '3.6" WVGA, Qualcomm 1.4GHz, 512MB RAM, 8GB, QWERTY, 5 Мп, webOS' },
    { id: 1309, brand: 'hp', model: 'HP Poly Edge V250', specs: 'IP-телефон, 4 линии, PoE, Ethernet' },
    { id: 1310, brand: 'hp', model: 'HP Poly CCX 500', specs: 'IP-телефон, 6 линий, сенсорный экран, Bluetooth' },
    { id: 1311, brand: 'hp', model: 'HP Poly VVX 450', specs: 'IP-телефон, 16 линий, цветной дисплей, PoE' },
    { id: 1312, brand: 'hp', model: 'HP Poly Trio C60', specs: 'Конференц-телефон, 6 микрофонов, Bluetooth' },

    // ===== ASUS (ВСЕ МОДЕЛИ) =====
    // 1. Кнопочные телефоны J-серия
    { id: 2000, brand: 'asus', model: 'ASUS J100', specs: 'Кнопочный, раскладушка, 1.8" TFT' },
    { id: 2001, brand: 'asus', model: 'ASUS J101', specs: 'Кнопочный, раскладушка, 1.8" TFT' },
    { id: 2002, brand: 'asus', model: 'ASUS J102', specs: 'Кнопочный, раскладушка, 1.8" TFT' },
    { id: 2003, brand: 'asus', model: 'ASUS J103', specs: 'Кнопочный, раскладушка, 1.8" TFT' },
    { id: 2004, brand: 'asus', model: 'ASUS J121', specs: 'Кнопочный, раскладушка, 1.8" TFT' },
    { id: 2005, brand: 'asus', model: 'ASUS J201', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2006, brand: 'asus', model: 'ASUS J202', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2007, brand: 'asus', model: 'ASUS J206', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2008, brand: 'asus', model: 'ASUS J208', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2009, brand: 'asus', model: 'ASUS J501', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2010, brand: 'asus', model: 'ASUS J502', specs: 'Кнопочный, раскладушка, 2.0" TFT' },
    { id: 2011, brand: 'asus', model: 'ASUS J601', specs: 'Кнопочный, раскладушка, 2.2" TFT' },
    // V-серия (моноблоки)
    { id: 2012, brand: 'asus', model: 'ASUS V66', specs: 'Кнопочный, моноблок, 1.8" TFT' },
    { id: 2013, brand: 'asus', model: 'ASUS V70', specs: 'Кнопочный, моноблок, 1.8" TFT' },
    { id: 2014, brand: 'asus', model: 'ASUS V75', specs: 'Кнопочный, моноблок, 1.8" TFT' },
    // M-серия (музыкальные)
    { id: 2015, brand: 'asus', model: 'ASUS M303', specs: 'Кнопочный, музыкальный, FM-радио, плеер' },
    { id: 2016, brand: 'asus', model: 'ASUS M307', specs: 'Кнопочный, музыкальный, FM-радио, плеер' },
    { id: 2017, brand: 'asus', model: 'ASUS M310', specs: 'Кнопочный, музыкальный, FM-радио, плеер' },
    // P-серия (Windows Mobile КПК)
    { id: 2018, brand: 'asus', model: 'ASUS P505', specs: '2.8" TFT, 416MHz, 64MB RAM, КПК-телефон, WM' },
    { id: 2019, brand: 'asus', model: 'ASUS P525', specs: '2.8" TFT, 416MHz, 64MB RAM, WM, QWERTY' },
    { id: 2020, brand: 'asus', model: 'ASUS P526', specs: '2.8" TFT, 416MHz, 64MB RAM, WM, GPS' },
    { id: 2021, brand: 'asus', model: 'ASUS P527', specs: '2.8" TFT, 416MHz, 128MB RAM, WM, GPS' },
    { id: 2022, brand: 'asus', model: 'ASUS P535', specs: '2.8" TFT, 520MHz, 64MB RAM, WM, GPS' },
    { id: 2023, brand: 'asus', model: 'ASUS P550', specs: '3.5" TFT, 520MHz, 128MB RAM, WM, GPS' },
    { id: 2024, brand: 'asus', model: 'ASUS P552', specs: '2.8" TFT, 624MHz, 128MB RAM, WM' },
    { id: 2025, brand: 'asus', model: 'ASUS P552w', specs: '2.8" TFT, 624MHz, 128MB RAM, WM, Wi-Fi' },
    { id: 2026, brand: 'asus', model: 'ASUS P560', specs: '3.5" TFT, 520MHz, 128MB RAM, WM, GPS' },
    { id: 2027, brand: 'asus', model: 'ASUS P565', specs: '2.8" TFT, 800MHz, 128MB RAM, WM' },
    { id: 2028, brand: 'asus', model: 'ASUS P735', specs: '2.8" TFT, 520MHz, 64MB RAM, WM' },
    { id: 2029, brand: 'asus', model: 'ASUS P750', specs: '2.8" TFT, 520MHz, 128MB RAM, WM, QWERTY' },
    { id: 2030, brand: 'asus', model: 'ASUS P835', specs: '3.5" TFT, 528MHz, 256MB RAM, WM, HSPA' },
    // Z-серия (бюджетные)
    { id: 2031, brand: 'asus', model: 'ASUS Z222', specs: 'Кнопочный, бюджетный' },
    { id: 2032, brand: 'asus', model: 'ASUS Z801', specs: 'Кнопочный, бюджетный' },
    // M930 (WM с QWERTY)
    { id: 2033, brand: 'asus', model: 'ASUS M930', specs: '2.6" TFT, 520MHz, 128MB RAM, раскладушка, QWERTY, WM' },
    { id: 2034, brand: 'asus', model: 'ASUS M930w', specs: '2.6" TFT, 520MHz, 128MB RAM, раскладушка, QWERTY, WM' },
    // T-серия (тачфоны WM)
    { id: 2035, brand: 'asus', model: 'ASUS T20', specs: '2.8" TFT, 416MHz, 128MB RAM, WM' },
    { id: 2036, brand: 'asus', model: 'ASUS T25', specs: '2.8" TFT, 416MHz, 128MB RAM, WM' },
    { id: 2037, brand: 'asus', model: 'ASUS T30', specs: '2.8" TFT, 416MHz, 128MB RAM, WM' },
    // Padfone (гибриды)
    { id: 2038, brand: 'asus', model: 'ASUS PadFone (2012)', specs: '4.3" qHD, Snapdragon S4, 1GB RAM, трансформер с планшетом' },
    { id: 2039, brand: 'asus', model: 'ASUS PadFone 2', specs: '4.7" HD, Snapdragon S4 Pro, 2GB RAM, 10.1" док-станция' },
    { id: 2040, brand: 'asus', model: 'ASUS PadFone Infinity', specs: '5.0" Full HD, Snapdragon 600, 2GB RAM, 10.1" док' },
    { id: 2041, brand: 'asus', model: 'ASUS PadFone Infinity 2', specs: '5.0" Full HD, Snapdragon 800, 2GB RAM, улучшенный' },
    { id: 2042, brand: 'asus', model: 'ASUS PadFone S', specs: '5.0" Full HD, Snapdragon 800, 2GB RAM, водозащита' },
    { id: 2043, brand: 'asus', model: 'ASUS PadFone X', specs: '5.0" Full HD, Snapdragon 800, 2GB RAM, эксклюзив AT&T' },

    // ZenFone 4/5/6 (первые)
    { id: 2044, brand: 'asus', model: 'ASUS ZenFone 4 A400CG', specs: '4.0" WVGA, Intel Atom Z2520, 1GB RAM, Android' },
    { id: 2045, brand: 'asus', model: 'ASUS ZenFone 5 A500CG', specs: '5.0" HD, Intel Atom Z2580, 2GB RAM, Android' },
    { id: 2046, brand: 'asus', model: 'ASUS ZenFone 6 A600CG', specs: '6.0" HD, Intel Atom Z2580, 2GB RAM, Android' },
    // ZenFone 2
    { id: 2047, brand: 'asus', model: 'ASUS ZenFone 2 ZE550ML', specs: '5.5" HD, Intel Atom Z3560, 2GB RAM' },
    { id: 2048, brand: 'asus', model: 'ASUS ZenFone 2 ZE551ML', specs: '5.5" Full HD, Intel Atom Z3580, 4GB RAM' },
    { id: 2049, brand: 'asus', model: 'ASUS ZenFone 2 Laser ZE500KL', specs: '5.0" HD, Snapdragon 410, 2GB RAM' },
    { id: 2050, brand: 'asus', model: 'ASUS ZenFone 2 Laser ZE550KL', specs: '5.5" HD, Snapdragon 615, 2GB RAM' },
    // ZenFone 3
    { id: 2051, brand: 'asus', model: 'ASUS ZenFone 3 ZE520KL', specs: '5.2" HD, Snapdragon 625, 3GB RAM' },
    { id: 2052, brand: 'asus', model: 'ASUS ZenFone 3 ZE552KL', specs: '5.5" Full HD, Snapdragon 625, 4GB RAM' },
    { id: 2053, brand: 'asus', model: 'ASUS ZenFone 3 Deluxe ZS570KL', specs: '5.7" Full HD, Snapdragon 820, 6GB RAM, первый 6GB' },
    { id: 2054, brand: 'asus', model: 'ASUS ZenFone 3 Ultra ZU680KL', specs: '6.8" Full HD, Snapdragon 652, 4GB RAM, гигант' },
    { id: 2055, brand: 'asus', model: 'ASUS ZenFone 3 Zoom ZE553KL', specs: '5.5" AMOLED, Snapdragon 625, 4GB RAM, 5000mAh' },
    // ZenFone 4
    { id: 2056, brand: 'asus', model: 'ASUS ZenFone 4 ZE554KL', specs: '5.5" Full HD, Snapdragon 630/660, 4GB RAM' },
    { id: 2057, brand: 'asus', model: 'ASUS ZenFone 4 Pro ZS551KL', specs: '5.5" AMOLED, Snapdragon 835, 6GB RAM, флагман' },
    // ZenFone 5
    { id: 2058, brand: 'asus', model: 'ASUS ZenFone 5 ZE620KL', specs: '6.2" Full HD, Snapdragon 636, 4GB RAM' },
    { id: 2059, brand: 'asus', model: 'ASUS ZenFone 5Z ZS620KL', specs: '6.2" Full HD, Snapdragon 845, 6GB RAM, флагман' },
    { id: 2060, brand: 'asus', model: 'ASUS ZenFone 5 Lite ZC600KL', specs: '6.0" Full HD, Snapdragon 430, 4GB RAM' },
    // ZenFone 6/7 (поворотная камера)
    { id: 2061, brand: 'asus', model: 'ASUS ZenFone 6 ZS630KL', specs: '6.4" Full HD, Snapdragon 855, 6GB RAM, Flip Camera' },
    { id: 2062, brand: 'asus', model: 'ASUS ZenFone 7 ZS670KS', specs: '6.67" AMOLED, Snapdragon 865, 6GB RAM, Flip Camera' },
    { id: 2063, brand: 'asus', model: 'ASUS ZenFone 7 Pro ZS671KS', specs: '6.67" AMOLED, Snapdragon 865+, 8GB RAM, Flip Camera' },
    // ZenFone 8
    { id: 2064, brand: 'asus', model: 'ASUS ZenFone 8 ZS590KS', specs: '5.9" AMOLED, Snapdragon 888, 8GB RAM, компактный' },
    { id: 2065, brand: 'asus', model: 'ASUS ZenFone 8 Flip ZS672KS', specs: '6.67" AMOLED, Snapdragon 888, 8GB RAM, Flip Camera' },
    // ZenFone 9/10/11
    { id: 2066, brand: 'asus', model: 'ASUS ZenFone 9 AI2202', specs: '5.9" AMOLED, Snapdragon 8+ Gen 1, 8GB RAM, компактный' },
    { id: 2067, brand: 'asus', model: 'ASUS ZenFone 10 AI2302', specs: '5.9" AMOLED, Snapdragon 8 Gen 2, 8GB RAM, компактный' },
    { id: 2068, brand: 'asus', model: 'ASUS ZenFone 11 Ultra AI2401', specs: '6.7" AMOLED, Snapdragon 8 Gen 3, 12GB RAM, крупный' },
    // ZenFone Go
    { id: 2069, brand: 'asus', model: 'ASUS ZenFone Go ZB500KG', specs: '5.0" IPS, Snapdragon 410, 2GB RAM' },
    { id: 2070, brand: 'asus', model: 'ASUS ZenFone Go ZB500KL', specs: '5.0" IPS, Snapdragon 410, 2GB RAM' },
    // ZenFone Live
    { id: 2071, brand: 'asus', model: 'ASUS ZenFone Live ZB501KL', specs: '5.0" IPS, Snapdragon 425, 2GB RAM' },
    { id: 2072, brand: 'asus', model: 'ASUS ZenFone Live L1 ZA550KL', specs: '5.5" IPS, Snapdragon 425, 2GB RAM' },
    // ZenFone Max
    { id: 2073, brand: 'asus', model: 'ASUS ZenFone Max ZC550KL', specs: '5.5" IPS, Snapdragon 410, 2GB RAM, 5000mAh' },
    { id: 2074, brand: 'asus', model: 'ASUS ZenFone Max Pro M1 ZB602KL', specs: '6.0" IPS, Snapdragon 636, 4GB RAM, 5000mAh' },
    { id: 2075, brand: 'asus', model: 'ASUS ZenFone Max Pro M2 ZB631KL', specs: '6.3" IPS, Snapdragon 660, 4GB RAM, 5000mAh' },
    // ZenFone Selfie
    { id: 2076, brand: 'asus', model: 'ASUS ZenFone Selfie ZD551KL', specs: '5.5" IPS, Snapdragon 615, 3GB RAM, 13 Мп фронталка' },
    // ZenFone AR (редкий)
    { id: 2077, brand: 'asus', model: 'ASUS ZenFone AR ZS571KL', specs: '5.7" AMOLED, Snapdragon 821, 8GB RAM, Tango+Daydream' },

    // ROG Phone (игровые)
    { id: 2078, brand: 'asus', model: 'ASUS ROG Phone ZS600KL', specs: '6.0" AMOLED, Snapdragon 845, 8GB RAM, 90Hz' },
    { id: 2079, brand: 'asus', model: 'ASUS ROG Phone II ZS660KL', specs: '6.59" AMOLED, Snapdragon 855+, 12GB RAM, 120Hz, 6000mAh' },
    { id: 2080, brand: 'asus', model: 'ASUS ROG Phone 3 ZS661KS', specs: '6.59" AMOLED, Snapdragon 865+, 8GB RAM, 144Hz' },
    { id: 2081, brand: 'asus', model: 'ASUS ROG Phone 5 ZS673KS', specs: '6.78" AMOLED, Snapdragon 888, 8GB RAM, 144Hz' },
    { id: 2082, brand: 'asus', model: 'ASUS ROG Phone 5 Pro', specs: '6.78" AMOLED, Snapdragon 888, 16GB RAM, доп.дисплей' },
    { id: 2083, brand: 'asus', model: 'ASUS ROG Phone 5 Ultimate', specs: '6.78" AMOLED, Snapdragon 888, 18GB RAM' },
    { id: 2084, brand: 'asus', model: 'ASUS ROG Phone 6 AI2201', specs: '6.78" AMOLED, Snapdragon 8+ Gen 1, 12GB RAM, 165Hz' },
    { id: 2085, brand: 'asus', model: 'ASUS ROG Phone 6 Pro', specs: '6.78" AMOLED, Snapdragon 8+ Gen 1, 18GB RAM, OLED задник' },
    { id: 2086, brand: 'asus', model: 'ASUS ROG Phone 6 Batman Edition', specs: '6.78" AMOLED, Snapdragon 8+ Gen 1, 12GB RAM, лимитка' },
    { id: 2087, brand: 'asus', model: 'ASUS ROG Phone 7 AI2205', specs: '6.78" AMOLED, Snapdragon 8 Gen 2, 12GB RAM, 165Hz' },
    { id: 2088, brand: 'asus', model: 'ASUS ROG Phone 7 Ultimate', specs: '6.78" AMOLED, Snapdragon 8 Gen 2, 16GB RAM, охлаждение' },
    { id: 2089, brand: 'asus', model: 'ASUS ROG Phone 8 AI2401', specs: '6.78" AMOLED, Snapdragon 8 Gen 3, 12GB RAM, 165Hz' },
    { id: 2090, brand: 'asus', model: 'ASUS ROG Phone 8 Pro', specs: '6.78" AMOLED, Snapdragon 8 Gen 3, 16GB RAM' },
    { id: 2091, brand: 'asus', model: 'ASUS ROG Phone 9 AI2501', specs: '6.78" AMOLED, Snapdragon 8 Gen 4, 12GB RAM, 185Hz' },
    { id: 2092, brand: 'asus', model: 'ASUS ROG Phone 9 Pro', specs: '6.78" AMOLED, Snapdragon 8 Gen 4, 16GB RAM' },
    { id: 2093, brand: 'asus', model: 'ASUS ROG Phone 9 FE', specs: '6.78" AMOLED, Snapdragon 8 Gen 4, 12GB RAM' }
];
