//desafio1 - cambia el montículo a [undefined, 8, 12, 10, 17, 13, 15] and returns 3
function removeFromMinHeap(heap){
    //(2) se guarda el valor del indice 1 en valor_minimo
    let valor_minimo = heap[1]
    //(1) intercambiar este valor_minimo con el ultimo en el array heap
    heap[1] = heap[heap.length - 1];
    //elimina el valor del indice final ya copiado en el indice 1
    heap.pop();
//console.log(heap);    
    //(3) comparar valor del indice 1 con los del indice 2 y 3 que son sus hijos y asi suicesivamente
    //si padre es mayor intercambia con el hijo
        //indice del nuevo elemento
    let i = 1;
    let indice_padre = i ; // el nodo inicial es el padre
    let indice_hijo = i * 2; // el nodo del hijo menor
    let indice_hijo2 = i * 2 + 1; // el nodo del hijo mayor

    //compara padre e hijo e invierte valores si padre es mayor
    while(heap[indice_padre] > heap[indice_hijo] || heap[indice_padre] > heap[indice_hijo2] || indice_hijo2 < heap.length ) {
        let temp = heap[indice_padre];
        if (heap[indice_padre] > heap[indice_hijo]) {
            heap[indice_padre] = heap[indice_hijo];
            heap[indice_hijo] = temp;
            i = indice_hijo;
            
        } else {
                heap[indice_padre] = heap[indice_hijo2];
                heap[indice_hijo2] = temp;
                i = indice_hijo2;
        }
        indice_padre = i ; 
        indice_hijo = i * 2;
        indice_hijo2 = i * 2 + 1;
    }

    //muestra elementos del array
    console.log(heap);

    //(4) devuelve el valor saltado que fue el indice 1
    return valor_minimo;
}
console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10])); // res= [undefined, 8, 12, 10, 17, 13, 15] and returns 3
