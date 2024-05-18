# Tips and Tricks

## Comandos

### Crear proyecto

La forma más recomendada es utilizar Vite

```bash
npm create vite@latest project-example -- --template react
```

1.  `npm` : Comando para invocar al Administrador de Paquetes de Node.

2.  `create` : Comando dentro de npm que te permite crear un nuevo proyecto basado.

3.  `vite@latest` : Esto especifica la versión de Vite a usar. En este caso, es la última versión.

4.  `NOMBRE DEL PROYECTO`: Este es el nombre del nuevo proyecto que se creará.
    Se recomienda usar la nomenclatura "kebab-case", donde las palabras están separadas por
    guiones y las letras están en minúscula.

    Ejemplos:

        - project
        - my-react-app
        - some-react-project

5.  `--` : Este es un separador que indica el final de las opciones de comando de npm y el comienzo de los argumentos para la plantilla de Vite.

6.  `--template react`: Este argumento especifica que la plantilla de React debe usarse para crear el nuevo proyecto.

Luego instalamos las dependencias.

### Instalar dependencias

Para instalar las dependencias del `package.json`, ejecutamos el siguiente comando una vez dentro de
la carpeta del proyecto:

```bash
npm install
```

### Ejecutar en desarrollo

Depende de la configuración usada en el `package.json`, pero normalmente se utiliza el siguiente comando, una vez en la carpeta del proyecto:

```bash
npm run dev
```
