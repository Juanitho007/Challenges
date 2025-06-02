# Análisis de Datos de Tiendas - Challenge Data Science LATAM

## 📊 Descripción del Proyecto

Este proyecto realiza un análisis exhaustivo de datos de ventas de 4 tiendas diferentes para determinar cuál es la más viable para que el Sr. Juan realice sus inversiones. El análisis incluye facturación, ventas por categoría, calificaciones de clientes, productos más vendidos, costos de envío y análisis geográfico.

## 🛠️ Tecnologías Utilizadas

- **Python 3.x**
- **Polars** - Para manipulación eficiente de datos (optimización de tiempo de respuesta vs pandas)
- **Plotly Express** - Para visualizaciones interactivas
- **Plotly Graph Objects** - Para mapas geográficos
- **Typing** - Para type hints y mejor documentamiento del código

## 📁 Estructura del Proyecto

```
├── tiendas_analysis.py          # Script principal con todo el análisis
├── README.md                    # Este archivo
└── data/                        # Datos fuente (URLs remotas)
    ├── tienda_1.csv
    ├── tienda_2.csv
    ├── tienda_3.csv
    └── tienda_4.csv
```

## 📈 Análisis Realizados

### 1. **Análisis de Facturación**
- Cálculo de ingresos totales por tienda
- Visualización con gráfico de dispersión

### 2. **Ventas por Categoría**
- Conteo de productos vendidos por categoría
- Identificación de categorías top por tienda
- Gráfico de barras facetado por categoría

### 3. **Calificación Promedio**
- Cálculo del promedio de calificaciones de clientes
- Comparación entre tiendas

### 4. **Productos Más y Menos Vendidos**
- Identificación de productos estrella y con bajo rendimiento
- Análisis por tienda individual

### 5. **Costo de Envío Promedio**
- Análisis de costos logísticos por tienda

### 6. **Visualizaciones Interactivas**
- Gráficos de dispersión para ingresos y calificaciones
- Gráfico de barras para ventas por categoría

### 7. **Análisis Geográfico (Extra)**
- Mapeo de coordenadas de ventas
- Mapa de calor de distribución geográfica
- Análisis de patrones por ubicación

## 🔍 Resultados Principales

### Facturación por Tienda:
1. **Tienda 1**: $1,150,880,400 (Primer lugar)
2. **Tienda 2**: $1,116,343,500 (Segundo lugar)
3. **Tienda 3**: $1,098,019,600 (Tercer lugar)
4. **Tienda 4**: $1,038,375,700 (Último lugar)

### Calificaciones Promedio:
1. **Tienda 3**: 4.05 ⭐
2. **Tienda 2**: 4.04 ⭐
3. **Tienda 4**: 4.00 ⭐
4. **Tienda 1**: 3.98 ⭐

### Categorías Dominantes:
- **Muebles** - Categoría líder en todas las tiendas
- **Electrónicos** - Segunda categoría más vendida

## 💡 Conclusiones y Recomendaciones

Después del análisis completo, se recomienda al **Sr. Juan** considerar los siguientes puntos:

### **Tienda 1** - Recomendación: ⭐⭐⭐⭐
- ✅ **Mayor facturación** ($1,150,880,400)
- ✅ Fuerte en categorías rentables (Muebles y Electrónicos)
- ⚠️ Calificación más baja (3.98) - Oportunidad de mejora en servicio

### **Tienda 2** - Recomendación: ⭐⭐⭐
- ✅ Segunda mejor facturación
- ✅ Buena calificación (4.04)
- ✅ Balance entre rentabilidad y satisfacción

### **Tienda 3** - Recomendación: ⭐⭐⭐
- ✅ **Mejor calificación** de clientes (4.05)
- ⚠️ Facturación moderada
- ✅ Excelente reputación

### **Tienda 4** - Recomendación: ⭐⭐
- ❌ **Menor facturación** - No viable mantenerla
- ✅ Calificación aceptable (4.00)
- ❌ Bajo rendimiento económico

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
```bash
pip install polars plotly
```

### Ejecución
```python
# Ejecutar el script completo
python tiendas_analysis.py

# O ejecutar por secciones en Jupyter/Colab
# Copiar y pegar las secciones según necesidad
```

### URLs de Datos
El proyecto utiliza datos remotos desde GitHub:
- `tienda_1.csv`: Datos de la primera tienda
- `tienda_2.csv`: Datos de la segunda tienda  
- `tienda_3.csv`: Datos de la tercera tienda
- `tienda_4.csv`: Datos de la cuarta tienda

## 📊 Estructura de Datos

Cada dataset contiene las siguientes columnas:
- `Producto`: Nombre del producto
- `Categoría del Producto`: Categoría a la que pertenece
- `Precio`: Precio de venta
- `Calificación`: Puntuación del cliente (1-5)
- `Costo de envío`: Costo logístico
- `lat`: Latitud de la venta
- `lon`: Longitud de la venta

## 🗺️ Funcionalidades Extra

### Análisis Geográfico
- **Mapa de dispersión**: Visualización de todas las tiendas en mapa mundial
- **Mapa de calor**: Identificación de zonas de alta concentración de ventas
- **Análisis de patrones**: Correlación entre ubicación geográfica y rendimiento

## 📝 Notas Técnicas

- **Optimización**: Se eligió Polars sobre Pandas para mejor rendimiento
- **Flexibilidad**: Código modular con funciones reutilizables
- **Visualización**: Gráficos interactivos con Plotly para mejor experiencia
- **Type Hints**: Uso de typing para mejor documentación y mantenimiento

## 🤝 Contribuciones

Este proyecto fue desarrollado como parte del Challenge Data Science LATAM. Las mejoras y sugerencias son bienvenidas.

## 📄 Licencia

Proyecto educativo - Uso libre para fines de aprendizaje.

---

**Autor**: Juan Manuel Nuñez de la Cruz  
**Fecha**: 2025  
**Herramientas**: Python, Polars, Plotly