# Reto #11: Papá Noel es Scrum Master

Crea un programa que compruebe que el trineo de Santa Claus hace una **parabola al saltar entre ciudades**. Recibes un **array de números** que representan la **altura** en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. **No puede volver a subir una vez que ha bajado**, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

```javascript
getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5'
```

Necesitamos que el programa devuelva un `boolean` que indique si el trineo hace una parabola o no.

**A tener en cuenta**
- Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
- No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).
