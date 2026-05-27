#!/bin/bash

# 1. Contar directorios (hijos directos)
EASY_COUNT=$(find ./easy -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l)
MEDIUM_COUNT=$(find ./medium -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l)
HARD_COUNT=$(find ./hard -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l)

# 2. Reemplazar los números entre las etiquetas HTML usando sed
sed -i -E "s/()[0-9]+()/\1${EASY_COUNT}\2/g" README.md
sed -i -E "s/()[0-9]+()/\1${MEDIUM_COUNT}\2/g" README.md
sed -i -E "s/()[0-9]+()/\1${HARD_COUNT}\2/g" README.md

# 3. Mostrar resultados en la terminal
echo "README actualizado. Easy count: $EASY_COUNT"
echo "README actualizado. Medium count: $MEDIUM_COUNT"
echo "README actualizado. Hard count: $HARD_COUNT"