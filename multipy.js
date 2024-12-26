function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
    return 0;
    }
    return a * b;
}