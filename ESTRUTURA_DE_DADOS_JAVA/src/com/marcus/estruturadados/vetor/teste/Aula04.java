package com.marcus.estruturadados.vetor.teste;

import com.marcus.estruturadados.vetor.Vetor;

/**
 *
 * @author mauro.mortoni
 */
public class Aula04 {
public static void main(String[] args) {
        Vetor vetor = new Vetor(10);
        vetor.adiciona("elemento 01");
        vetor.adiciona("elemento 02");
        System.out.println(vetor.tamanho());
        System.out.println(vetor.toString());
    }    
}
