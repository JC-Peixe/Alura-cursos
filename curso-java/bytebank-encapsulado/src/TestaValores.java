
public class TestaValores {
	public static void main(String[] args) {
		
		Conta conta = new Conta(1337, 24226);
		
//		conta está inconsistente		
//		conta.setAgencia(-59);
//		conta.setNumero(-199);
//		
		System.out.println(conta.getAgencia());
		
		conta.setAgencia(1232123);
		
		Conta conta2 = new Conta(1337, 16549);
		Conta conta3 = new Conta(1337, 16549);
		
		System.out.println(Conta.getTotal());
		
	}
}
