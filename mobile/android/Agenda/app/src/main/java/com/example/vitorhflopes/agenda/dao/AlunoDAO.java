package com.example.vitorhflopes.agenda.dao;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.example.vitorhflopes.agenda.modelo.Aluno;

import java.util.ArrayList;
import java.util.List;

public class AlunoDAO extends SQLiteOpenHelper {

    public AlunoDAO(Context context) {
        super(context, "agenda", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

        String sql = "CREATE TABLE Alunos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL," +
                " endereco TEXT, telefone TEXT, site TEXT, nota REAL);";
        sqLiteDatabase.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int oldVersion, int newVersion) {

        String sql = "DROP TABLE IF EXISTS Alunos";
        sqLiteDatabase.execSQL(sql);
        onCreate(sqLiteDatabase);
    }

    public void insere(Aluno aluno) {

        SQLiteDatabase writableDatabase = getWritableDatabase();

        ContentValues contentValues = new ContentValues();
        contentValues.put("nome", aluno.getNome());
        contentValues.put("endereco", aluno.getEndereco());
        contentValues.put("telefone", aluno.getTelefone());
        contentValues.put("site", aluno.getSite());
        contentValues.put("nota", aluno.getNota());

        writableDatabase.insert("Alunos", null, contentValues);
    }

    public List<Aluno> pegaAlunos() {

        SQLiteDatabase readableDatabase = getReadableDatabase();

        String sql = "SELECT * FROM Alunos;";
        Cursor cursor = readableDatabase.rawQuery(sql, null);

        List<Aluno> alunos = new ArrayList<>();
        while (cursor.moveToNext()) {

            Aluno aluno = new Aluno();
            aluno.setId(cursor.getLong(cursor.getColumnIndex("id")));
            aluno.setNome(cursor.getString(cursor.getColumnIndex("nome")));
            aluno.setEndereco(cursor.getString(cursor.getColumnIndex("endereco")));
            aluno.setTelefone(cursor.getString(cursor.getColumnIndex("telefone")));
            aluno.setSite(cursor.getString(cursor.getColumnIndex("site")));
            aluno.setNota(cursor.getDouble(cursor.getColumnIndex("nota")));

            alunos.add(aluno);
        }

        // Devemos fechar o cursor para que o Android possa utilizar a memória alocada
        cursor.close();

        return alunos;
    }
}
