package com.example.vitorhflopes.agenda;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class ListaAlunosActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //Adicionamos o super, para que na hora de sobreescrever o método da classe pai, não
        //percamos as ações que são feitas no método da classe pai
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_alunos);

        String[] alunos = {"Vitor", "Hugo", "Fernandes", "Lopes"};

        //Encontra qual componentes queremos usar para criar a lista, no caso ListView
        ListView listaAlunos = (ListView) findViewById(R.id.lista_alunos);

        //Converte a lista os alunos em View, no caso o componente ListView
        ArrayAdapter<String> adapter =
                new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, alunos);

        listaAlunos.setAdapter(adapter);
    }
}
