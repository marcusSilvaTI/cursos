package com.marcus.estruturadados.vetor;

import java.util.Arrays;
/**
 *
 * @author marcus.dias
 */
public class Vetor {
    
    private String[] elementos;   
    private int tamanho;
    
    public Vetor(int capacidade){
        this.elementos = new String[capacidade];
        this.tamanho = 0;
    }
    
    public boolean adiciona(String elemento){
        /*for (int i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i] == null) {
                this.elementos[i] = elemento;
                break;
            }
        }*/
        if(this.tamanho < this.elementos.length){
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;       
            return true;
        }
        return false;
    }
    
    public int tamanho(){
        return this.tamanho;
    }
    
    public String busca(int posicao){
        if(!(posicao >= 0 && posicao < this.tamanho)){
            throw new IllegalArgumentException("Posição inválida");
        }
        return this.elementos[posicao];
    }
    
    public int busca(String elemento){
        for (int i = 0; i < this.tamanho; i++) {
            if(this.elementos[i].equals(elemento)){
                return i;
            }
        }
        return -1;
    }

    @Override
    public String toString() {
        
        StringBuilder s = new StringBuilder();
        s.append("[");        
        
        for (int i = 0; i < this.tamanho-1; i++) {
            s.append(this.elementos[i]);
            s.append(",");
        }
        
        if (this.tamanho>0) {
            s.append(this.elementos[this.tamanho-1]);
        }
        
       s.append("]");
        
        return s.toString();
    }    
}