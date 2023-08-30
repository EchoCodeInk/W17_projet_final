package com.example.w17_application;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.example.w17_application.entite.Product;
import com.example.w17_application.manager.ProductManager;

public class PaymentActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
        Intent intent = getIntent();
        int idValue = intent.getIntExtra("id", -1);
        String quantityValue = intent.getStringExtra("quantity");

        Toast.makeText(this, idValue + " + " + quantityValue, Toast.LENGTH_SHORT).show();
//        Product product = ProductManager.getById(this, idValue);

    }
}