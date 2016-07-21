package com.marcus.estruturadados.vetor.teste;

import com.marcus.estruturadados.vetor.Vetor;

/**
 * Created by marcus on 20/07/16.
 */
public class Aula08 {
    public static void main(String[] args) {
        Vetor vetor = new Vetor(3);
        vetor.adiciona("A");
        vetor.adiciona("B");
        vetor.adiciona("C");
        vetor.adiciona("E");
        vetor.adiciona("F");
        vetor.adiciona("G");

        System.out.println(vetor);

    }
}
