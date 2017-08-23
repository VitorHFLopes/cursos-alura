class ImprimeSequencia {

    public static void main(String[] args) {

        int variavel = 13;

        while (variavel != 1) {

            if (variavel % 2 == 0) {

                variavel /= 2;
            } else if (variavel % 2 != 0) {

                variavel = (3 * variavel) + 1;
            }

            System.out.println(variavel);
        }
    }
}
