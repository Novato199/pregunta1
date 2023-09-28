int* Contar(char palabra[]){
    static int contador[26];
    for (int i= 0; i < 26; i++) {
        contador[i] = 0;
    }
    for (int i=0; palabra[i]; i++) {
        int letra = palabra[i] - 'a';
        contador[letra]++;
    }
    return contador;
}

int main() {
    int* contador = Contar("supermegafantistiquin");
    for (int i = 0; i < 26; i++) {
        char letra = 'a' + i;
        int cta = *(contador + i);
        if (cta) {
            printf("Letra %c aparece %d veces\n", letra, cta);
        }       
    }
}