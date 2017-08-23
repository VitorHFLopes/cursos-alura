
class Funcionario {

    private String nome;
    private String departamento;
    private double salario;
    private Data dataEntrada = new Data();
    private String rg;
    private static int identificador = 0;

    public static int getIdentificador() {

        return identificador;
    }

    public Funcionario(String nome) {

        identificador++;
        this.nome = nome;
    }

    public Funcionario() {

    }

    public String getNome() {
        return nome;
    }

    /**
     * @param nome the nome to set
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {

        this.departamento = departamento;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {

        this.salario = salario;
    }

    public Data getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Data dataEntrada) {

        this.dataEntrada = dataEntrada;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {

        this.rg = rg;
    }

    public void recebeAumento(double valorDoAumento) {

        this.salario += valorDoAumento;
    }

    public double calculaGanhoAnual() {

        return this.salario * 12;
    }

    public void mostra() {

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
    Funcionario[] funcionarios;
    int posicao;

    public Empresa(int qntdFuncionarios) {

        this.funcionarios = new Funcionario[qntdFuncionarios];
    }

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

    public Funcionario getFuncionario(int posicao) {

        return this.funcionarios[posicao];
    }

    boolean contem(Funcionario funcionario) {

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
        Empresa empresa = new Empresa(10);

        for (int i = 0; i < 5; i++) {

            Funcionario funcionario = new Funcionario();
            funcionario.setSalario(2.33 * (i + 1));
            funcionario.setNome("Vitor");

            empresa.adicionaFuncionario(funcionario);
        }

        System.out.println(empresa.contem(empresa.funcionarios[0]));
    }
}

class TestaStatic {

    public static void main(String[] args) {
        
        System.out.println(Funcionario.getIdentificador());
    }
}

class Teste {
    int x = 37;

    public static void main(String[] args) {
        System.out.println(x);
    }
}