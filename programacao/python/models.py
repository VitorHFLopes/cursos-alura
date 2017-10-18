# -*- coding: utf-8 -*-

class Perfil(object): # (object) é o jeito de estender do python
    'Classe para moldar perfis de usuarios'

    def __init__(self, nome, telefone, empresa):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
        self.__curtidas = 0

    def imprimir(self):
        print 'Nome %s, Telefone %s, Empresa %s' % (self.nome, self.telefone, self.empresa)
        print 'O %s tem %s curtidas' % (self.nome, self.__curtidas)

    def curtir(self):
        self.__curtidas += 1

    def obter_curtidas(self):
        return self.__curtidas

    @staticmethod
    def gerar_perfis(nome_arquivo):
        perfis = []
        arquivo = open(nome_arquivo, 'r')

        for linha in arquivo:
            valores = linha.split(',')
            perfis.append(Perfil(*valores))

        arquivo.close()
        return perfis

class Perfil_Vip(Perfil):
    'Classe padrão para perfis de usuários VIPs'

    def __init__(self, nome, telefone, empresa, apelido=''):
        super(Perfil_Vip, self).__init__(nome, telefone, empresa)
        self.apelido = apelido

class Data(object):
    'Classe para mostrar data formatada'

    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

    def imprime(self):
        print '%s/%s/%s' % (self.dia, self.mes, self.ano)

class Pessoa(object):
    'Classe para criacao de uma pessoa'

    def __init__(self, nome, altura, peso):
        self.nome = nome
        self.altura = float(altura)
        self.peso = float(peso)

    def imprime_imc(self):
        print 'O IMC do %s é %s' % (self.nome, self.peso / (self.altura **2))
