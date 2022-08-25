
public class TestaPontoFlutuante {
	public static void main (String[]args) {
		double salario;
		salario = 1250.70;
		System.out.println("meu salario é "+salario);
		double divisao = 3.14/2;
		System.out.println(divisao);
		int outraDivisao = 5/2;
		System.out.println(outraDivisao);
		double novaTentativa = 5/2;
		System.out.println(novaTentativa);
		double novaDivisao = 5.0/2;
		System.out.println(novaDivisao);
		
		float pontoFlutuante = 3.14f;
		
		int x = 200000000; /* 32bits até 2bi */
		long y = 13233213123113l; /*64bits Mais do que 2bi*/
		short z = 3212; /*números pequenos*/
		byte w = 123; /*número pequenos*/
		
		double valor1 = 0.2;
		double valor2 = 0.1;
		double total = valor1 + valor2;
		System.out.println(total);
	}
}
