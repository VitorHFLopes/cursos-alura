
class Funcionario {

    String nome;
    String departamento;
    double salario;
    Data dataEntrada = new Data();
    String rg;

    void recebeAumento(double valorDoAumento) {

        this.salario += valorDoAumento;
    }

    double calculaGanhoAnual() {

        return this.salario * 12;
    }

    void mostra() {

        System.out.println(this.nome);
        System.out.println(this.departamento);
        System.out.println(this.salario);
        System.out.println(this.dataEntrada.getFormatada());
        System.out.println(this.rg);
        System.out.println(this.calculaGanhoAnual());
        System.out.println("---------------");
    }
}

class Data {

    int dia;
    int mes;
    int ano;

    String getFormatada() {

        return this.dia + "/" + this.mes + "/" + this.ano;
    }
}

class Empresa {

    String nome;
    String cnpj;
    Funcionario[] funcionarios = new Funcionario[10];
    int posicao;

    void adicionaFuncionario(Funcionario funcionario) {

        this.funcionarios[this.posicao] = funcionario;
        this.posicao++;
    }

    void mostraFuncionarios() {

        for (int i = 0; i < this.posicao; i++) {
            System.out.println("Funcionário na posição: " + i);
            this.funcionarios[i].mostra();
        }
    }

    boolean contem(Funcionario funcionario) {

        boolean encontrou = false;

        for (int i = 0; i < this.posicao; i++) {

            if (funcionario == this.funcionarios[i]) {

                return true;
            }
        }

        return false;
    }
}

class TestaFuncionario {

    public static void main(String[] args) {
        Empresa empresa = new Empresa();

        for (int i = 0; i < 5; i++) {

            Funcionario funcionario = new Funcionario();
            funcionario.salario = 2.33 * (i + 1);

            empresa.adicionaFuncionario(funcionario);
        }

        System.out.println(empresa.contem(empresa.funcionarios[0]));
    }
}