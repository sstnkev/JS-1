'use strict'

String(5) // '5'
String(-2) // '-2'
Boolean('Some string') // true
Boolean('') // false
Boolean(' ') // true
String(0) // '0'
String(NaN) // 'NaN'
Number(false) // 0
Number('Hi') // NaN
Boolean(-25) // true
+' ' // ' '
Number(' \n \t ') // NaN
String(undefined) // 'undefined'
+null // null
Boolean(undefined) // true
Number(undefined) // NaN