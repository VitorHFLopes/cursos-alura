package com.example.vitorhflopes.agenda;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class FormularioActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_formulario);

        Button botao = (Button) findViewById(R.id.formulario_salvar);

        botao.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                Toast.makeText(FormularioActivity.this, "Botao clicado", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
