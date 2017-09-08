package com.example.vitorhflopes.agenda;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import com.example.vitorhflopes.agenda.dao.AlunoDAO;
import com.example.vitorhflopes.agenda.modelo.Aluno;

import java.util.List;

public class ListaAlunosActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //Adicionamos o super, para que na hora de sobreescrever o método da classe pai, não
        //percamos as ações que são feitas no método da classe pai
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_alunos);

        carregalista();

        Button button = (Button) findViewById(R.id.novo_aluno);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent vaiProFormularioIntent =
                        new Intent(ListaAlunosActivity.this, FormularioActivity.class);
                startActivity(vaiProFormularioIntent);
            }
        });
    }

    private void carregalista() {
        AlunoDAO dao = new AlunoDAO(this);
        List<Aluno> alunos = dao.pegaAlunos();
        dao.close();

        //Encontra qual componentes queremos usar para criar a lista, no caso ListView
        ListView listaAlunos = (ListView) findViewById(R.id.lista_alunos);

        //Converte a lista os alunos em View, no caso o componente ListView
        ArrayAdapter<Aluno> adapter =
                new ArrayAdapter<Aluno>(this, android.R.layout.simple_list_item_1, alunos);

        listaAlunos.setAdapter(adapter);
    }

    @Override
    protected void onResume() {
        super.onResume();
        carregalista();
    }
}
