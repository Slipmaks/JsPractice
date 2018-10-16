'use strict'

exitPoint:
for ( var n = 2; n <= 10; n++ ) {

    for ( var j = 2; j < n; j++) {
        if(n%j == 0) continue exitPoint;
    }

    alert(n);
}
