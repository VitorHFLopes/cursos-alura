# -*- coding: utf-8 -*-
# declara que o arquivo será lido pelo interpretador do python como utf-8

def gera_nome_convite(nome):
    parte1 = nome[0:4]
    tamanho_nome = len(nome)
    parte2 = nome[(tamanho_nome-4):tamanho_nome]
    return parte1 + ' ' + parte2

def envia_convite(nome_formatado):
    print 'Enviando convite para %s' % (nome_formatado)

def processa_convite(nome):
    nome_formatado = gera_nome_convite(nome)
    envia_convite(nome_formatado)


def cadastrar(nomes):
    nome = raw_input()
    nomes.append(nome)

def remover(nomes):
    print 'Qual nome você gostaria de remover?'
    nome = raw_input()
    nomes.remove(nome)

# raw_input() pega entrada do teclado
