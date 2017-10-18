# -*- coding: utf-8 -*-
import re

def cadastrar(nomes):
    print 'Digite o nome:'
    nome = raw_input()
    nomes.append(nome)

def listar(nomes):
    print 'Listando nomes'
    for nome in nomes:
        print nome

def remover(nomes):
    print 'Qual nome você gostaria de remover?'
    nome = raw_input()
    nomes.remove(nome)

def alterar(nomes):
    print 'Qual nome vc gostaria de alterar?'
    nome_escolhido = raw_input()

    if nome_escolhido in nomes:
        print 'Qual é a alteração?'
        nome_alterado = raw_input()
        posicao_nome_escolhido = nomes.index(nome_escolhido)
        nomes[posicao_nome_escolhido] = nome_alterado

def procurar(nomes):
    print 'Digite nome a procurar:'
    nome_a_procurar = raw_input()

    if nome_a_procurar in nomes:
        print 'Nome encontrado'
        return

    print 'Nome não encontrado'

def procurar_regex(nomes):
    print 'Digite a expressão regular'
    regex = raw_input()

    nomes_como_string = ''.join(nomes)
    print nomes_como_string # apenas para visualizacao
    resultado = re.match(regex, nomes_como_string)
    print resultado.group()

def menu():
    nomes = []
    escolha = ''
    while escolha != '0':

        print ('Digite: 1 para cadastrar, 2 para listar os nomes, 3 para remover, 4 para alterar, '
               '5 para procurar, 6 para pesquisar regex e 0 para terminar')
        escolha = raw_input()

        if escolha == '1':
            cadastrar(nomes)

        if escolha == '2':
            listar(nomes)

        if escolha == '3':
            remover(nomes)

        if escolha == '4':
            alterar(nomes)

        if escolha == '5':
            procurar(nomes)

        if escolha == '6':
            procurar_regex(nomes)

menu()
