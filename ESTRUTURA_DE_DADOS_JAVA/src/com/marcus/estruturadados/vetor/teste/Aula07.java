package com.marcus.estruturadados.vetor.teste;

import com.marcus.estruturadados.vetor.Vetor;

/**
 * Created by marcus.dias on 20/07/2016.
 */
public class Aula07 {
    public static void main(String[] args) {

        Vetor vetor = new Vetor(10);
        vetor.adiciona("A");
        vetor.adiciona("B");
        vetor.adiciona("C");
        vetor.adiciona("E");
        vetor.adiciona("F");
        vetor.adiciona("G");

        System.out.println(vetor);

        vetor.adiciona(3, "D");

        System.out.println(vetor);

    }
}
