## Descripción
El programa fue pensado para resolver de forma básica los requerimientos de la recepción en un hotel.

## Funcionamiento
Serán solicitados secuencialmente todos los datos necesarios del huesped (nombre, tipo de habitación, dias de estadía).
Una vez ingresados los mismos, se podrán ingresar de la misma forma la cantidad de clientes que se necesite.
Las habitaciones serán asignadas en orden consecutivo y el programa irá almacenando las distintas variables necesarias internamente para poder informar al final los siguientes datos:
- Costo total de todas las reservas.
- Nombres de los huespedes actuales.
- Habitaciones ocupadas actualmente.

## Configuración adicional
Confiamos que la inflación no modificará los valores en mucho tiempo (cuack!), pero si así lo requiriera, el costo de cada habitacion por día, el costo del desayuno, el monto de descuento (a partir de 5 días de estadía) y el nombre del hotel pueden personalizarse según sus requerimientos, contactenos para más información.

## ALGORITMO DEL PROGRAMA:

1. Solicitar el nombre del cliente (Guardar en un array).
2. Informar opciones de habitación y sus costos, y preguntar en cual se quiere hospedar. 
3. Preguntar cantidad de dias de su estadía.
4. Si la habitación elegida es standard, preguntar si quiere incluír el desayuno.
5. Evaluar si tiene mas de 5 noches, y de ser así aplicar 10% de descuento.
6. Calcular y mostar total del cliente (Guardar en un array)
7. Preguntar al usuario si quiere ingresar otro huesped, de ser así volver a 1, de lo contrario continuar.
8. Calcular y mostar el monto total de todas las reservas del hotel.
9. Mostrar los nombres de todos los huéspedes del hotel.
10. Mostrar el listado de habitaciones ocupadas.