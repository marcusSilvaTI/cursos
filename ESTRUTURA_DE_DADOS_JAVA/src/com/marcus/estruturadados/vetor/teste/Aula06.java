package com.marcus.estruturadados.vetor.teste;

import com.marcus.estruturadados.vetor.Vetor;

/**
 *
 * @author mauro.mortoni
 */
public class Aula06 {
public static void main(String[] args) {
         Vetor vetor = new Vetor(10);
        vetor.adiciona("elemento 01");
        vetor.adiciona("elemento 02");
        vetor.adiciona("elemento 03");
        vetor.adiciona("elemento 04");
        vetor.adiciona("elemento 05");
        
        System.out.println(vetor.busca("elemento 01"));
        System.out.println(vetor.busca("elemento 012"));
    }       
}
