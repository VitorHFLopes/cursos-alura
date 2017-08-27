abstract class Conta {

    protected double saldo;

    public double getSaldo() {
        return this.saldo;
    }

    public void deposita(double valor) {
        this.saldo += valor;
    }

    public void saca(double valor) {
        this.saldo -= valor;
    }

    public abstract void atualiza(double valor);
}

class ContaCorrente extends Conta implements Tributavel {

    public void atualiza(double taxa) {
        this.saldo += this.saldo * (2 * taxa);
    }

    public double calculaTributos() {
        return this.getSaldo() * 0.01;
    }
}

class ContaPoupanca extends Conta {

    public void atualiza(double taxa) {
        this.saldo += this.saldo * (3 * taxa);
    }

    public void deposita(double valor) {
        this.saldo += (valor - 0.1);
    }
}

class SeguroDeVida implements Tributavel {
    public double calculaTributos() {
        return 42;
    }
}

class AtualizadorDeContas {
    private double saldoTotal = 0;
    private double selic;

    public AtualizadorDeContas(double selic) {
        this.selic = selic;
    }

    public void roda(Conta conta) {

        System.out.println(conta.getSaldo());

        conta.atualiza(this.selic);

        System.out.println(conta.getSaldo());

        this.saldoTotal += conta.getSaldo();
    }

    public double getSaldoTotal() {

        return this.saldoTotal;
    }
}

class TestaContas {
    public static void main(String[] args) {
        Conta cc = new ContaCorrente();
        Conta cp = new ContaPoupanca();

        cc.deposita(1000);
        cp.deposita(1000);

        cc.atualiza(0.01);
        cp.atualiza(0.01);

        System.out.println(cc.getSaldo());
        System.out.println(cp.getSaldo());
    }
}

class TestaAtualizadorDeContas {

    public static void main(String[] args) {
        Conta cc = new ContaCorrente();
        Conta cp = new ContaPoupanca();

        cc.deposita(1000);
        cp.deposita(1000);

        AtualizadorDeContas adc = new AtualizadorDeContas(0.01);

        adc.roda(cc);
        adc.roda(cp);

        System.out.println("Saldo Total: " + adc.getSaldoTotal());
    }
}

class TestaTributavel {

    public static void main(String[] args) {
        ContaCorrente cc = new ContaCorrente();
        cc.deposita(100);
        System.out.println(cc.calculaTributos());

        // testando polimorfismo:
        Tributavel t = cc;
        System.out.println(t.calculaTributos());
    }
}

class GerenciadorDeImpostoDeRenda {
    private double total;

    void adiciona(Tributavel t) {
        System.out.println("Adicionando tributavel: " + t);

        this.total +=  t.calculaTributos();
    }

    public double getTotal() {
        return this.total;
    }
}

public class TestaGerenciadorDeImpostoDeRenda {
    public static void main(String[] args) {

        GerenciadorDeImpostoDeRenda gerenciador = new GerenciadorDeImpostoDeRenda();

        SeguroDeVida sv = new SeguroDeVida();
        gerenciador.adiciona(sv);

        ContaCorrente cc = new ContaCorrente();
        cc.deposita(1000);
        gerenciador.adiciona(cc);

        System.out.printf("O saldo é: %.2f", gerenciador.getTotal());
    }
}

interface Tributavel {
    double calculaTributos();
}
